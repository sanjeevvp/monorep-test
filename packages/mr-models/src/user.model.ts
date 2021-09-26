import { Document, model, Model, Schema } from "mongoose"

interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  userId: string
}

const IUserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true }
})

const User: Model<IUser> = model<IUser>("User", IUserSchema)
export default User
