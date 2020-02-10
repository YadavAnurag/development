import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = <AppRouter />;
ReactDOM.render(<p>something goes here....</p>, document.getElementById('app'));