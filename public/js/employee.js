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
       
if(res.length === 0) {
    const emptyDB = document.createElement('h1');
    emptyDB.innerHTML = "There is no any orders to show";
    container.appendChild(emptyDB);
}

else{
        res.forEach( element=> {
            const orderContainer = document.createElement('div');
            orderContainer.classList.add("order-name");
           const customer_name = document.createElement('h2');
            customer_name.classList.add('customer-name');

           customer_name.innerHTML =element.customer_name ;
           customer_name.style.color = 'rgb(79, 73, 73)';
           orderContainer.appendChild(customer_name);
           

           const type = document.createElement('h4');
           type.innerHTML = 'Pizza type: '+ element.pizza_type;
           orderContainer.appendChild(type);

           const sauce = document.createElement('h4');
           sauce.innerHTML ='Souce: ' + element.sauce;
           orderContainer.appendChild(sauce);

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
           orderContainer.appendChild(toppings);

           const phone = document.createElement('h4');
           phone.innerHTML ='Phone: ' + element.phone;
           orderContainer.appendChild(phone);

           const customer_address = document.createElement('h4');
           customer_address.innerHTML ='Address: '+ element.customer_address;
           orderContainer.appendChild(customer_address);

            const note = document.createElement('h4')
            note.innerHTML ='Note: ' + element.note;
            orderContainer.appendChild(note);
           orderContainer.classList.add("order-container")
           container.appendChild(orderContainer);
                       
        });
    }  
    })
}

window.addEventListener('load',()=>{
    getDatabase();
})