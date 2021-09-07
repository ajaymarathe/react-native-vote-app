import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Grid, Row} from 'native-base';

const VoteComponent = () => {
  const [isVoteSubmitted, setIsVoteSubmitted] = useState(false);
  return (
    <Container>
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
              <TouchableOpacity disabled={isVoteSubmitted}>
                <Text>ProgressBar</Text>
              </TouchableOpacity>
            </Row>
            <Row size={20} style={styles.progressRow}>
              <TouchableOpacity disabled={isVoteSubmitted}>
                <Text>ProgressBar</Text>
              </TouchableOpacity>
            </Row>
            <Row size={20} style={styles.progressRow}>
              <TouchableOpacity disabled={isVoteSubmitted}>
                <Text>ProgressBar</Text>
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
  pollHeading: {
    fontSize: 36,
    width: '95%',
    marginTop: 20,
  },
  firstRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 24,
  },
  progressRow: {
    margin: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
