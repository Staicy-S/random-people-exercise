import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "expo-image";

export function FlatListUsers() {
  const [displayPeople, setDisplayPeople] = useState([]);
  const randomPeopleUrl = "https://randomuser.me/api/?results=10";
  useEffect(() => {
    async function gettingRandomPeople() {
      try {
        const { data } = await axios.get(randomPeopleUrl);
        console.log(data.results.id);
        setDisplayPeople(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally 🎉");
      }
    }
    gettingRandomPeople();
  }, []);

  return (
    <FlatList
      style={styles.flatlistContainer}
      data={displayPeople}
      keyExtractor={(item) => item.email}
      renderItem={({ item }) => (
        <View style={styles.parentView}>
          <Text style={styles.writtenContent}>
            {item.name.first} {item.name.last}
          </Text>
          <Text style={styles.writtenContent}>{item.email}</Text>

          <Image style={styles.image} source={item.picture.large} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatlistContainer: {
    backgroundColor: "purple",
    flex: 1,
    width: "100%",
    padding: 10,
  },
  parentView: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  writtenContent: {
    color: "white",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
  },
});
