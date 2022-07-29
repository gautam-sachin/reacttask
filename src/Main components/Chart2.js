import React,{useState,useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import  { } from 'chart.js/auto';

export default function Chart2() {
    const newdata=JSON.parse(localStorage.getItem('item'));
  const [data,setdata] = useState(
    {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor:[
                'red',
                'green',
                'blue',
                'Yellow'
            ]
        }],
        labels: [
            'Red',
            'green',
            'Blue',
            'Yellow'
        ]
    }
 );
  useEffect(()=>{
    const fetchdata=()=>{
     const label=[];
     const data=[];
    for(let i=0; i<newdata.length;i++){
        label.push(newdata[i].name)
        data.push(newdata[i].cost)
    }
   setdata(
    {
        datasets: [{
            data: data,
            backgroundColor:[
                'red',
                'green',
                'blue',
                'Yellow'
            ]
        }],
        labels:label
    }
   )
    }
    fetchdata();
  },[])
  return (
  <>
  <div style={{width:'30%',height:'30%'}}>
  <Pie data={data}/>
  </div>
 
  </>
  )
}