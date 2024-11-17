//Métodos get / post / patch? put / delete
// fetch("https://jsonplaceholder.typicode.com/posts") //api para contenido random
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//--------------------
//El fetch por defecto hace un get
function sendHTTPRequest(method, url, data){
    return fetch(url,{
        method: method,
        body: JSON.stringify(data), //convierte JS en JSON
        headers:{
            "Content-Type": "application/json",
        },
    }).then((response) =>{
        return response.json();
    });
}

async function fetchPosts(){
    const responseData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts");
    console.log(responseData);
    const listOfPosts = responseData;
}

//falta código - https://github.com/platzi/basico-js