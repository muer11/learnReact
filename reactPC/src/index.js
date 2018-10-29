// document.getElementById('app').innerHTML='webpack works'; 

// 测试es6编译
// let func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用babel!');

import React from 'react';
import ReactDom from 'react-dom';
import getRouter from './router/router';
// import Hello from './component/Hello/Hello';

if(module.hot){
    module.hot.accept();
}

ReactDom.render(
    getRouter(), document.getElementById('app')
);