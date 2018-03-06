const Router = require('express').Router;
const Status = require('../models/Status.js')
const Student = require('../models/Student.js')

const apiRouter = Router()


function statusIndex (req, res){
  Status.query()
  .then((data) => {

    return res.json(data)

  })
  .catch(e => {
    res.send('Error: ', e).status(500)
  })
}

function statusSingle(req,res){
  Status.query()
  .findById(req.params.id)
  .then((data) => {
    return res.json(data).status(200)
  })
  .catch(e => {
    res.send('Error: ', e).status(500)
  })
}

function createStatus (req, res){
  Status.query()
    .insert(req.body)
    .then( newRecord => {
      return res.json(newRecord).status(200)
    })
    .catch( err => res.send(err).status(500))
}

function updateStatus(req,res){
  Status.query()
  .updateAndFetchById(req.params.id, req.body)
  .then(updated => {
    return res.json(updated).status(200)
  })
  .catch(err => {
    res.send(err).status(500)
  })
}

function deleteStatus(req,res){
  Status.query()
  .deleteById(req.params.id)
  .then(data => {
    return res.json({rowsDeleted:data}).status(200)
  })
  .catch(err => {
    res.send(err).status(500)
  })
}


function studentsIndex (req, res){
  Student.query()
  .eager('status')
  .then((data) => {
  console.log(req.params)
    return res.json(data)
  })
}

function createStudent (req, res){
  Student.query()
    .insert(req.body)
    .then( newRecord => {
      return res.json(newRecord).status(200)
    })
    .catch( err => res.send(err).status(500))
}

function singleStudent(req,res){
  Student.query()
  .findById(req.params.id)
  .eager('status')
  .then((data) => {
    return res.json(data).status(200)
  })
  .catch(e => {
    res.send('Error: ', e).status(500)
  })
}

function updateStudent(req,res){
  Student.query()
  .updateAndFetchById(req.params.id, req.body)
  .then(updated => {
    return res.json(updated).status(200)
  })
  .catch(err => {
    res.send(err).status(500)
  })
}

function studentsDelete(req,res){
  Student.query()
  .where('id', req.params.id)
  .first()
  .returning('*')
  .then((recordToDelete) => {
    return recordToDelete
    .$relatedQuery('status')
    .delete()
    .where('studentId', recordToDelete.id)
    .returning('*')
    .then((data) => {
      console.log("deleting records:", data)
      return recordToDelete
    })
    .catch(err => {
      // console.log(err)
      return res.send(err).status(500)
    })
  })
  .then(d => {
    return Student
    .query()
    .deleteById(d.id)
    .then(() => {
      return d
    })
  })
  .then(d => res.json(d).status(200))
  .catch(err => {
    return res.send(err).status(500)
  })

}

apiRouter
  .get('/status', statusIndex )
  .get('/status/:id',statusSingle)
  .post('/status',createStatus)
  .put('/status/:id',updateStatus)
  .delete('/status/:id',deleteStatus)

  apiRouter
  .get('/students', studentsIndex)
  .get('/students/:id', singleStudent)
  .post('/students',createStudent)
  .put('/students/:id', updateStudent)
  .delete('/students/:id',studentsDelete)

module.exports = apiRouter
