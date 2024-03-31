import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Star from "./star";

const HotBookDetail = ({ book, navigation }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Pressable
            onPress={() => navigation.navigate("Detail", book)}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: book.image
              }}
            />
            {book.starSection ? <Star star={book.star} /> : null}
          </Pressable>
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTitleStyle}>{book.title}</Text>
          <Text style={styles.headerContentStyle}>{book.artist}</Text>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 5
  },
  cardContainerStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 5,
    width: 140,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
    marginBottom: 3
  },
  headerContentStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: "#666666",
    width: '100%'
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
  },
  imageStyle: {
    height: 200,
    width: 140,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
});


export default HotBookDetail;