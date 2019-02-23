// O.R.M where we write the functions that takes input and 
//turns them into mySQL commands.

const connection = require ("../config/connection.js");
//printing question marks for boolean
function printQuestionMarks(num){
    const arr = [];

    for (var i =0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

function objToString(obj){
    arr.push(key + '=' + ob[key]);
}
//orm functions
const orm = {
    all: function(tableInput,cb){
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err,result){
            if (err){
                
            }
            cb (result);
        });
    },

//create funnction that inserts the values we are saving into our columns.
create: function (table, cols, vals, cb) {
  let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err,result) {
        if (err){
        throw err;
        }
        cb(result);
    });
},

//update function that will add the new values into columns that the user will create.

update: function(table, objColsVals, condition, cb){
   let queryString =   "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColsVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result){
        if (err){
            throw err;
        }
            cb(result);
    });
}
};

module.exports = orm;















