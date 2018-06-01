'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Tasks', [{
        title: '測試 A',
        createdAt : new Date(),
        updatedAt : new Date(),
        deleted: false,
        deletedAt: null,
        isDone: false
      }, {
        title: '測試 B',
        createdAt : new Date(),
        updatedAt : new Date(),
        deleted: false,
        deletedAt: null,
        isDone: false
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
