import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  Text,
  View,
  NativeModules
} from 'react-native';

const SpotifyModule = NativeModules.SpotifyModule;

export default class react_native_spotify_ios_sdk_boilerplate extends Component {
  onButtonPress() {
    SpotifyModule.authenticate(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <View style={{paddingTop:40}}>
        <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
          <Text>Spotify Auth</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('react_native_spotify_ios_sdk_boilerplate', () => react_native_spotify_ios_sdk_boilerplate);
