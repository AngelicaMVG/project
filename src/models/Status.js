const {Model} = require('objection');

class Status extends Model{
  static get tableName(){
    return 'status'
  }
  static get relationMappings(){
    const Student = require('./Student.js')

    return{
      student:{
        relation:Model.BelongsToOneRelation,
        modelClass: Student,
        join:{
          from:'status.studentId',
          to:'student.id'
        }
      }
    }
  }
}

module.exports = Status
