import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native"
import BooksDetail from "./BooksDetail";
import sections from "../json/books.json";
import HotBookDetail from "./HotBookDetail";

const BooksList = ({ navigation }) => {
    const renderSectionHeader = ({ section }) => (
        <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <FlatList
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <HotBookDetail book={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.title}
            />

        </>
    );
    const renderItem = ({ item, section }) => {
        if (section.horizontal) {
            return null;
        }
        return <BooksDetail book={item} />;
    };
    return (
        <SectionList
            sections={sections}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />

    );
};
const styles = StyleSheet.create({
    sectionHeader: {
        fontWeight: '700',
        fontSize: 24,
        paddingTop: 8,
        paddingLeft: 15,
        paddingRight: 20,
    },
});

export default BooksList;