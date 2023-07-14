import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { Fragment, useCallback, useState } from "react";
import imagePath from "../Constants/imagePath";
import colors from "../Styles/colors";
import Modal from "react-native-modal";
import HeaderComponent from "../Components/HeaderComponent";
import countries from "./countries";
import { textScale } from "../Styles/responsiveSize";
import fontFamily from "../Styles/fontFamily";

const CountryPicker = ({ fetchCountry = () => {}, value = "" }) => {
  const [data, setData] = useState(countries);
  const [showModal, setShowModal] = useState(false);

  // const renderItem = ({ item, index }) => {
  //   return (
  //     <TouchableOpacity
  //     style={{ marginHorizontal: 16 }}
  //     activeOpacity={0.7}
  //     onPress={()=>onSelectCountry(item)}
  //     >
  //       <Text>
  //         {item?.name}({item?.dialCode})
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };

  const renderItem = useCallback(
    ({ item, index }) => {
      let isSelected = value == item.name;
      return (
        <TouchableOpacity
          style={{ marginHorizontal: 16 }}
          activeOpacity={0.7}
          onPress={() => onSelectCountry(item)}
        >
          <Text
            style={{
              ...styles.nameStyle,
              color: isSelected ? colors.lightBlue : colors.black,
              fontFamily: isSelected ? fontFamily.bold : fontFamily.regular,
            }}
          >
            {item?.name}({item?.dialCode})
          </Text>
        </TouchableOpacity>
      );
    },
    [data, value]
  );

  const onSelectCountry = (item) => {
    fetchCountry(item);
    setShowModal(false);
  };

  return (
    <Fragment>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setShowModal(true)}
        style={styles.container}
      >
        <Text style={styles.valueStyle}>{value}</Text>
        <Image source={imagePath.icForward} />
      </TouchableOpacity>

      <Modal
        style={{ backgroundColor: colors.white, margin: 0 }}
        isVisible={showModal}
      >
        <SafeAreaView>
          <View style={{ flex: 1 }}>
            <HeaderComponent
              centerText="Select Your Country"
              onPressRight={() => setShowModal(false)}
            />
            <View>
              <FlatList
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (
                  <HorizontalLine lineStyle={{ marginVertical: 12 }} />
                )}
                ListHeaderComponent={() => <View style={{ height: 20 }} />}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderBottomColor: colors.grey,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  valueStyle: {
    color: colors.lightBlue,
    fontFamily: fontFamily.bold,
    fontSize: textScale(18),
  },
  nameStyle: {
    color: colors.lightBlue,
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
  },
});

export default CountryPicker;
