let xhr = new XMLHttpRequest;
let apiCall = (method, url, callback) =>{
    xhr.onreadystatechange =() =>{
        if(xhr.status === 200 && xhr.readyState === 4){
            const response =  JSON.parse(xhr.responseText)
            if(typeof callback === 'function')
            {callback(response);}
        }
    }
    xhr.open(method, url);
    xhr.send();
    
}
const container = document.getElementById('container')

const getDatabase = () => {
    apiCall('GET' ,'/getemployee',(res)=>{
        res.forEach( element=> {
           const customer_name = document.createElement('h1');
           customer_name.innerHTML = element.customer_name ;
           container.appendChild(customer_name);
           const type = document.createElement('p');
           type.innerHTML = element.pizza_type;
           container.appendChild(type);
                       
        });
        
    })
}

window.addEventListener('load',()=>{
    getDatabase();
})