import jwt from "jsonwebtoken";

//middleware function to find user Id from jwt token
const userAuth = (req,res,next) =>{
    const {token} = req.headers;

    //if token not found
    if(!token){
        return res.json({success : false, message : 'Not Authorized..Login again'});
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        //if we have an id related to the token then attach it to the req body
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({success : false, message : 'Not Authorized...Login Again'});
        }

        //after this we will execute the controller method 
        next();

    } catch (error) {
        res.json({success : false, message : error.message});
    }
};

export default userAuth;