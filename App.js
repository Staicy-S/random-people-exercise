import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { ChangeDisplayButton } from "./components/ChangeDisplayButton";
import { ScrollViewUsers } from "./components/ScrollViewUsers";
import { FlatListUsers } from "./components/FlatListUsers";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  const [display, setDisplay] = useState("ScrollViewUsers");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        {display === "ScrollViewUsers" ? (
          <ScrollViewUsers />
        ) : (
          <FlatListUsers />
        )}
        <View style={{ flexDirection: "row" }}>
          <ChangeDisplayButton
            title="Scroll View"
            onPress={() => setDisplay("ScrollViewUsers")}
          />
          <ChangeDisplayButton
            title="List View"
            onPress={() => setDisplay("FlatListUsers")}
          />
        </View>
        <Footer />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020202",
    alignItems: "center",
    justifyContent: "center",
  },
  writtenContent: {
    color: "white",
  },
});
