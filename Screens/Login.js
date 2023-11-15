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
import { useState } from "react";
export default function App({ navigation }) {
  const [tk,settk]=useState("");
  const [mk,setmk]=useState("");
  function dangNhap(){
    fetch("https://nt93tv-8080.csb.app/logins")
      .then((response) => response.json())
      .then((data) => {
        const isDangNhap = data.find((item)=> item.email === tk && item.password===mk)
        if(isDangNhap){
          navigation.navigate("DisplayNote");
        }
        else{
          console.log("tài khoản mmk k chính xác")
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Có lỗi xảy ra: ", error);
      });
  }
  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "60%", alignItems: "center" }}>
        <Image
          source={require("../assets/TakeNote.png")}
          style={{
            marginTop: "10px",
            width: "170px",
            height: "170px",
            resizeMode: "contain",
            borderRadius: "20px",
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: "10px",
            borderWidth: 1,
            borderRadius: 1,
            width: "100%",
            height: "50px",
          }}
        >
          <View style={{ width: "90%", height: "50px", flexDirection: "row" }}>
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
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: "10px",
            borderWidth: 1,
            borderRadius: 1,
            width: "100%",
            height: "50px",
          }}
        >
          <View style={{ width: "90%", height: "50px", flexDirection: "row" }}>
            <Image
              source={require("../assets/lock.png")}
              style={{
                margin: "auto",
                width: "20px",
                height: "20px",
                resizeMode: "contain",
              }}
            />
            <TextInput
            onChangeText={setmk}
              style={{ margin: "auto", width: "100%", height: "50px" }}
              placeholder="Enter password"
            />
            <TouchableOpacity>
              <Image
                source={require("../assets/eye.png")}
                style={{
                  margin: "auto",
                  width: "20px",
                  height: "20px",
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity
          onPress={() => {
          dangNhap();
          
          }}
            style={{
              marginTop: "10px",
              borderWidth: 1,
              borderRadius: 1,
              width: "60%",
              height: "40px",
              backgroundColor: "#7cfc00",
              justifyContent: "center",
              borderRadius: "20px",
              marginLeft: "50px",
            }}
          >
            <Text
              style={{
                margin: "auto",
                color: "black",
                fontWeight: "20px",
                fontSize: "20px",
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{ marginLeft:'35px',color: "#9932cc", fontWeight: "20px", fontSize: "20px" }}
            >
              For got your password?
            </Text>
          </TouchableOpacity>
          <Text
            style={{ margin: "auto", fontWeight: "20px", fontSize: "20px" }}
          >
            Or login with
          </Text>

          <TouchableOpacity style={{ marginTop: "50px", margin: "auto" }}>
            <Image
              source={require("../assets/google.png")}
              style={{
                margin: "auto",
                width: "40px",
                height: "40px",
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                margin: "auto",
                marginLeft: "40px",
                fontWeight: "20px",
                fontSize: "20px",
              }}
            >
              Or "Don't have an account?"
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
              style={{
                marginTop: "10px",
                marginLeft: "50px",
                borderWidth: 1,
                borderRadius: 1,
                width: "60%",
                height: "40px",
                backgroundColor: "#ff6347",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              <Text
                style={{
                  margin: "auto",
                  color: "black",
                  fontWeight: "20px",
                  fontSize: "20px",
                }}
              >
                REGISTER
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
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
