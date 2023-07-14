// const user_module = require("./user.modules");
const models = require("../models");

//SIGNUP API
const signUp = async (req, res) => {
  const { profileImage, name, phoneNumber, about } = req.body;
  if (name != "" && phoneNumber != "" && about != "") {
    try {
      console.log("Requested body", req.body);

      const userDetails = req.body;

      const existingUser = await models.users.findOne({ phoneNumber });

      if (existingUser) {
        return res.status(409).send({ error: "Username is already taken" });
      }
      // const { profileImage } = req.body;

      if (!profileImage) {
        userDetails.profileImage = profileImage;
      }

      const response = await models.users.create(userDetails);
      console.log(response);
      let message = "Success";
      res.status(201).send({
        success: true,
        message: message,
        data: response,
      });
      // return await models.users.create(userDetails);
    } catch (err) {
      console.log(err);
      res.send({
        success: false,
        status_code: err.status.code,
        error: err,
      });
    }
  } else {
    console.log("Please fill all the fields properly");
    res.send({
      success: false,
      message: "please fill all the fields properly",
    });
  }
};

//GET USERS DATA API
const getUsers = async (req, res) => {
  if (models.users.find({})) {
    try {
      const usersData = await models.users.find({});
      const count = await models.users.count();

      res.send({
        success: true,
        count: count,
        message: "users data retrieve successfully!",
        data: usersData,
      });
    } catch (err) {
      console.log(err);
      res.send({
        success: false,
        status_code: err.status.code,
        error: err,
      });
    }
  } else {
    console.log("No data Exist");
    res.send({
      success: false,
      message: "there is no account created yet",
    });
  }
};

//OTP VERIFICATION API
const otpVerify = async (req, res) => {
  const { otp, userId } = req.body;
  if (otp != "" && userId != "") {
    try {
      if (otp == "123456") {
        let user = await models.users.findById(userId);
        if (user) {
          res.send({
            success: true,
            message: "User Authentication Successful",
            data: user,
          });
        } else {
          res.send({
            success: false,
            message: "user not found..authentication denied",
          });
        }
      } else {
        res.status(400).send({
          success: false,
          message: "Wrong OTP..can't authenticate",
        });
      }
    } catch (err) {
      console.log(err);
      res.send({
        success: false,
        // status_code: err.status.code,
        error: err,
      });
    }
  } else {
    console.log("please fill the fields properly");
    res.send({
      success: false,
      message: "Fields are Empty",
    });
  }
};

module.exports = { signUp, getUsers, otpVerify };

// class user_controller extends user_module {
//   static create_user = async (req, res) => {
//     try {
//       console.log("controller response", req.body);
//       let response = await this.save_user_details(req);
//       let message = "Success";
//       res.send({
//         sucess: true,
//         message: message,
//         data: response,
//       });
//     } catch (err) {
//       let status_code = error.status.code != undefined ? err.status_code : 500;
//       let type = err.type != undefined ? err.type : "Bad Request";
//       let message =
//         err.custom_msg != undefined ? err.custom_msg : "something went wrong";
//       res.status(status_code).send({
//         sucess: false,
//         error: type,
//         message: message,
//       });
//     }
//   };

//   static get_users = async (req, res) => {
//     try {
//       console.log("controller response", req.body);
//       let response = await this.retrieve_user(req);
//       let message = "Success";
//       res.send({
//         success: true,
//         message: message,
//         data: response,
//       });
//     } catch (err) {
//       let status_code = err.status.code != undefined ? err.status_code : 500;
//       let type = err.type != undefined ? err.type : "bad request";
//       let message =
//         err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
//       res.status(status_code).send({
//         success: true,
//         error: type,
//         message: message,
//       });
//     }
//   };
// }

// static otp_verify = async(req,res) =>{
//   try{
//   console.log("Controller response", req.body)
//   let response = await this.verify_user(req)
//   if(response.status){
//    res.send({
//     success:true,
//     message:response.message,
//     data:response.user
//    })
//   }else{
//   res.status(400).send({
//     success:false,
//     error:false,
//     message:response.message
//   })
//   }
//   }catch(err){
//   //same as previous function
//   }
// }

// module.exports = user_controller;
