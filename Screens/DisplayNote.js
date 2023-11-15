import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "50%", flexDirection: "row" }}>
            <Image
              source={require("../assets/email.png")}
              style={{
                margin: "auto",
                width: "20px",
                height: "20px",
                resizeMode: "contain",
              }}
            />
            <TextInput
            onChangeText={settk}
              style={{ margin: "auto", width: "100%", height: "50px" }}
              placeholder="Enter email"
            />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
