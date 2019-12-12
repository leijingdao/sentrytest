import React from 'react';
import {View, Text, Button} from 'react-native';
import * as Sentry from '@sentry/react-native';

export default class T extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>测试报错</Text>
        {/* <Button title="trigger a js exception" onPress={this.report} />
        <Button title="trigger a native crash" onPress={this.reportNaitive} />
        <Button title="try catch" onPress={this.reportCaptureException} />
        <Button title="fsdfsdf" onPress={this.ccc} /> */}

        <Button
          title="trigger a js exception"
          onPress={() => {
            throw new Error('gerggdf');
          }}
        />
        <Button
          title="trigger a native crash"
          onPress={() => {
            A();
          }}
        />
        <Button
          title="try catch"
          onPress={() => {
            B();
          }}
        />
        <Button
          title="fsdfsdf"
          onPress={() => {
            Number.WJFOIEJF;;
          }}
        />
      </View>
    );
  }
}
