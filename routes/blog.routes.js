//const { json } = require('body-parser');
 module.exports = (app) => {
const blog = require('../controllers/blog.controller.js');
const protection = require('../controllers/authcontroller');
app.post('/api/v1/article/new', blog.create);
 // Retrieve all Blogs
app.get('/api/v1/articles/', blog.findAll);
 // Retrieve one Blogs
 app.get('/api/v1/article/:id', blog.findOne);
  // update one Blogs
app.put('/api/v1/article/:id',protection.protect, blog.update);
// delete one Blogs
app.delete('/api/v1/article/erase/:id',protection.protect, blog.delete);
 }