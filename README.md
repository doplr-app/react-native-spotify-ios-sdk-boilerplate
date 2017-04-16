## [react-native-spotify-ios-sdk-boilerplate](https://github.com/Emphaz/react-native-spotify-ios-sdk-boilerplate)

This is the minimal react-native project demonstrating how to use the Spotify iOS SDK with 
the [react-native-ios-spotify-sdk](https://github.com/Emphaz/react-native-ios-spotify-sdk) module
to perform authentication.

You can find the tutorial explaining how to install and use the module [here](https://github.com/Emphaz/react-native-ios-spotify-sdk/blob/master/README.md)

## Installation
Simply install all the dependencies through `npm`
```
npm install
```

Add your Spotify Application client_id into the `react-native-spotify-ios-sdk-boilerplate/ios/react-native-spotify-ios-sdk-boilerplate/SpotifyModule.m` file
```objective-c
  // The spotify client id
  [[SPTAuth defaultInstance] setClientID:@"[your-client-id]"];
```

Do not change the callback url unless you know how to modify it in Xcode too.

## Usage
Start the demo application with the `react-native cli`:
```
react-native run-ios
```