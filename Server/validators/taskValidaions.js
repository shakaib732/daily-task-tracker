const Joi = require('Joi');
const { ObjectId } = require('mongodb');

const taskSchema = Joi.object({
    "title": Joi.string().min(2).max(100).required(),
    "task": Joi.string().min(2).max(400).required(),
    "createdDate": Joi.string().allow(''),
    "completedDate": Joi.string().allow(''),
    "isCompleted": Joi.string()
})


const validateTaskSchema = async (req, res, next) => {
    const result = taskSchema.validate(req.body);
    if (result.error)
        return res.status(400).json({
            message: result.error.message
        });
    next();
}

const validateObjectId = async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).json({ message: 'Invalid id' })
    next();

}

module.exports = { validateTaskSchema, validateObjectId }