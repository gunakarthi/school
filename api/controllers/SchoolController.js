/**
 * SchoolController
 *
 * @description :: Server-side logic for managing schools
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `SchoolController.index()`
   */
  index: function (req, res) {
    School.find(function(err,students){
      if(err){
        return res.send(err,500);
      }
      res.view({model:students});
    });
  },


  /**
   * `SchoolController.show()`
   */
  show: function (req, res) {
    var id=req.params['id'];
    School.findOne(id,function(err,students){
      if(err){
        return res.send(err,500);
      }
      if(!students){
        return res.send("student with given id "+id+" was not found");
      }
      res.view({model:students});
    });
  },


  /**
   * `SchoolController.new()`
   */
  new: function (req, res) {
    return res.view();
     
  },


  /**
   * `SchoolController.create()`
   */
  create: function (req, res) {
    var params=_.extend(req.query || {}, req.param || {}, req.body ||{});

    School.create(params,function(err,created_students){
      if(err){
        return res.send(err,500);
      }

      return res.redirect('/students/'+created_students.id);
    });
  },


  /**
   * `SchoolController.edit()`
   */
  edit: function (req, res) {
    var id=req.params['id'];

    School.findOne(id,function(err,students){
      if(err){
        return res.send(err,500);
      }
      if(!students){
        return res.send("student with given id "+id+" was not found");
      }
      return res.view({model:students});
    });
  },


  /**
   * `SchoolController.update()`
   */
  update: function (req, res) {
     var id = req.params['id'];
     var params= _.extend(req.query || {}, req.params || {}, req.body ||{});
     console.log(params);
     School.update(id,params,function(err,students){
      if(err){
        return res.send(err,500);
      }
      return res.redirect('/students/'+id);
     }); 
  },


  /**
   * `SchoolController.destroy()`
   */
  destroy: function (req, res) {
    var id=req.params['id'];
    School.findOne(id,function(err,students){
      
      if(err){
        return res.send(err,500);
      }
      if(!students){
        return res.send("students with given id "+id+" was not found");
      }
      School.destroy(id,function(err){
        if(err){
        return res.send(err,500);
        }
        return res.redirect('/students');
      });
    });
  }
};

