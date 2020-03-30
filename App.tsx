import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'http://saraexpress.com.my/myhomie/explore/' }} style={{ marginTop: 0 }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
