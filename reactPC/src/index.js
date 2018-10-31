// document.getElementById('app').innerHTML='webpack works'; 

// 测试es6编译
// let func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用babel!');

import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux'; // 让所有容器组件都可以访问store
import store from './redux/store';
import getRouter from './router/router';
// import Hello from './component/Hello/Hello';

// 初始化
renderWithHotReload(getRouter());

// 热更新
if(module.hot){
    module.hot.accept('./router/router', ()=>{
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement){
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
}

