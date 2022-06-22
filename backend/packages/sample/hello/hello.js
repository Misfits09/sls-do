const ejs = require('ejs');
const fs = require('fs');
const templateData = fs.readFileSync(__dirname + '/index.ejs', 'utf8');

function main(args) {
    let template = ejs.compile(templateData);

    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!! ' + process?.env?.TESTVAL
    console.log(greeting)
    return {"body": template({
      value: greeting,
      debug: JSON.stringify(args)
    })}
  }

module.exports.main = main;
  