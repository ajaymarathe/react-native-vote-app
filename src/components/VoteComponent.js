import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Grid, Row} from 'native-base';

const VoteComponent = () => {
  const [isVoteSubmitted, setIsVoteSubmitted] = useState(false);
  return (
    <Container>
      <Grid>
        <Row size={40}>
          <Text
            style={[
              styles.pollHeading,
              {color: isVoteSubmitted ? 'white' : '#0F0F0F'},
            ]}>
            Do you think this is good design for poll?
          </Text>
        </Row>
        <Row size={60} />
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
});
