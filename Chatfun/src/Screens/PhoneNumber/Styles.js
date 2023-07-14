import { StyleSheet } from "react-native";
import colors from "../../Styles/colors";
import fontFamily from "../../Styles/fontFamily";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../Styles/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(16),
    alignItems: "center",
  },
  logoStyle: {
    width: width / 1.5,
    height: height / 2,
    alignSelf: "center",
  },
  headingStyle: {
    fontSize: textScale(32),
    fontFamily: fontFamily.bold,
    alignSelf: "center",
  },
  descStyle: {
    fontSize: textScale(16),
    fontFamily: fontFamily.regular,
    textAlign: "center",
    marginTop: moderateScaleVertical(16),
  },
  agreeStyle: {
    fontSize: textScale(20),
    fontFamily: fontFamily.bold,
    marginTop: moderateScaleVertical(24),
    color: colors.blue,
    alignSelf: "center",
  },
  dialCodeStyle: {
    fontSize: textScale(16),
    fontFamily: fontFamily.regular,
  },
  phoneInputStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.7,
    paddingHorizontal: moderateScale(8),
  },
  inputStyle:{
    padding:moderateScale(12),
    borderBottomColor: colors.grey,
    fontFamily: fontFamily.regular,
    fontSize:textScale(16)
  }
});

export default styles;
