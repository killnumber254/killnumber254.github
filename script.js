const generateId = () =>
  `gloId ${Math.random(1e8).toString(16)}`
const wind = document.querySelector('.window');
const texter = document.getElementById('texter');
const btn = document.getElementById('btn');
const modal = document.getElementById("myModal");
const nikName = document.getElementById("nikname")
const btnOne = document.getElementById("btnOne")




let Document = JSON.parse(localStorage.getItem("calc")) || [];

let Documentos = JSON.parse(localStorage.getItem("calcs")) || [];

const operationText = (obj) => {
  
const listItem = document.createElement('li')
listItem.innerHTML = `
${obj.text}`
wind.prepend(listItem);
}

const optionText = (event) =>{
  console.log(event)
  const optionValue = texter.value;
  if(optionValue) {
    const obj = {
      text: optionValue,
    }
   
    Document.push(obj);
    optionModal();
    init();
  }
  texter.value = '';
}

const optionModal = (event) => {
 let nikNameValue = nikName.value;

if(nikNameValue) {
     const objOne = {
      name: nikNameValue,
    }
    console.log( objOne.name);
    Documentos.push(objOne);
    init();
        const url = "form.php"
    try{
      const response =   fetch(url, {
        method: "POST",
        body: JSON.stringify(objOne),
        headers:{ "Content-type": "application/json",
        }
      });
      const nik = JSON.stringify(objOne);
      console.log("Успех", nik);
      
    }
    catch(error){
      console.log("Ошибка", error)
    }
  }
 modal.style.display = "none";
}

const init = () =>{
  wind.textContent = '';
  Document.forEach(operationText);
  localStorage.setItem("calc", JSON.stringify(Document));
    localStorage.setItem("calcs",JSON.stringify(Documentos));
}

const delet = () => {
  localStorage.clear("calc");
  localStorage.clear("calcs");
}

init();



setInterval(delet, 700);

btn.addEventListener(("click"), optionText);      

btnOne.addEventListener(('click'), 
optionModal);
