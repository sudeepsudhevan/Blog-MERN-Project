import Comment from "../models/comment.model.js";
import { errorHandler } from "../utils/error.js";

export const createComment = async (req, res, next) => {
    try {
        const { userId, postId, content } = req.body;

        if (content.trim().length === 0) {
            return next(errorHandler(400, 'Comment cannot be empty.'));
        }

        if (userId !== req.user.id) {
            return next(errorHandler(403, 'You are not allowed to create a comment.'));
        }

        const newComment = new Comment({
            userId,
            postId,
            content
        });
        await newComment.save();

        res.status(200).json(newComment);
    } catch (error) {
        next(error);
    }
}