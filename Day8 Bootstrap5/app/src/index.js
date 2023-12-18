import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button';
import Input from './components/Input';
import InputGroup from './components/InputGroup';
import Dropdown from './components/Dropdown';
import Responsive from './components/Responsive';
import MyNavbar from './components/MyNavbar';
import Alert from './components/Alert';
import Badge from './components/Badge';
import Tab from './components/Tab';
import Table from './components/Table';
import Modal from './components/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Button />
    <Input />
    <InputGroup />
    <Dropdown />
    <Responsive />
    <MyNavbar />
    <Alert />
    <Badge />
    <Tab />
    <Table />
    <Modal />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
