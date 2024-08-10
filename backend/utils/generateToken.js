import jwt from "jsonwebtoken";
const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"50d",
    });
    res.cookie("jwt",token,{
        maxAge:50*24*60*60*1000,//millisecond key validity
        httpOnly:true,//cannot access by javascript only by http
        sameSite:"strict",//prevent forgery
        secure:process.env.NODE_ENV!=="development "
    });
};
export default generateTokenAndSetCookie;