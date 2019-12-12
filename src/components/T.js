import React from 'react';
import {View, Text, Button} from 'react-native';
import * as Sentry from '@sentry/react-native';

export default class T extends React.PureComponent {
  report = () => {
    throw new Error('测试错误');
  };

  reportNaitive = () => {
    // throw new Error('My first Sentry error!');
    Sentry.nativeCrash();
  };

  reportCaptureException = () => {
    // try {
    //   a.length();
    // } catch (error) {
    //   Sentry.captureException(error);
    // }
    bbbb.length();
  };

  ccc = () => {
    Promise.reject('测试错误123123');
  };

  render() {
    return (
      <View>
        <Text>测试报错</Text>
        <Button title="trigger a js exception" onPress={this.report} />
        <Button title="trigger a native crash" onPress={this.reportNaitive} />
        <Button title="try catch" onPress={this.reportCaptureException} />
        <Button title="fsdfsdf" onPress={this.ccc} />
      </View>
    );
  }
}
