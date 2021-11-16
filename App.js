import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      {/* loading image offine image */}
      <Image
        source={logo}
        style={styles.logo1}
        // style={{ width: 100, height: 100 }}
      />
      {/* loading image on the cloud */}
      <Image
        source={{
          uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8JxnC_qJU3uAxMvEnXP9hgHaFj%26pid%3DApi&f=1",
        }}
        style={styles.logo2}
        // style={{ width: 160, height: 120 }}
      />
      <Text style={styles.instructions}>
        Hello there, welcome to the ImageViewer😁
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo1: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  logo2: {
    width: 320,
    height: 240,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 15,
    marginHorizontal: 15,
    marginVertical: 20,
  },
});
