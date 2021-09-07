/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ProgressBar = ({bgColor, progressWidth, label, isValueVisible}) => {
  return (
    <View style={styles.containerStyles}>
      <View
        style={[
          styles.fillerStyles,
          {
            width: `${progressWidth}%`,
            backgroundColor: bgColor,
          },
        ]}>
        <View style={styles.progressContent}>
          <Text
            style={[
              styles.labelStyles,
              {fontWeight: progressWidth > 0 ? '500' : 'normal'},
            ]}>
            {label}
          </Text>
          {isValueVisible && (
            <Text
              style={[
                styles.percentText,
                {fontWeight: progressWidth > 0 ? '500' : 'normal'},
              ]}>{`${progressWidth}%`}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  containerStyles: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  fillerStyles: {
    height: '100%',
    textAlign: 'right',
  },
  percentText: {
    marginRight: '6%',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  labelStyles: {
    marginLeft: '6%',
    fontSize: 20,
  },
  progressContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth - 25,
    alignItems: 'center',
    height: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});
