import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,0,126)');
  // const [reset, setReset] = useState('rgb(0,0,0)');
  const resetBG = () => {
    let color = 'rgb(0,0,0)'
    setRandomColor(color)
  }
  const changeBG = () => {
    let color = 'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    setRandomColor(color)
  }
  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBG}>
          <Text style={styles.resetButton}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase"
  },
  resetButton: {
    fontSize: 20,
    backgroundColor: "#FF2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase"
  }


})