import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Pressable, Linking } from 'react-native';
import Star from "../components/star";

const DetailScreen = ({ route, navigation }) => {
  let [flag, setFlag] = React.useState(true);
  let changeBookMark = () => setFlag(previousState => !previousState);
  let bookMarkPath = flag ? 'https://raw.githubusercontent.com/Slionkyiu1129/Appdesign-112/main/pic/icon_bookmark.png' : 'https://raw.githubusercontent.com/Slionkyiu1129/Appdesign-112/main/pic/icon_bookmark_actived.png'
  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/011/228/099/non_2x/arrow-icon-sign-symbol-design-free-png.png' }}
            style={{ width: 20, height: 20 ,marginTop:10}}
          />
        </Pressable>
        <Pressable onPress={() => changeBookMark()}>
          <Image
            source={{ uri: bookMarkPath }}
            style={{ width: 22, height: 28 ,marginTop:10 }}
          />
        </Pressable>
      </View>

      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={styles.containerStyle}>
          <Image
            source={{ uri: route.params.image }}
            style={styles.image}
            key={route.params.title}
          />
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.artist}>{route.params.artist}</Text>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            {route.params.starSection ? <Star star={route.params.star} style={styles.star} /> : null}
            {route.params.starSection ? <Text style={styles.star}>{route.params.star}.0/5.0</Text> : null}
          </View>

          <Text style={styles.text}>{route.params.info}</Text>

          <Pressable style={styles.button}>
            <Text style={{ color: '#fff', fontSize: 14, fontWeight:'500' }}>
              BUY NOW FOR $46.99
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create ({
  containerStyle: {
    flex:1,
    marginHorizontal: 3,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff' 
  },
  image: {
    width: 210,
    height: 300,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    marginBottom: 15,
  },
  title : {
    fontWeight: '500',
    fontSize: 24,
  },
  artist: {
    fontSize: 14,
    fontWeight: '400',
    color: "#666666",
    marginTop: 8,
    marginHorizontal: 5
  },
  star:{
    fontSize: 14,
    fontWeight: '400',
    color: "#131313",
    marginTop: 12,
    marginHorizontal: 5
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 6,
    padding:10,
    paddingRight:15,
    paddingLeft:15,
    marginTop: 20,
    marginBottom: 150
  },
  text: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
    marginTop: 8,
    paddingHorizontal: 40,
    textAlign: 'center',
    lineHeight: 24, 
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default DetailScreen;