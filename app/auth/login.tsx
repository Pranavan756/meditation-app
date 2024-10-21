import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";

const login = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <Text className="text-6xl text-center mt-20 text-blue-50 ">Login</Text>
      </ImageBackground>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
