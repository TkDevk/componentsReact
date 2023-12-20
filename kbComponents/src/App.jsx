import KbExample from "./features/components/kb";
import React from "react";
import './App.css'
import Accordion from "./features/components/Accordion";
import Editable from "./features/components/Edtitable";

const App = ()=>{
  return (
    <>
    <h1> How to work with reusable components</h1>
    
    <h2> - In this first example, we can see how work with ternary conditional</h2>
    <KbExample/>
    <h1> Let's see a better example </h1>
    <Accordion />
    <Editable />
    </>
  );
}

export default App;