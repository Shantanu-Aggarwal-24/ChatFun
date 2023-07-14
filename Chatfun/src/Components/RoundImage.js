import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, textScale } from "../Styles/responsiveSize";
import colors from "../Styles/colors";
import fontFamily from "../Styles/fontFamily";

const RoundImage = ({ image = "", size = 60, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: moderateScale(size),
        width: moderateScale(size),
        borderRadius: moderateScale(size / 2),
        backgroundColor: colors.grey,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.grey,
      }}
    >
      {!!image ? (
        <Image
          style={{
            height: moderateScale(size),
            width: moderateScale(size),
            borderRadius: moderateScale(size / 2),
          }}
          source={{ uri: image }}
        />
      ) : (
        <Text style={styles.textStyle}>Add Photo</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: textScale(12),
    fontFamily: fontFamily.blackFont,
    color: colors.lightBlue,
  },
});

export default RoundImage;
