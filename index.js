const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const courseDetails = require('./data/course_details.json');

app.get('/', (req, res)=>{
    res.send(' API Running');
});

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const courseId = courseDetails.find(course => course.course_id === id);
    res.send(courseId);
})

// app.get('/courses/:id', (req, res) =>{
//     const id = req.params.id;
//     const selectedCourse = courseDetails.find(course => course.id === id);
//     res.send(selectedCourse);
    
// })

app.listen(port, ()=>{
    console.log("Server running on port", port);
})