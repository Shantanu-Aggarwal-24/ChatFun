import React, { Component, useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import WrapperContainer from "../../Components/WrapperContainer";
import imagePath from "../../Constants/imagePath";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../Styles/responsiveSize";
import fontFamily from "../../Styles/fontFamily";
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
import colors from "../../Styles/colors";

//Create a Component
const Message = ({ route, navigation }) => {
  const [messages, setMessages] = useState([]);

  const { data } = route.params;

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello Developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderActions = useCallback(() => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: moderateScale(8),
          marginBottom: moderateScaleVertical(8),
        }}
      >
        <Image source={imagePath.icPlus} />
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={styles.flexView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
            >
              <Image source={imagePath.icBack} />
            </TouchableOpacity>
            <View style={styles.nameView}>
              <RoundImage size={40} image={data?.profileImage} />
              <Text style={styles.nameTextStyle}>{data?.name}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <Image source={imagePath.icVideo} />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: moderateScale(12) }}>
              <Image source={imagePath.icCalls} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ImageBackground source={imagePath.icBigLight} style={{ flex: 1 }}>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          textInputStyle={{
            backgroundColor: "red",
            borderRadius: moderateScale(20),
            paddingHorizontal: moderateScale(12),
            marginTop: moderateScaleVertical(6),
            borderWidth: 0.5,
            borderColor: colors.grey,
          }}
          renderInputToolbar={(props) => {
            return (
              <InputToolbar
                containerStyle={{
                  backgroundColor: "#f6f6f6",
                  height: moderateScale(54),
                  marginTop:-70,
                }}
                {...props}
              />
            );
          }}
          renderActions={renderActions}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  flexView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScaleVertical(8),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    paddingTop: moderateScaleVertical(8),
  },
  nameView: {
    flexDirection: "row",
    alingnItems: "center",
    marginLeft: moderateScale(8),
  },
  nameTextStyle: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
    marginLeft: moderateScale(8),
  },
});

export default Message;
