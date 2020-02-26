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

           const customer_name = document.createElement('h2');
           customer_name.innerHTML =element.customer_name ;
           container.appendChild(customer_name);
           customer_name.style.color = 'blue';
           

           const type = document.createElement('h4');
           type.innerHTML = 'Pizza type: '+ element.pizza_type;
           container.appendChild(type);

           const sauce = document.createElement('h4');
           sauce.innerHTML ='Souce: ' + element.sauce;
           container.appendChild(sauce);

           const toppings = document.createElement('div')
           toppings.innerHTML = "Toppings: "
           toppings.style.fontSize= '20px';
           toppings.style.fontWeight = 'bold';
           if(element.extra_cheese === true ) { 
               const extra_cheese = document.createElement('h5')
               extra_cheese.innerHTML = "Extra cheese"
               toppings.appendChild(extra_cheese);
           }
            if(element.mushrooms === true){
            const mushrooms = document.createElement('h5');
            mushrooms.innerHTML = "Mushrooms";
            toppings.appendChild(mushrooms);
            }
           if(element.pepperoni === true){
            const pepperoni = document.createElement('h5');
            pepperoni.innerHTML = "Pepperoni";
            toppings.appendChild(pepperoni)
           }
           container.appendChild(toppings);

           const phone = document.createElement('h4');
           phone.innerHTML ='Phone: ' + element.phone;
           container.appendChild(phone);

           const customer_address = document.createElement('h4');
           customer_address.innerHTML ='Address: '+ element.customer_address;
           container.appendChild(customer_address);

            const note = document.createElement('h4')
            note.innerHTML ='Note: ' + element.note;
            container.appendChild(note);

           
                       
        });
        
    })
}

window.addEventListener('load',()=>{
    getDatabase();
})