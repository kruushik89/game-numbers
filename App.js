import {useState} from "react";
import {ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";

import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen pickedNumber={pickedNumberHandler}/>

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient
      colors={[Colors.blue700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35
  }
});
