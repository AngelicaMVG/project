datarows = [
  {
    studentId: 1,
    week:1,
    day:1,
    homework: true
  },
  {
    studentId: 1,
    week:1,
    day:2,
    homework: false
  },
  {
    studentId: 1,
    week:1,
    day:3,
    homework: true
  },
  {
    studentId: 1,
    week:1,
    day:4,
    homework: true
  },
  {
    studentId: 1,
    week:1,
    day:5,
    homework: false
  },
  {
    studentId: 1,
    week:2,
    day:1,
    homework: true
  },
  {
    studentId: 1,
    week:2,
    day:2,
    homework: true
  },
  {
    studentId: 1,
    week:2,
    day:3,
    homework: true
  },
  {
    studentId: 2,
    week:1,
    day:1,
    homework: true
  },
  {
    studentId: 2,
    week:1,
    day:2,
    homework: true
  },
  {
    studentId: 3,
    week:1,
    day:1,
    homework: true
  },
  {
    studentId: 4,
    week:1,
    day:1,
    homework: true
  },
  {
    studentId: 5,
    week:1,
    day:1,
    homework: false
  }



]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert(datarows);
    });
};
