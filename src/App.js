import "./App.css";
import React, { useState, useEffect } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "현근",
    content: "하위용",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "황현근",
    content: "하위",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "박지용",
    content: "안녕",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "김민규",
    content: "안녕",
    emotion: 4,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
