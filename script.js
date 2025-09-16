//your code here

const element=document.getElementById('addTodoBtn')
const input=document.getElementById("newTodoInput")

function submit(){
	const data=input.value
	if(data.length==0){
		alert("todo item is empty")
	}else{
		const ele=document.createElement('li');
		ele.innerHTML=data;
		const parent=document.getElementById("todoList")
		parent.appendChild(ele);
		input.value=""
	}
}
