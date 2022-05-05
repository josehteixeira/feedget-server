import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7b8026cecf62ab",
        pass: "961b60f56f20c8"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Feedget team <feedget@feedget.com>',
            to: 'josehteixeira <fake@mail.com>',
            subject: subject,
            html: body,
        });
    };
}