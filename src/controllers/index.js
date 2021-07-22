exports.get = (req, res, next)=>{
  var path = require('path');
  res.status(200).sendFile(path.resolve("./public/main/main.html"));
};
