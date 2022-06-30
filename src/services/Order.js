const BASE_URL = 'http://localhost:3500/',
    HEADERS = {"Content-Type": "application/json"/*, "Authorization": 'Bearer' + 'authToken' or "Cookie":'jwt'*/};
const getAllOrders = async()=>{
    return fetch(BASE_URL + 'order/kitchen',{
        method:'GET',
        headers:HEADERS,
    })
        .then(res=>res.json())
}
const openOrderFromQueue = async()=>{
       /* const orderId = document.getElementById("orderId");
       IN THEORY
        */
        const orderId = "62ada84f60d0056ac6f241cb";
        return fetch(BASE_URL + 'order/kitchen',{
            method:'POST',
            headers:HEADERS,
            body:JSON.stringify(orderId)
        })
            .then(res=>res.json())
}
const closeOrderFromQueue = async()=>{
    /* const orderId = document.getElementById("orderId");
       IN THEORY
        */
    const orderId = "62ada84f60d0056ac6f241cb";
    return fetch(BASE_URL + 'order/kitchen',{
        method:'POST',
        headers:HEADERS,
        body:JSON.stringify(orderId)
    })
        .then(res=>res.json())
}

const exportedObject = {
    getAllOrders,
    openOrderFromQueue,
    closeOrderFromQueue
}

export default exportedObject;