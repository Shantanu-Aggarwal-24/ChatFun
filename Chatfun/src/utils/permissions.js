import React from 'react';
import { Alert, PermissionsAndroid, Platform } from "react-native";
// import strings from "../Constants/lang";

export const androidCameraPermission = () =>
  new Promise(async (resolve, reject) => {
    try {
      if (Platform.OS === "android" && Platform.Version > 22) {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);
        console.log(granted, "the granted value");

        if (
          granted["android.permission.CAMERA"] !== "granted" ||
          granted["android.permission.WRITE_EXTERNAL_STORAGE"] !== "granted" ||
          granted["android.permission.READ_EXTERNAL_STORAGE"] !== "granted"
        ) {
          Alert.alert(
            'Alert',            //  strings.ALERT,
             'Permission',                   // strings.CAMERA_PERMISSION_DENIED_MSG,
            [{ text: 'OK' }],
            { cancelable: true }
          );
          return resolve(false);
        }
        return resolve(true);
      }
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
