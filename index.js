import React from 'react';
import ReactDom from 'react-dom';
import './css/main'

ReactDom.render(
    <div className="test">
        <h2>
            这是一次练习，webpack+react
        </h2>
        <p>
            使用了热更新代码插件
        </p>
    </div>,
    document.getElementById('app')
);
