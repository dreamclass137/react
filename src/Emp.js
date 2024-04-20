import React, { useState } from "react";

const Emp = () => {

    const createData = () => {
        let arr = ["abhi", "umesh", "ravi"]
        return arr;
    }

    const [employees, setEmployee] = useState(createData())

    function addEmployee(event){
        //  let val=event.target.value;
        //  let newArray=[...employees,val];
        //  setEmployee(newArray);
        setEmployee([...employees,event.target.value] );
    }

    const removeEmployee=(event)=>{
        let removeThis=event.target.value;
        let newArr=employees.filter(function(val){
            if(removeThis===val){
                return false;
            }
            else{
                return true;
            }
        })
        setEmployee(newArr)
    }
    return (
        <>
            <div className="card">
                <button value="Ajay" onClick={addEmployee}>Ajay</button>
                <button value="Vijay" onClick={addEmployee}>Vijay</button>
                <button value="Karan" onClick={addEmployee}>Karan</button>
                <button value="Aman" onClick={addEmployee}>Aman</button>
            </div>
            {
                employees.map(function (val, index) {
                    return (
                        <div className="card flexs">
                            <span>{val}</span>
                            <button onClick={removeEmployee} value={val}>X</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Emp