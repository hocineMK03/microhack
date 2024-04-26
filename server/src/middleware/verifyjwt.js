
const jwt=require('jsonwebtoken')

require('dotenv').config();

     const verifyJWT=(req,res,next)=>{
        const authHeader = req.headers['authorization'];
    if (!authHeader) {
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        error.status = 'fail';
        return next(error);
    } else {
        const token = authHeader.split(' ');
        if (!token) {
            const error = new Error('No token provided');
            error.statusCode = 401;
            error.status = 'fail';
            return next(error);
        }
        console.log("token",token[0])
        jwt.verify(token[0], process.env.ACCESS_JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err)
                const error = new Error('Failed to authenticate token');
                error.statusCode = 403;
                error.status = 'fail';
                return next(error);
            } else {
                req.user = decoded;
                console.log("decoded",decoded," ",req.user)
                next();
            }
        });

    }

    }


module.exports=verifyJWT