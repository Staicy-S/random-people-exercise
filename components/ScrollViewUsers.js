import { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import axios from "axios";

export function ScrollViewUsers() {
  const [displayPeople, setDisplayPeople] = useState([]);
  const randomPeopleUrl = "https://randomuser.me/api/?results=10";
  useEffect(() => {
    async function gettingRandomPeople() {
      try {
        const { data } = await axios.get(randomPeopleUrl);
        console.log(data);
        setDisplayPeople(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }
    gettingRandomPeople();
  }, []);

  return (
    <ScrollView style={styles.scrollviewContainer}>
      {displayPeople.map((person) => {
        return (
          <View
            key={person.name.last}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image style={styles.image} source={person.picture.large} />
            <View
              style={{
                marginLeft: 30,
              }}
            >
              <Text style={styles.writtenContent}>
                {person.name.first} {person.name.last}
              </Text>
              <Text style={styles.writtenContent}>{person.email}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollviewContainer: {
    backgroundColor: "hotpink",
    flex: 1,
    width: "100%",
    padding: 10,
  },
  writtenContent: {
    color: "white",
    padding: 2,
    textAlign: "center",
    justifyContent: "flex-end",
  },
  image: {
    marginVertical: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
