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

Create a new Spotify Application by following this [tutorial](https://developer.spotify.com/technologies/spotify-ios-sdk/tutorial/) 
(section `Creating Your Client ID, Secret and Callback URI`)

Add the following callback to the application: `my-app-auth://spotify`

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

Open the remote js debugger so you can see `console.log` output.

You can then click on the `Spotify Auth` button, log yourself in and you'll see your token in the console.