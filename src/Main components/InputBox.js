import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Category from './Category';
import './Css/Inputbox.css';

export default function InputBox(props) {
    const indexId = props.index;
    const [data, setData] = useState({
        name: '',
        cost: '',
        date: '',
        category: ''
    });

// inputBox
    const inputBox = (e) => {
        setData(
            { ...data, [e.target.name]: e.target.value }
        )
    }

   // addData function
    const addData = () => {
            var newData = data;
            if (localStorage.getItem("item") == null) {
                localStorage.setItem("item", "[]")
            }
            var oldData = JSON.parse(localStorage.getItem("item"));
            oldData.push(newData);
            localStorage.setItem("item", JSON.stringify(oldData));
            alert("success")
    }

  // useEffect
    useEffect(() => {
        if (indexId !== null) {
            const editValue = JSON.parse(localStorage.getItem("item")).at(indexId);
            setData(editValue)
        }
        else {
            setData('')
        }
    }, [indexId])

    // update data
    const update = () => {
        const update = JSON.parse(localStorage.getItem("item"));
        update[indexId] = data;
        localStorage.setItem('item', JSON.stringify(update))
        alert("update")
    }

    //jsx code
    return (
        <>
            <section className="h-100 h-custom gradient-custom-2">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2">
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <Category/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 bg-indigo text-white">
                                            <div className="p-5">
                                               
                                               
                                                <div className="mb-4 pb-2">
                                                    <div className="form-outline form-white">
                                                        <input type="text" id="form3Examplea3" name="Category"value={data.Category} onChange={inputBox} className="form-control form-control-lg" />
                                                        <label className="form-label" >Category</label>
                                                    </div>
                                                </div>
                                                <div className="mb-4 pb-2">
                                                    <div className="form-outline form-white">
                                                        <input type="text" id="form3Examplea3" name="name"value={data.name} onChange={inputBox} className="form-control form-control-lg" />
                                                        <label className="form-label" >Name</label>
                                                    </div>
                                                </div>
                                                <div className="mb-4 pb-2">
                                                    <div className="form-outline form-white">
                                                        <input type="text" id="form3Examplea6" name="cost"value={data.cost} onChange={inputBox} className="form-control form-control-lg" />
                                                        <label className="form-label" >Cost</label>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="form-outline form-white">
                                                        <input type="date" id="form3Examplea9" name="date"value={data.date} onChange={inputBox} className="form-control form-control-lg" />
                                                        <label className="form-label" >Date</label>
                                                    </div>
                                                </div>
                                                {
                                                    indexId == null ?
                                                        <button type="button" id="btn1" className="btn btn-light btn-lg"
                                                            data-mdb-ripple-color="dark"  onClick={addData}>Add data</button> :
                                                        <button type="button" id="btn1" className="btn btn-light btn-lg"
                                                            data-mdb-ripple-color="dark" onClick={update}>Update data</button>
                                                }
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
