import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImagePickerIOS,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "./assets/logo.png";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  // initiate a variable to hold our selected image
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    // ask users for permission to the photo
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    // if the users fail to grant us the permission, we quit
    if (permissionResult.granted === false) {
      alert(
        "Permission to access camera roll is reuqire for this application."
      );
      return;
    }

    // test print
    console.log("The user has granted camera roll access permission");

    // let the user pick the image and store the result in pickerResult
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    // if the user refuse to pick an image
    if (pickerResult.calcelled === true) {
      console.count("The user has refuse picking any image");
      return;
    }

    // from here we can inspect what's inside the pickerReuslt variable
    console.log(pickerResult);

    // we store the selected image
    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }

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
      <TouchableOpacity
        onPress={() => alert("Yo, don't touch me!")}
        style={styles.button1}
      >
        <Text style={styles.buttonFont1}>Touch me!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button1}>
        <Text style={styles.buttonFont1}>Pick a photo</Text>
      </TouchableOpacity>
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
  button1: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonFont1: {
    color: "yellow",
    fontSize: 20,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
