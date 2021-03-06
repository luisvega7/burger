//requiring our orm.js
const orm = require("../config/orm.js");

let burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(name, cb){
        orm.create("burgers", ["burger_name", 'devoured'],
        [name, false],
        cb);
        
    },
    update: function(id, cb){
        const condition = "id=" + id;
    orm.update("burgers", {
        devoured: true},
        condition,cb);
    }
};

//exporting burger
module.exports = burger;