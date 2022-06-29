import React from "react";
const BASE_URL = 'http://localhost:3500/',
    HEADERS = {"Content-Type": "application/json"/*, "Authorization": 'Bearer' + 'authToken'*/};
//TODO aggiungere il token dal cookie dell'utente

export default {
    getAll: (next = null) => {
        return fetch(next ? BASE_URL + '/?products=' + next : BASE_URL + '/', {
            headers:HEADERS
        }).then(res=> res.json())
            .then(data=>data)
    }
}
