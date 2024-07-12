const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
   const authHeader = req.headers.token || req.headers.authorization;

   if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SEC, (err, user) => {
         if (err) res.status(403).json("Token is not valid");
         req.user = user;
         next();
      });
   } else {
      res.status(401).json("You are not authenticated");
   }
};

const verifyTokenAndAuthorization = (req, res, next) => {
   verifyToken(req, res, () => {
      if (req.user.role === "admin") {
         next();
      } else {
         res.status(403).json("You are not authorized to access this resource");
      }
   });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
