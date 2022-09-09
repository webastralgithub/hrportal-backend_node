const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const dotenv = require('dotenv');
const admin_router = require('./routes/admin_routes');
const hr_routes = require('./routes/hr_routes');
const auth = require('./routes/auth')
const commonRoutes = require('./routes/commonRoutes')
const employeeRoutes = require('./routes/employee')
const angroutes = require('./routes/angroutes')
// const server = '127.0.0.1:27017'; // REPLACE WITH YOUR OWN SERVER
const database = 'hr_portal'; 
const PORT = process.env.PORT || 4800
var cors = require('cors')
const app = express()
 
dotenv.config()


///// middilewere
app.use(cors())

app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//// DB Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log('MongoDB connected!!');
}).catch(err => {

    console.log('Failed to connect to MongoDB', err);

});

/////routes
app.use('/api/admin',admin_router)
app.use('/api/hr',hr_routes)
app.use('/api/auth',auth)
app.use('/api/user',commonRoutes)
app.use('/api/emp',employeeRoutes)
app.use('/api/ang',angroutes)
//// Server running
app.listen(PORT,()=>{
    console.log(`Server running port ${PORT}`);
})