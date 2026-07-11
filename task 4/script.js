// ---------------- Products ----------------

let products=[

{name:"HP Laptop",category:"Laptop",price:65000},

{name:"Dell Laptop",category:"Laptop",price:75000},

{name:"iPhone 15",category:"Phone",price:80000},

{name:"Samsung S25",category:"Phone",price:70000}

];

const productList=document.getElementById("productList");

function displayProducts(data){

productList.innerHTML="";

data.forEach(product=>{

productList.innerHTML+=`

<div class="card">

<h3>${product.name}</h3>

<p>Category : ${product.category}</p>

<p>Price : ₹${product.price}</p>

</div>

`;

});

}

displayProducts(products);

document.getElementById("filter").addEventListener("change",update);

document.getElementById("sort").addEventListener("change",update);

function update(){

let filtered=[...products];

let category=document.getElementById("filter").value;

let sort=document.getElementById("sort").value;

if(category!="all"){

filtered=filtered.filter(p=>p.category===category);

}

if(sort=="low"){

filtered.sort((a,b)=>a.price-b.price);

}

if(sort=="high"){

filtered.sort((a,b)=>b.price-a.price);

}

displayProducts(filtered);

}

// ---------------- Todo ----------------

let todos=JSON.parse(localStorage.getItem("tasks"))||[];

render();

function addTask(){

const task=document.getElementById("task").value.trim();

if(task==="") return;

todos.push(task);

localStorage.setItem("tasks",JSON.stringify(todos));

document.getElementById("task").value="";

render();

}

function render(){

const list=document.getElementById("list");

list.innerHTML="";

todos.forEach((task,index)=>{

list.innerHTML+=`

<li>

${task}

<button onclick="deleteTask(${index})">Delete</button>

</li>

`;

});

}

function deleteTask(index){

todos.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(todos));

render();

}
