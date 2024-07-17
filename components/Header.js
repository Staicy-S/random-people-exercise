import { Text } from "react-native";
import { StyleSheet } from "react-native";

export function Header() {
  return <Text style={styles.writtenContent}>I'm the header</Text>;
}

const styles = StyleSheet.create({
  writtenContent: {
    paddingBottom: 10,
    color: "white",
  },
});
