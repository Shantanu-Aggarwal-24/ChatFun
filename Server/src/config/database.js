const mongoose = require('mongoose');

main().then(res=>console.log("Db connected Successfully"))
main().catch(err => console.log(err));

async function main() {
  //  await mongoose.connect('mongodb://127.0.0.1:27017/Chat_Fun');

  await mongoose.connect('<database URL>') //if your database has auth enabled
}