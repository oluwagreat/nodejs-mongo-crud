const {Schema, model} = require("mongoose")

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    required :true,
    unique:true
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 500,
  },
  status: {
type:String,
default: 'pending'
  },
},
 {timestamps:true}
);

const taskModel = model("tasks",taskSchema);

module.exports = taskModel;