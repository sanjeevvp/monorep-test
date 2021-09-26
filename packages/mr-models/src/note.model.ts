import { Document, model, Model, Schema } from "mongoose"

export interface INote extends Document {
  title?: string
  content: string
  createdBy: Schema.Types.ObjectId
}

export const NoteSchema = new Schema(
  {
    title: { type: String },
    content: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
)

export const Note: Model<INote> = model<INote>("Note", NoteSchema)
export default Note
