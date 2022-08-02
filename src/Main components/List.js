import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import InputBox from './InputBox';
import './Css/list.css';
import Month from './Month';

export default function List() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("item")));
    const categoryData = JSON.parse(localStorage.getItem('category'));
    const [index, setIndex] = useState(null);
    const month=[
        {label: "Janurary", value: '1' },
        {label: "February", value: '2'},
        {label: "March", value: '3' },
        {label: "April", value: '4' },
        {label: "May", value: '5'},
        {label: "June", value: '6'},
        {label: "July", value: '7'},
        {label: "August", value: '8'},
        {label: "September", value: '9'},
        {label: "October", value: '10'},
        {label: "November", value: '11'},
        {label: "December", value: '12'},
      ];
        
    //remove the particular element 
    const remove = (id) => {
        data.splice(id, 1);
        localStorage.setItem("item", JSON.stringify(data));
        alert("delete")
    }

    //edit particular  element 
    const edit = (id) => {
        setIndex(id)
    }

    // total the cost
     const result = data.reduce((total, currentValue) => total = total + parseFloat(currentValue.cost), 0);

    //category button function
    const displayCategoryData = (elem) => {
         const filterData = data.filter((item) => {
                        return item.category === elem.category;
                    })
                   setData(filterData);
                }
 
                //
                const displayMonthlyData = (elem) => {
                    const filterData = data.filter((i)=>{
                        const newData=i.date.slice(6,7);
                        return  newData===elem.value; 
                     })
                   setData(filterData)
                  }
    //Jsx code
    return (
        <>
            <InputBox index={index} />
            <div className="listdiv">
                <div style={{
                    display: 'block',
                    width: 700, height: '200px'
                }}>
                    <Dropdown className='dropdown'>
                        <Dropdown.Toggle variant="success" style={{ height: '50px' }}>
                            Open Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                categoryData.map((elem, index) => {
                                    return (
                                        <Dropdown.Item key={index} onClick={() => { displayCategoryData(elem) }}>
                                            {elem.category}
                                        </Dropdown.Item>
                                    )
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                  
          <Dropdown className='dropdown'>
                        <Dropdown.Toggle variant="success" style={{ height: '50px' }}>
                            Open Category
                            
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                month.map((elem, index) => {
                                    return (
                                        <Dropdown.Item key={index} onClick={() => { displayMonthlyData(elem) }}>
                                            {elem.label}
                                        </Dropdown.Item>
                                    )
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                 <div id="c" className="container mt-3">
                   <h2>Total Cost: <b> {result} </b></h2>
                    <p> No of element: <b>{data.length}</b></p>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Date</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.cost}</td>
                                            <td>{item.date}</td>
                                            <td onClick={() => edit(index)}><i className="fa fa-edit"></i></td>
                                            <td onClick={() => remove(index)}><i className="fa fa-trash-o"></i></td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
