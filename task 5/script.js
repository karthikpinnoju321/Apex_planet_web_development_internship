let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent(){

const name=document.getElementById("name").value.trim();

const course=document.getElementById("course").value.trim();

const marks=document.getElementById("marks").value.trim();

if(name=="" || course=="" || marks==""){
alert("Please fill all fields");
return;
}

students.push({
name,
course,
marks
});

localStorage.setItem("students",JSON.stringify(students));

document.getElementById("name").value="";
document.getElementById("course").value="";
document.getElementById("marks").value="";

displayStudents();

}

function displayStudents(){

const table=document.getElementById("studentTable");

table.innerHTML="";

students.forEach((student,index)=>{

table.innerHTML+=`

<tr>

<td>${student.name}</td>

<td>${student.course}</td>

<td>${student.marks}</td>

<td>

<button class="delete"

onclick="deleteStudent(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function deleteStudent(index){

students.splice(index,1);

localStorage.setItem("students",JSON.stringify(students));

displayStudents();

}

document.getElementById("search")

.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const rows=document.querySelectorAll("#studentTable tr");

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase()

.includes(value)

? ""

: "none";

});

});

document.getElementById("themeBtn")

.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
