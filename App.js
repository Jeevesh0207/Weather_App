import {
    SafeAreaView,
    Text,
    View,
  } from 'react-native';
  import * as SplashScreen from 'expo-splash-screen'
  import { useCallback, useState } from 'react';
  import { useFonts } from 'expo-font';
  
  import styles from './StyleApp';
  import Home from './Components/Home/Home';
  import { Loading } from './Components';
  SplashScreen.preventAutoHideAsync();
  
  
  
  export default function App() {
    const [fontsLoaded] = useFonts({
      "LatoBlack": require('./assets/Lato/Lato-Black.ttf'),
      "LatoBold": require('./assets/Lato/Lato-Bold.ttf'),
      "LatoLight": require('./assets/Lato/Lato-Light.ttf'),
      "LatoRegular": require('./assets/Lato/Lato-Regular.ttf'),
      "LatoThin": require('./assets/Lato/Lato-Thin.ttf'),
      "GothamBold":require('./assets/Lato/GothamBold.ttf')
    });
    const onLoayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return (
        <Loading />
      )
    }
  
    return (
      <SafeAreaView onLayout={onLoayoutRootView} style={{flex:1}}>
        <View style={styles.SafeAreaContainer}>
          <Home />
        </View>
      </SafeAreaView>
    );
  }
  