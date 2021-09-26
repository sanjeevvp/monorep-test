import { Document, model, Model, Schema } from "mongoose"

interface INote extends Document {
  title?: string
  content: string
  createdBy: Schema.Types.ObjectId
}

const NoteSchema = new Schema({
  title: { type: String },
  content: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" }
})

const Note: Model<INote> = model<INote>("Note", NoteSchema)
export default Note
