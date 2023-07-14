// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { Provider } from "react-redux";

import socketServices from "./src/utils/socketService";
import Routes from "./src/Navigations/Routes";
import store from "./src/redux/store";
import { getItem } from "./src/utils/utils";

const App = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    socketServices.initalizeSocket();
  }, []);

  useEffect(() => {
    socketServices.on("recieved_message", (msg) => {
      console.log("message recieved by contact", msg);
      let cloneArry = [...data];
      setData(cloneArry.concat(msg));
    });
  }, [data]);

  // const newmsg = (txt) =>{
  //   setMessage(txt)
  //   console.log(txt)
  // }

  useEffect(() => {
    (async () => {
      let userData = await getItem("userData");
      console.log("User data in app.js", userData);
    })();
  }, []);

  const sendMessage = () => {
    if (message != "") {
      socketServices.emit("send_message", message);
      return;
    } else {
      alert("Please Enter Your Message");
    }
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Routes />
      </View>
    </Provider>

    // <SafeAreaView style={{ flex: 1 }}>
    //   <View>
    //     {data.map((val, i) => {
    //       return (
    //         <Text style={{ marginBottom: 8, fontWeight: "bold" }}>{val}</Text>
    //       );
    //     })}
    //   </View>
    //   <View style={styles.container}>
    //     <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    //       <View style={{ flex: 0.78 }}>
    //         <TextInput
    //           value={message}
    //           placeholder="Enter Your message.. "
    //           style={styles.inputStyle}
    //           onChangeText={(text) => setMessage(text)}
    //         />
    //       </View>
    //       <View style={{ flex: "0.2", borderRadius: 20 }}>
    //         <Button title="Send" onPress={sendMessage} />
    //       </View>
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // position:'absolute',
    bottom: 10,
  },
  inputStyle: {
    height: 42,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
});

export default App;
