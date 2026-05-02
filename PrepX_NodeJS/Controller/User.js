import UserModel from "../Models/UsersModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config() 

async function HandleCreateAcc(req, res) {

    try {
        const { Username, Email, Password } = req.body

        if (!Username || !Email || !Password) {
            return res.status(400).json({
                success: false,
                msg: "Content missing"
            })
        }

        const normalizedEmail = Email.toLowerCase()

        const isExist = await UserModel.findOne({ Email: normalizedEmail })

        if (isExist) {
            return res.status(400).json({
                success: false,
                msg: "User already exists"
            })
        }

        const hashed_password = await bcrypt.hash(Password, 10)

        const newUser = await UserModel.create({
            Username,
            Email: normalizedEmail,
            Password: hashed_password
        })

        const token = jwt.sign(
            { id: newUser._id, email: newUser.Email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        log(`User login attempt: ${normalizedEmail}`)

        return res.status(201).json({
            success: true,
            msg: "User Created",
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }
}

async function HandleLogin(req, res) {

    const { Email, Password } = req.body

    try {

        if (!Email || !Password) {
            return res.status(400).json({
                success: false,
                msg: "Content missing"
            })
        } else if ( Email == process.env.ADMIN_ID && Password == process.env.ADMIN_PASS ){
            
            const token = jwt.sign(
                { Role: 'ADMIN'}, 
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            )
    
            return res.status(200).json({
                success: true,
                msg: "Login successful",
                token
            })
        }

        const user = await UserModel.findOne({ Email: Email })

        console.log(user)

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
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        return res.status(200).json({
            success: true,
            msg: "Login successful",
            token
        })

    } catch (error) {
        console.log(error);
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

// export const HandleGoogleLogin = passport.authenticate("google", {
//     scope: ["profile", "email"],
//   });
  
// export const googleCallback = passport.authenticate("google", {
//     failureRedirect: "/login",
//     session: false,
// });


export { HandleCreateAcc , HandleLogin , HandleDeleteAccount}