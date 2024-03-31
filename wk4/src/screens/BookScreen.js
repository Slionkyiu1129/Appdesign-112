import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import BooksList from "../components/BooksList";
import booksData from "../json/books.json";

const BookScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image
            source={{ uri: 'https://static-00.iconduck.com/assets.00/burger-menu-icon-512x397-k97autax.png' }}
            style={{ width: 20, height: 20, margin: 20 }}
          />
        </Pressable>
        <Pressable>
          <Image
            source={{ uri: 'https://cdn.icon-icons.com/icons2/3373/PNG/512/search_icon_211229.png' }}
            style={{ width: 25, height: 25, margin: 20 }}
          />
        </Pressable>
      </View>
      <BooksList
        list={booksData.BooksList}
        navigation={navigation}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffff',
    flex: 1
  },
  header: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default BookScreen;