const {Model} = require('objection');

class Student extends Model {

  static get tableName (){
    return 'student'
  }

  static get relationMappings(){
    const Status = require('./Status.js')

    return{
      status:{
        relation:Model.HasManyRelation,
        modelClass: Status,
        join:{
          from:'student.id',
          to:'status.studentId'
        }
      }
    }
  }
}

module.exports = Student
