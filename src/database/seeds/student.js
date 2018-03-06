const dataRows = [
  {
    name:'Angelica',
    lastName:'Velazquez',
    imageLink:"http://www.tinygraphs.com/labs/isogrids/hexa16/1234",
  },
  {
    name:'Ricardo',
    lastName:'Ramirez',
    imageLink:"http://www.tinygraphs.com/labs/isogrids/hexa16/1234",
  },
  {
    name:'Chuchito',
    lastName:'Perez',
    imageLink:"http://www.tinygraphs.com/labs/isogrids/hexa16/1234",
  },
  {
    name:'Anabel',
    lastName:'Lee',
    imageLink:"http://www.tinygraphs.com/labs/isogrids/hexa16/1234",
  },
  {
    name:'Rodrigo',
    lastName:'Rodriguez',
    imageLink:'http://www.tinygraphs.com/labs/isogrids/hexa16/1234',
  }
]




exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert(dataRows);
    });
};
