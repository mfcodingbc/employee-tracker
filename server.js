// allows for local machine server creation
const express = require('express');

// import the connection module
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const application = require('./app');

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// start the Express.js server on port 3001 after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`
Server running on port ${PORT}.
        

    ===================================
            Employee Tracker
        Developed by: Mitchell Frey
    ===================================
        `);
        application.promptApp();
    });
});