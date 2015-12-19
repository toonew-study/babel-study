/**
 * Created by Rain on 2015/12/18.
 */
import "babel-polyfill";
import fs from 'fs';

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) reject(error);
      resolve(data);
    });
  });
};

var asyncReadFile = async function () {
  var f1 = await readFile('../package.json');
  console.log(f1.toString());
  var f2 = await readFile('../package.json');
  console.log(f2.toString());
};

console.log('test');
console.log('test2');

var result = asyncReadFile();
