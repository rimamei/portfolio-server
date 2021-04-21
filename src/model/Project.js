const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  tagId: [
    {
      type: ObjectId,
      ref: "Tag",
    },
  ],
});

module.exports = mongoose.model("Project", projectSchema);
