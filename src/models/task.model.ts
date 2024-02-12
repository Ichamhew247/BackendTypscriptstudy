import mongoose, { Document, Schema, Model } from "mongoose";

const taskSchema = new Schema(
  {
    taskName: {
      type: String,
    },
    taskIcon: {
      type: String,
    },
    detail: {
      type: String,
    },
    start_time: {
      type: String,
    },
    end_time: {
      type: String,
    },
    due_date: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TaskModel = mongoose.model("Tasks", taskSchema);

// // user.model.ts
// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema(
//   {
//     task_name: {
//       type: String,
//     },
//     task_icon: {
//       type: String,
//     },
//     detail: {
//       type: String,
//     },
//     start_time: {
//       type: String,
//     },
//     end_time: {
//       type: String,
//     },
//     due_date: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true, // เพิ่มตัวเลือกนี้เพื่อให้ Mongoose จัดการการสร้างและอัปเดต timestamps
//     versionKey: false, // Set to false to disable the version key (__v)
//     toJSON: {
//       // Override the toJSON method to delete the password field // เมื่อ response  ไม่ต้องการให้แสดง password
//       transform: function (doc, ret) {
//         delete ret.password;
//         return ret;
//       },
//     },
//   }
// );

// export const Task = mongoose.model("Tasks", taskSchema);
