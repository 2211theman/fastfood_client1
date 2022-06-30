import React from "react";
import AdminServices from "../../services/AdminServices";
import {useNavigate} from "react-router-dom";
function Admin() {
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
        <h1> ADMIN </h1>
            <AdminServices />
        </div>
    )

}

export default Admin;