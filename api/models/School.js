/**
 * School.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    school : { type: 'string',required:true },

    class : { type: 'string',required:true },

    section : { type: 'string' }
  }
};

