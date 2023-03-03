import { StyleSheet, Image, TextInput } from "react-native";

import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/greenBurger.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Search your next veggie meal</Text>
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
    backgroundColor: '#7AAFE6',
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
    margin: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
