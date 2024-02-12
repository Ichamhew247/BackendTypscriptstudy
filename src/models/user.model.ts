// user.model.ts
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"], // ใช้ regex เพื่อตรวจสอบรูปแบบ email
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false, // Do not return password hash by default
    },
  },
  {
    timestamps: true, // เพิ่มตัวเลือกนี้เพื่อให้ Mongoose จัดการการสร้างและอัปเดต timestamps
    versionKey: false, // Set to false to disable the version key (__v)
    toJSON: {
      // Override the toJSON method to delete the password field // เมื่อ response  ไม่ต้องการให้แสดง password
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

// Method to validate password
userSchema.methods.validatePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

// Pre-save hook to hash password // เมื่อ บันทึกข้อมูล จะทำการ hash password ก่อน save
userSchema.pre("save", async function (next) {
  const user = this; // this refers to the current document
  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    if (error instanceof Error) {
      next(error); // Pass the error as is if it's an instance of Error
    } else {
      // If it's not an Error instance, handle accordingly
      next(new Error("An error occurred while hashing the password"));
    }
  }
});

export const User = mongoose.model("Users", userSchema);
