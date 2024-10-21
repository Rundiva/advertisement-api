import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host: 'smtp.gmail.com',
    port: 456,
    auth: {
        user: 'perama44@gmail.com',
        pass: ''
    },
    from: 'perpaman44@gmail.com'
});