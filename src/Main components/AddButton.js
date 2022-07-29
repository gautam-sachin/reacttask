import React from 'react'
import Category from './Category';
import List from './List';
import Chart2 from './Chart2';
import './Css/Addbtn.css';

export default function Addbutton() {
  return (
    <>
      <div className="maindiv">
        <h2>My Budget Planner</h2>
      </div>
      <List/>
  <Chart2/>
    </>
  )
}
