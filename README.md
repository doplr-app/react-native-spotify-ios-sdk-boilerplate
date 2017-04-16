## [react-native-spotify-ios-sdk-boilerplate](https://github.com/Emphaz/react-native-spotify-ios-sdk-boilerplate)

## Installation
Simply install all the dependencies through `npm`
```
npm install
```

Add your Spotify Application client_id into the `react-native-spotify-ios-sdk-boilerplate/ios/react-native-spotify-ios-sdk-boilerplate/SpotifyModule.m` file
```
  // The spotify client id
  [[SPTAuth defaultInstance] setClientID:@"[your-client-id]"];
```

## Usage
Start the demo application with the `react-native cli`:
```
react-native run-ios
```