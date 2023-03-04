import React, { useState } from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function TabOneScreen() {

  const [input, setInput] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/greenBurger.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.inputBox}>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => {
            setInput(text);
          }}
          value={input}
        />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#7AAFE6",
  },
  inputBox: {
    flex: 1,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    width: "80%",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
