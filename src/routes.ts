import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (request, response) => {
    const { type, comment, screenshot } = request.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerAdapter = new NodemailerMailAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerAdapter);

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });

    return response.status(201).send();
});