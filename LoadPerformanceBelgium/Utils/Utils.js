
const fs = require('fs');

/**
 * 
 * @param {*} content 
 */
function LogData(content){
    fs.writeFile('Logs//log.log',new Date().toLocaleString() + "----------------" + content + "\n",
     { flag: 'a+' }, err => {});
}

module.exports = {
    LogData
}