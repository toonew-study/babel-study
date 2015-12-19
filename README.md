# Babel 学习项目

## Babel 基本知识

Babel5包含整个编译器、所有的转换器以及一个CLI工具

Babel6分成两个单独的包： babel-cli和babel-core。

## 安装基本依赖
>$ npm install --global babel-cli  
or  
$ npm install --save-dev babel-core  
如果你想要在命令行使用Babel，你可以安装babel-cli，
如果你需要在一个Node项目中使用Babel，你可以使用babel-core。

## 创建配置文件
>Create .babelrc configuration file

## 插件和预设值添加
>$npm install --save-dev babel-plugin-transform-es2015-arrow-functions  

## 部分插件安装或者预编译 及命令解释
1.安装 ES2015 （例如arrow函数...）
>$npm install babel-preset-es2015
  //命令行使用方式
 $babel es6.js --presets es2015

babel 可以将ES6文件转换输出到另一个文件：
>babel es6.js -o es5.js
 # 或者
 babel es6.js --out-file es5.js
 
 
## es7(async 异步函数等)需要倒入
ReferenceError: regeneratorRuntime is not defined
>$ npm i babel-polyfill --save
 在其运行错误代码首行加上以下代码来载入babel-polyfill：
>require('babel-polyfill');


## WebStorm中的配置
配置File Watch 就可以了，注意 文件编译条件选择，防止编译所有的文件，他默认的.js文件
请修改成.es6或者之类的文件



参考网站 [走进Babel 6.0 全新特性解析k](http://www.csdn.net/article/2015-11-17/2826233) 