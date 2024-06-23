const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

const connectToDatabase = require('./config/mongoDb.config');
const classRoutes = require('./routes/classRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        Message: 'School Management App Server',
        Status: 'Active',
        Time: new Date()
    })
})

app.use('/api/classes', classRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);


//Connect to Database 
connectToDatabase();

app.listen(port, (err) => {
    if (!err) console.log(`Server is running on ${port}`);
})