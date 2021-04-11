const quizService = require('../services/quiz-service');

module.exports = (app) => {

    // req, res allows participating in client/server
    // architecture
    const findAllQuizzes = (req, res) => {
        const quizzes = quizService.findAllQuizzes()
        res.send(quizzes)
    }
    const findQuizById = (req, res) => {
        const qid = req.params['quizId']
        const quiz = quizService.findQuizById(qid)
        res.send(quiz)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}