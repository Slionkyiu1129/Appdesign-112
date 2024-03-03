import React from "./node_modules/react";
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import AlbumList from "./src/component/AlbumList.js";
import Header from "./src/component/Header.js";
import albumData from "./src/json/Albums.json";

const App = () => {
    return (
        <SafeAreaView style={styles.containerStyle}>
            <StatusBar />
            <Header />
            <AlbumList />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default App;