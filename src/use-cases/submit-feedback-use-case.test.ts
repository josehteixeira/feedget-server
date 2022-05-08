import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
    test('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'bug',
            comment: 'sample',
            screenshot: 'data:image/png;base64'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    test('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'sample',
            screenshot: 'data:image/pgn;base64'
        })).rejects.toThrow();
    });

    test('should not be able to submit a feedback without a comment', async () => {
        await expect(submitFeedback.execute({
            type: 'bug',
            comment: '',
            screenshot: 'data:image/pgn;base64'
        })).rejects.toThrow();
    });

    test('should not be able to submit a feedback with an invalid screenshot image format', async () => {
        await expect(submitFeedback.execute({
            type: 'bug',
            comment: 'sample',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    });
})