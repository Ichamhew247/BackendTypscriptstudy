// userRoute.ts
import Router from "koa-router";
import * as userController from "../controllers/task.controller";
import { User } from "../models/user.model";
// import { validatePagination } from "../middlewares/validate.middleware";
// import { jwtAuthenticate } from "../middlewares/jwt.middleware";
// import { ChangePasswordBody } from "../interface/types/user.interface";

// register/user
const userRoute = new Router({
  prefix: "/users", // กำหนด prefix ที่นี่
});

// สร้าง User ใหม่
// userRoute.post("/", async (ctx) => {
//   try {
//     const newUser = await userController.createUser(
//       ctx.request.body as typeof User
//     );
//     // ทำให้ผู้ใช้ login เข้าสู่ระบบทันทีหลังจากลงทะเบียน
//     await ctx.login(newUser);
//     ctx.status = 201;
//     ctx.body = newUser;
//   } catch (error) {
//     ctx.status = 500;
//     ctx.body = { message: (error as Error).message };
//   }
// });

// รับข้อมูล User Pagination
// userRoute.get("/", jwtAuthenticate, validatePagination, async (ctx) => {
//   // ใช้ค่าที่ถูก validate แล้วจาก ctx.state.pagination
//   const { page, limit } = ctx.state.pagination;

//   try {
//     const usersWithCount = await userController.getAllUser(page, limit);
//     ctx.body = {
//       data: usersWithCount.docs,
//       total: usersWithCount.total,
//       totalPages: Math.ceil(usersWithCount.total / limit),
//       currentPage: page,
//     };
//   } catch (error) {
//     ctx.status = 500;
//     ctx.body = { message: (error as Error).message };
//   }
// });

// รับข้อมูล User โดยใช้ ID
// userRoute.get("/:id", jwtAuthenticate, async (ctx) => {
//   try {
//     const user = await userController.getUser(ctx.params.id);
//     if (user) {
//       ctx.body = user;
//     } else {
//       ctx.status = 404;
//       ctx.body = { message: "User not found" };
//     }
//   } catch (error) {
//     ctx.status = 500;
//     ctx.body = { message: (error as Error).message };
//   }
// });

// อัปเดต User
// userRoute.put("/:id", jwtAuthenticate, async (ctx) => {
//   try {
//     const updatedUser = await userController.updateUser(
//       ctx.params.id,
//       ctx.request.body as typeof User
//     );
//     if (updatedUser) {
//       ctx.body = updatedUser;
//     } else {
//       ctx.status = 404;
//       ctx.body = { message: "User not found" };
//     }
//   } catch (error) {
//     ctx.status = 500;
//     ctx.body = { message: (error as Error).message };
//   }
// });

// ลบ User
// userRoute.delete("/:id", jwtAuthenticate, async (ctx) => {
//   try {
//     await userController.deleteUser(ctx.params.id);
//     ctx.status = 200;
//     ctx.body = { message: "User deleted" };
//   } catch (error) {
//     ctx.status = 500;
//     ctx.body = { message: (error as Error).message };
//   }
// });

// เส้นทางสำหรับการเปลี่ยนรหัสผ่าน
// userRoute.post("/:id/change-password", jwtAuthenticate, async (ctx) => {
//   try {
//     const userId = ctx.params.id;
//     const { oldPassword, newPassword } = ctx.request.body as ChangePasswordBody;

//     // ตรวจสอบว่ามี oldPassword และ newPassword ให้หรือไม่
//     if (!oldPassword || !newPassword) {
//       ctx.status = 400;
//       ctx.body = { message: "Old password and new password are required" };
//       return;
//     }

//     // เรียกใช้ฟังก์ชันเปลี่ยนรหัสผ่าน
//     await userController.changeUserPassword(userId, oldPassword, newPassword);

//     ctx.status = 200;
//     ctx.body = { message: "Password updated successfully" };
//   } catch (error) {
//     ctx.status = 500;
//     ctx.body = { message: (error as Error).message };
//   }
// });

// Export the userRoute
export default userRoute;
