/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Grid, Row} from 'native-base';
import ProgressBar from '../components/ProgressBar';

const VoteComponent = () => {
  const [isVoteSubmitted, setIsVoteSubmitted] = useState(false);
  const [yesDefinitelyCount, setYesDefinitelyCount] = useState(0);
  const [maybeCount, setMaybeCount] = useState(0);
  const [notReallyCount, setNotReallyCount] = useState(0);

  const handleYesDefinitely = () => {
    if (yesDefinitelyCount < 100) {
      setYesDefinitelyCount(yesDefinitelyCount + 1);
    }
  };

  const handleMaybeCount = () => {
    if (maybeCount < 100) {
      setMaybeCount(maybeCount + 1);
    }
  };

  const handleNotReally = () => {
    if (notReallyCount < 100) {
      setNotReallyCount(notReallyCount + 1);
    }
  };

  return (
    <Container style={{backgroundColor: isVoteSubmitted ? '#45D3A5' : 'white'}}>
      <Grid>
        <Row size={40} style={styles.firstRow}>
          <Text
            style={[
              styles.pollHeading,
              {color: isVoteSubmitted ? 'white' : '#0F0F0F'},
            ]}>
            Do you think this is good design for poll?
          </Text>
        </Row>
        <Row size={60}>
          <Grid>
            <Row size={20} style={styles.progressRow}>
              <TouchableOpacity
                onPress={() => handleYesDefinitely()}
                disabled={isVoteSubmitted}>
                <ProgressBar
                  label={'Yes Definitely!'}
                  bgColor={'#E2F9ED'}
                  progressWidth={yesDefinitelyCount}
                  isValueVisible={isVoteSubmitted}
                />
              </TouchableOpacity>
            </Row>
            <Row size={20} style={styles.progressRow}>
              <TouchableOpacity
                onPress={() => handleMaybeCount()}
                disabled={isVoteSubmitted}>
                <ProgressBar
                  label={'Maybe, in the right context...'}
                  bgColor={'#E2F9ED'}
                  progressWidth={maybeCount}
                  isValueVisible={isVoteSubmitted}
                />
              </TouchableOpacity>
            </Row>
            <Row size={20} style={styles.progressRow}>
              <TouchableOpacity
                onPress={() => handleNotReally()}
                disabled={isVoteSubmitted}>
                <ProgressBar
                  label={'No, not really!'}
                  bgColor={'#E2F9ED'}
                  progressWidth={notReallyCount}
                  isValueVisible={isVoteSubmitted}
                />
              </TouchableOpacity>
            </Row>
            <Row size={20} style={{marginTop: 20, backgroundColor: '#45D3A5'}}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {
                  setIsVoteSubmitted(!isVoteSubmitted);
                }}>
                {isVoteSubmitted ? (
                  <Text style={styles.submitText}>
                    Thank you for your response!
                  </Text>
                ) : (
                  <Text style={styles.submitText}>Submit Vote!</Text>
                )}
              </TouchableOpacity>
            </Row>
          </Grid>
        </Row>
      </Grid>
    </Container>
  );
};

export default VoteComponent;

const styles = StyleSheet.create({
  firstRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pollHeading: {
    fontSize: 36,
    width: '95%',
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
  },
  submitButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
  progressRow: {
    margin: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
