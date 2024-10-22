import { UserModel } from "../models/user.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { logInUserValidator, registerUserValidator, updateProfileValidator } from "../validators/user.js";
import { mailTransporter } from "../utils/mail.js";

export const registerUser = async (req, res, next) => {
    try {
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

        const user = await UserModel.findOne({ email: value.email });
        if (user) {
            return res.status(409).json('user already exist!');
        }

        const hashedPassword = bcrypt.hashSync(value.password, 10)

        await UserModel.create({
            ...value,
            password: hashedPassword
        });

        await mailTransporter.sendMail({
            to: value.email,
            subject: 'User Registration',
            text: 'Account registered successfully'
        });


        res.json('Registered user!')
    } catch (error) {
        next(error);
    }
}


export const logInUser = async (req, res, next) => {
    try {
        const { error, value } = logInUserValidator.validate(req.body)
        if (error) {
            return res.status(422).json(error);
        }

        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(404).json('User does not exist!')
        }

        const correctPassword = bcrypt.compareSync(value.password, user.password);
        if (!correctPassword) {
            return res.status(401).json('Invalid credentials!')
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_PRIVATE_KEY,
            { expiresIn: '24h' }
        );

        res.json({
            message: 'User checked in!',
            accessToken: token
        });
        // res.json('User checked in')
    } catch (error) {
        next(error);
    }
}

export const getProfile = async (req, res, next) => {
    try {
        console.log(req.auth);

        const user = await UserModel

            .findById(req.auth.id)
            .select({ password: false });
        res.json(user);
    } catch (error) {
        next(error);
    }
}

export const logOutUser = (req, res, next) => {
    res.json('User checked out')
}

export const updateProfile = (req, res, next) => {
    try {
        const { error, value } = updateProfileValidator.validate(req.body);
        res.json('User  profile updated');
    } catch (error) {
        next(error);
    }
}