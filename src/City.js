import React from "react";

const City = () => {
    let cities=['surat','goa','banglore','jaipur']
    return (
        <>
            {
                cities.map((val,key)=>{
                    return(
                        <div key={key}>
                            <h1>{val}</h1>
                        </div>
                        
                    );
                })
            }
        </>
    );
}
export default City