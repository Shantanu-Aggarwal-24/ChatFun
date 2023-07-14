import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import colors from "../Styles/colors";

const WrapperContainer = ({
  statusBarColor = colors.white,
  barStyle = "dark-content",
  containerStyle = {},
  children,
}) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
});

export default WrapperContainer;
