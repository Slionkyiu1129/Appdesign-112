import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Image, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BookScreen from "../screens/BookScreen";
import DetailScreen from "../screens/DetailScreen";

import MyBookScreen from "../screens/MyBookScreen";
import WishlistScreen from "../screens/WishlistScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

//DrawerContent
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle
    >
      <View style={styles.userContainer}>
        <Image
          style={styles.drawerimage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHcOptvjqKcOfu335w1cHsy3ni_d_qDdlg6XSWr3ndEFFwfv3"
          }} />
        <Text style={styles.user}>May</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  userContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDEF'
  },
  drawerimage: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 10,
    margin: 5,
    marginLeft: 20
  },
  user: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 20,
  }
});

//MyTabs
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistStack}
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen
        name="MyBook"
        component={MyBookStack}
        options={{
          title: "MyBook",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

//My Drawer
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: '#6200EE',
        drawerInactiveTintColor: 'gray',
        drawerStyle: { width: 250 },
        drawerLabelStyle: { fontSize: 14, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountStack}
        options={{
          drawerLabel: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingStack}
        options={{
          drawerLabel: "Setting",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

//HomeStack
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BookScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

//AccountStack
const AccountStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

//SettingStack
const SettingStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          headerShown: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

//MyBookStack
const MyBookStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={MyBookScreen}
        options={{
          headerShown: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={26}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={26}
            />
          )
        }}
      />
    </Stack.Navigator>
  );
}

//WishlistStack
const WishlistStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={WishlistScreen}
        options={{
          headerShown: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={26}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={26}/>
          )
        }}
      />
    </Stack.Navigator>
  );
}
export default Navigation;