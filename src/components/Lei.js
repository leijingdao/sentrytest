import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = 'CustomError';
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

export default class Lei extends React.PureComponent {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            null.toString();
          }}>
          <Text>fjwkehfiwjef</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            throw new CustomError('baz', 'bazMessage');
          }}>
          <Text>fjwkehfiwjef</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
