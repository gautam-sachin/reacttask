import { Chart } from "react-google-charts";
import React, {useEffect,useState} from 'react'

export const data = [
  ["Task", "Hours per Day"],
  ['name', ],
  ["Monday", 2],
  ["Tuesday", 2],
  ["Wednesday", 2],
  ["Thursday", 7],
  ["Friday", 12],
  ["Saturday", 15],
];
export const options = {
  title: "My Daily Activities",
};

const C = () => {
  const [data,setdata]=useState([
    ["Task", "Hours per Day"],
    ["sunday", 111],
    ["Monday", 2],
    ["Tuesday", 2],
    ["Wednesday", 2],
    ["Thursday", 7],
    ["Friday", 12],
    ["Saturday", 15],
  ]);
  useEffect(()=>{
    function fetchdata(){
      var data1 = JSON.parse(localStorage.getItem("item"));
      const name=[];
      const cost=[];
     for( var i of data1){
       name.push(i.name);
       cost.push(i.cost)
     }
    //  setdata([
    //   ["Task", "Hours per Day"],
    //   ["sachin", 111],
    //   ["Monday", 2],
    //   ["Tuesday", 2],
    //   ["Wednesday", 2],
    //   ["Thursday", 7],
    //   ["Friday", 12],
    //   ["Saturday", 15],
    //  ])
      //  setdata([
      //   ["Task", "Hours per Day"],
      //    [data1[0].name, 111]
      //  ])
    }
    fetchdata();
},[])
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  )
}
export default C
