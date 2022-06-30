const BASE_URL = 'http://localhost:3500/',
    HEADERS = {"Content-Type": "application/json"/*, "Authorization": 'Bearer' + 'authToken' or "Cookie":'jwt'*/};
//TODO aggiungere il token dal cookie dell'utente una volta risolto il problema del preflight request

const addItemToCart = async() =>{
    /*const productId = document.getElementById("product").value;
    IN THEORY
     */
    const productId = "62aa0ff0aa09bf510820629a"
    const quantity = 1;
    return fetch(BASE_URL+'cart',{
        method:'POST',
        headers:HEADERS,
        body: JSON.stringify(productId,quantity)
    })
        .then(res=>res.json());
}
const exportedObject = {
    addItemToCart
}

export default exportedObject;