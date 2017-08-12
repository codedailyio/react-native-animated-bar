# Responsive React Native Animated Bar

## Install

```
npm install react-native-animated-bar

yarn add react-native-animated-bar
```

## Example Usage

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AnimatedBar from "react-native-animated-bar";

export default class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('example', () => example);

```