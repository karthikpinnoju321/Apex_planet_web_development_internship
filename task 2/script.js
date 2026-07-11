// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let message=document.getElementById("message").value.trim();

let error=document.getElementById("error");

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(name==="" || email==="" || message===""){

error.innerHTML="Please fill all fields.";

return;

}

if(!email.match(emailPattern)){

error.innerHTML="Enter a valid email address.";

return;

}

error.style.color="green";

error.innerHTML="Form Submitted Successfully!";

this.reset();

});


// Todo List

function addTask(){

let input=document.getElementById("taskInput");

let task=input.value.trim();

if(task==="") return;

let li=document.createElement("li");

li.innerHTML=`
${task}
<button class="delete" onclick="this.parentElement.remove()">
Delete
</button>
`;

document.getElementById("taskList").appendChild(li);

input.value="";

}
