import React from "react";
import '../base.css'
import ProductList from "../../services/ProductList";
import { useNavigate } from 'react-router-dom';

function User() {
        const navigate = useNavigate();

        return(
            <div>
                <button onClick={()=>navigate(-1)}>Back </button>

                <h1>USER</h1>
                    <div className="wrapper">
                            <ProductList />
                    </div>
            </div>
        )
}

export default User;