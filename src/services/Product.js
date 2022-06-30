const BASE_URL = 'http://localhost:3500/',
    HEADERS = {"Content-Type": "application/json"/*, "Authorization": 'Bearer' + 'authToken' or "Cookie":'jwt'*/};
//TODO aggiungere il token dal cookie dell'utente una volta risolto il problema del preflight request


    const getAll = (next = null) => {
        return fetch(next ? BASE_URL + 'products/' + next : BASE_URL + '/', {
            method:'GET',
            headers:HEADERS
        }).then(res=> res.json())
            .then(data=>data)
    }
    const addProduct = () => {
        const name = "panino";
        const price = 3.50;
        const picture = "aaaa";
        const category = "burgers";
        const calories = 500;
        const description= "buono panino";
        const ingredients= [
            {
                "name": "pane",
                "image": "aaaa"
            },
            {
                "name": "hamburger",
                "image": "aaaa"
            },
            {
                "name": "insalata",
                "image": "aaaa"
            }
        ]
        return fetch(BASE_URL + 'products/',{
            method:'POST',
            headers:HEADERS,
            body : JSON.stringify(name,price,picture,category,calories,description,ingredients),
        }).then(res=>res.json())
            .then(data=>data)
    }
const updateProduct = () => {
    const name = "panino";
    const price = 3.50;
    const picture = "aaaa";
    const category = "burgers";
    const calories = 500;
    const description= "buono panino";
    const ingredients= [
        {
            "name": "pane",
            "image": "aaaa"
        },
        {
            "name": "hamburger",
            "image": "aaaa"
        },
        {
            "name": "insalata",
            "image": "aaaa"
        }
    ]
    return fetch(BASE_URL + 'products/',{
        method:'PUT',
        headers:HEADERS,
        body : JSON.stringify(name,price,picture,category,calories,description,ingredients),
    }).then(res=>res.json())
        .then(data=>data)
}

const removeProduct = ()=>{
        /*const productId = document.getElementById("productId")
        IN THEORY
         */
        const productId = "62aa1d0043229beee4f8dc9b";
        return fetch ( BASE_URL + 'products/',{
            method:'DEL',
            headers:HEADERS,
            body:JSON.stringify(productId)
        })
}

    const exportedObject = {
        getAll,
        addProduct,
        updateProduct,
        removeProduct
    }

    export default exportedObject;
