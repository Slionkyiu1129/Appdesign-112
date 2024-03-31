import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";


const BooksDetail =({ book,navigation }) => {
  return (
    <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
        <Pressable
          onPress={() => navigation.navigate('Detail', book)}
        >
          <Image
            style={styles.imageStyle}
            source={{ uri: book.image }}
          />
        </Pressable>
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTitleStyle}>{book.title}</Text>
          <Text style={styles.headerContentStyle}>{book.artist}</Text>
        </View>
    </View>
  )
};
const styles = StyleSheet.create({
  cardContainerStyle: {
    flexDirection: 'column',
    paddingLeft: 8,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerContentStyle: {
    fontSize: 11,
    fontWeight: '300',
    color: "#222",
    width: '100%'
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
  },
  imageStyle: {
    height: 200,
    width: 140,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
});
export default BooksDetail;