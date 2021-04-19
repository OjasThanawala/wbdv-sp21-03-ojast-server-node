const mongoose = require('mongoose')
const quizSchema = require('./quizzes-schema')
const quizModel = mongoose.model(
    'quizModel',
    quizSchema
)
module.exports = quizModel