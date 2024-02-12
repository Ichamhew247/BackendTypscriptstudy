// // databaseClient.ts
// import colors from "colors";
// import mongoose from "mongoose";
// import { logsMongodbUtil } from "../middlewares/logStartupInfo.middleware";

// const url = process.env.MONGO_URL; // Your MongoDB connection string
// const dbName = process.env.MONGO_DB_NAME; // Use the environment variable or the default

// if (!url) {
//   throw new Error("MONGO_URL environment variable is not set");
// }
// if (!dbName) {
//   throw new Error("MONGO_DB_NAME environment variable is not set");
// }

// mongoose.connection.on("connected", () => {
//   // console.log(colors.green("MongoDB is connected"));
//   getMongoDBServerVersion().then((version) => {
//     logsMongodbUtil({
//       client: mongoose,
//       version,
//     }); // logs
//   });
// });

// mongoose.connection.on("error", (err) => {
//   console.error(colors.red("MongoDB connection error:"), err);
// });

// export async function getMongoDBServerVersion() {
//   // This function now assumes the connection is already established.
//   const admin = mongoose.connection.db.admin();
//   try {
//     const info = await admin.serverStatus();
//     return info.version;
//   } catch (error) {
//     console.error(colors.red("Failed to get MongoDB server version"), error);
//     return null;
//   }
// }

// export async function connect() {
//   // The connection logic is now contained within the try block.
//   try {
//     await mongoose.connect(url ?? "", { dbName });
//   } catch (error) {
//     console.error(colors.red("Failed to connect to MongoDB"), error);
//   }
// }

// export async function ping() {
//   // The ping logic assumes the connection is already established.
//   try {
//     await mongoose.connection.db.command({ ping: 1 });
//     // console.log(colors.green("MongoDB ping successful"));
//     return true;
//   } catch (error) {
//     console.error(colors.red("MongoDB ping failed"), error);
//     return false;
//   }
// }

// // Disconnect function (optional, can be used for graceful shutdown)
// export async function disconnect() {
//   try {
//     await mongoose.disconnect();
//     console.log(colors.green("Disconnected from MongoDB"));
//   } catch (error) {
//     console.error(colors.red("Failed to disconnect from MongoDB"), error);
//   }
// }

// // Initialize and connect the client right away
// connect();

// export default {
//   connect,
//   ping,
//   disconnect, // if you want to export this as well
// };
