import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {
  // 呼叫 Service
  var _connection:any = null;
  // 判斷傳入參數，是家長或學生，依身分呼叫不同 Contract。
  if (window.gadget._system_position === "parent") {
    _connection = window.gadget.getContract("ischool.exam.parent");
  } else {
    _connection = window.gadget.getContract("ischool.exam.student");
  }
  // 讀取學生資訊
  async function GetStudentInfo() {
    await _connection.send({
      service: "_.GetStudentInfo",
      body: {},
      result: function (response: any, error: any, http: any) {
        if (error !== null) {
          console.log('ranks error std ', error);
          return 'err';
        } else {
          if (response) {

            console.log('ranks std ', response);



          }
        }
      }
    });
  }
  //測試取用學生資訊
  useEffect(()=>{
    GetStudentInfo();//TODO: replace this with services you needed
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
