import UserModel from "../Models/UsersModel"
import bcrypt from "bcrypt"
import ResultModel from "../Models/Result"

async function HandleCreateAcc(req,res){

    try {

        const { Username , Email , Password } = req.body()

        if( !Username || !Email || !Password ){
            return res.status(400).json({
                success: false,
                msg: "Content missing"
            })
        }

        const isExist = await UserModel.find({Email: Email})

        if( isExist ){
            return res.status(400).json({
                success: false,
                msg: "User already exist"
            })
        }

        const hashed_password = await bcrypt.hash(Password , 10);

        await UserModel.create({
            Username: Username,
            Email: Email,
            Password: hashed_password
        })

        return res.status(200).json({
            success: true,
            msg: "User Created"
        })
        
        
    } catch (error) {

        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
        
    }

}

async function HandleLogin(req, res) {
    try {
        const { Email, Password } = req.body

        if (!Email || !Password) {
            return res.status(400).json({
                success: false,
                msg: "Content missing"
            })
        }

        const user = await UserModel.findOne({ Email })

        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(Password, user.Password)

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                msg: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            { id: user._id, email: user.Email },
            JWT_SECRET,
            { expiresIn: "7d" }
        )

        return res.status(200).json({
            success: true,
            msg: "Login successful",
            token
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }
}

async function HandleDeleteAccount(req, res) {
    try {
        const userId = req.user.id // from middleware

        await UserModel.findByIdAndDelete(userId)

        return res.status(200).json({
            success: true,
            msg: "Account deleted"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }
}

async function HandleGetUserResult(req,res){

    const userid = req.user.id;

    try {

        const results = await ResultModel.find({UserID: userid})

        if(!results || results.length === 0){
            return res.status(404).json({
                success: false,
                msg: "Result not found"
            })
        }

        return res.status(200).json({
            success: true,
            msg: "results",
            results
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }

}

// export const HandleGoogleLogin = passport.authenticate("google", {
//     scope: ["profile", "email"],
//   });
  
// export const googleCallback = passport.authenticate("google", {
//     failureRedirect: "/login",
//     session: false,
// });


export { HandleCreateAcc , HandleLogin , HandleDeleteAccount , HandleGetUserResult }