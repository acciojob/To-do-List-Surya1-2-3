//your code here

const element=document.getElementById('btn')
const input=document.getElementById("text-field")

function submit(){
	const data=input.value
	if(data.length==0){
		alert("todo item is empty")
	}else{
		const ele=document.createElement('li');
		ele.classList.add("todo-item")
		ele.innerHTML=data;
		const parent=document.getElementById("todolist")
		parent.appendChild(ele);
		input.value=""
	}
}
