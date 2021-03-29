import React from 'react';
import ReactDOM from 'react-dom';

import {script} from './script';

script();
console.log('Hello World!');

const element = <h1 className="element">подключили реакт</h1>;

ReactDOM.render(
    element,
    document.getElementById('app')
)