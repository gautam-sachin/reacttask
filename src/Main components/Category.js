import React, { useEffect, useState } from 'react';

export default function Category() {
    const [data, setData] = useState({
        category:''
    });
    const inputBox = (e) => {
        setData(
            { ...data, [e.target.name]: e.target.value }
        )
    }

    // categoryData function
    useEffect(()=>{
        
    })
    const categoryData = () => {
      
            var newData = data;
            if (localStorage.getItem("category") == null) {
                localStorage.setItem("category", "[]")
            }
            var oldData = JSON.parse(localStorage.getItem("category"));
            oldData.push(newData);
            localStorage.setItem("category", JSON.stringify(oldData));
            alert("category Added");
    }
     
    // jsx code
    return (
        <>
            <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>Add New Category</h3>
            <div className="mb-4 pb-2">
                <div className="form-outline">
                    <input type="text" id="form3Examplev4" name="category" value={data.category} onChange={inputBox} className="form-control form-control-lg" />
                    <label className="form-label" >Category</label>
                </div>
            </div>
            <button type="button" id="btn" className="btn btn-light btn-lg"
                data-mdb-ripple-color="dark" onClick={categoryData}>Add Category</button>
        </>

    )
}
