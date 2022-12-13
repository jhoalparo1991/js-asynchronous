const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API_URL = 'https://api.escuelajs.co/api/v1';

xrh = new XMLHttpRequest();

const fetchData = function(apiUrl,cb){

    xhr.open('GET',apiUrl,true);

    xhr.onreadystatechange = function(event){

        if(xhr.readyState === 4){
            if(xhr.status === 200){
                cb(null,JSON.parse(xhr.responseText))
            }else{
                const error = new Error(`Error en ${API_URL}`)
                cb(error,null)
            }
        }

    }

}

fetchData(`${API_URL}/products`,(error1,data1)=>{
    if(error1) return console.error(error1)
    console.log(data1);
})