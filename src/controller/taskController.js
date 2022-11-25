const Task = require("../model/Task")

//get all tasks
exports.getAllTasks = async(req,res) =>{
    try {
        let allTasks = await Task.find();
        if(allTasks.length === 0)
        return res.status(404).json({
            success: false,
            message: "No task found!"
        })
        res.status(200).json({
            success: true,
            message: "All tasks retrieved",
            taskCount:allTasks.length,
            allTasks,
            
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

//get single task
exports.getTask = async(req,res) => {
    try {
        let id = {_id:req.params.id};
        let task = await Task.findOne(id);
        if(!task)
        return res.status(404).json({
            success: false,
            message:'Task not found'
        });
        res.status(200).json({
            success:true,
            message:'Task found',
            task
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error: error.message
        })
        
    }
}
//create task
exports.createTask = async(req,res) => {
    try {
        let newTask = await req.body;
        let created = await Task.create(newTask);
        if (!created)
          return res.status(400).json({
            success: false,
            message: "Task creation failed",
          });
        return res.status(201).json({
          success: true,
          message: "Task created successfully",
          task: created
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Internal Server Error',
            error: error.message
        });
        
    }
}

//update task
exports.updateTask =  async (req, res) => {
    try {
        let id = { _id: req.params.id };
        let task = await req.body;
        let update = await Task.findOneAndUpdate(id, task, { new: true });
        if (!update)
          return res.status(400).json({
            success: false,
            message: "Task not updated",
          });
        return res.status(200).json({
          success: true,
          message: "Task updated",
          task: update,
        });
    } catch (error) {
       res.status(500).json({
        success:false,
        message:'Internal Server Error',
        error: error.message
       }); 
    }
}

//delete users

exports.deleteTask = async (req,res) => {
    try {
        let id = {_id : req.params.id};
        let deleted = await Task.findOneAndRemove(id);
        if (!deleted)
        return res.status(400).json({
            success: false,
            message: 'Task not deleted'
        });
        return res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}