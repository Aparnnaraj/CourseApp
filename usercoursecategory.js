const mongoose=require('mongoose');
//const url = "mongodb+srv://aparna:B7oTV0GJi8wHh5HE@cluster0.pvrs8gr.mongodb.net/CourseWebApp";
//mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); 

mongoose.connect('mongodb://localhost:27017/courseweb_app')


const Schema=mongoose.Schema;
const catSchema=new Schema({
    // id1: {
    //     type: String,
    // },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    remark: {
        type: String,
    },

})


const usercoursectegorydata = mongoose.model('usercategorydata',catSchema);
module.exports=usercoursectegorydata;

