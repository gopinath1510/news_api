import React from 'react';
import './App.css';
import {Menu} from "./components/menu";
import {Newsgrid} from "./components/newsgrid"
import { useState,useEffect } from 'react';
function App() {
  const [items,setItems] =useState([])
  const [active,setActive] =useState(1)
  const [category,setCategory]=useState("general")
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=cb7cee09a6954010bd9834e669dc09a3`)
    .then(res=> res.json())
    .then(data=>setItems(data.articles))          
  },[category])
  return (
    <div className='App'>
      <h1 className='title'>See letest updates here</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <Newsgrid items={items}/>
    </div>
  );
}

export default App;
