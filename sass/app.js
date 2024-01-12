const api = 'http://localhost:4200';

fetch(api,{
    method:"GET"
}).then(response => response.json())
.then(data =>{
    
console.log(data);
})    
.catch(error => {
    console.log(error);
})
