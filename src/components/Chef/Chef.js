import React from "react";
import { useNavigate } from 'react-router-dom';
import OrderServices from "../../services/OrderServices";


function Chef() {
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
            <h1> CHEF </h1>
            <div>
                <OrderServices />
            </div>
        </div>
    )

}

export default Chef;