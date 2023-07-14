import { StyleSheet } from "react-native";
import colors from "../../Styles/colors";
import fontFamily from "../../Styles/fontFamily";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../Styles/responsiveSize";

const styles = StyleSheet.create({
  inputStyle: {
    marginRight: moderateScale(8),
    height: moderateScale(42),
    width: moderateScale(42),
    borderBottomWidth: 1,
    textAlign: "center",
  },
  descStyle: {
    fontSize: textScale(18),
    fontFamily: fontFamily.regular,
    marginLeft: moderateScale(16),
    color: colors.grey,
    textAlign: "center",
  },
  bottomText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.regular,
    marginLeft: moderateScale(16),
    color: colors.grey,
    textAlign: "center",
  },
});

export default styles;
