import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { Component } from "react";
import { moderateScale,textScale } from "../Styles/responsiveSize";
import colors from '../Styles/colors'
import fontFamily from "../Styles/fontFamily";

const TextInputComp = ({ placeholder = "",inputStyle = {} ,...props }) => {
  return (
    <Fragment>
      <TextInput
        placeholder={placeholder}
        keyboardType="phone-pad"
        style={styles.inputStyle}
        {...props}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  inputStyle: {
    padding: moderateScale(12),
    borderBottomColor: colors.grey,
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
    height:moderateScale(42)
  },
});

export default TextInputComp;
