const connect = require('./index');

const query = (sql)=>{
  return  new Promise((resolve,reject)=>{
        connect.query(sql,(err,data)=>{
            console.log(data);
            if(!err){
                resolve(data);
            } else {
                reject(err);
            }
        });
    })
}

module.exports = query;