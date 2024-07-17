import { Text } from "react-native";
import { StyleSheet } from "react-native";

export function Footer() {
  return <Text style={styles.writtenContent}>I'm the footer</Text>;
}

const styles = StyleSheet.create({
  writtenContent: {
    paddingTop: 10,
    color: "white",
  },
});
