import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      {/* loading image offine image */}
      <Image source={logo} style={{ width: 305, height: 159 }} />
      {/* loading image on the cloud */}
      <Image
        source={{
          uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8JxnC_qJU3uAxMvEnXP9hgHaFj%26pid%3DApi&f=1",
        }}
        style={{ width: 160, height: 120 }}
      />
      <Text
        style={{ backgroundColor: "chartreuse", color: "#888", fontSize: 18 }}
      >
        Hello there, welcome to the ImageViewer
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
});
