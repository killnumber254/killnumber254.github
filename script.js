const generateId = () =>
  `gloId ${Math.random(Math.random() + 1e8).toString(16)}`;
const wind = document.querySelector(".window");
const texter = document.getElementById("texter");
const btn = document.getElementById("btn");
const modal = document.getElementById("myModal");
const nikName = document.getElementById("nikname");
const btnOne = document.getElementById("btnOne");

let Document = JSON.parse(localStorage.getItem("calc")) || [];

let Documentos = JSON.parse(localStorage.getItem("calcs")) || [];

const operationText = (obj) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
${obj.text}`;
  wind.prepend(listItem);
};
const optionText = (event) => {
  event.preventDefault();
  console.log(event);
  const optionValue = texter.value;

  if (optionValue) {
    const obj = {
      //id: generateId,
      // name: 'serg',
      text: optionValue,
    };
    Document.push(obj);
    init();
  }
  optionModal();
  texter.value = "";
};
const optionModal = (event) => {
  const nikNameValue = nikName.value;

  if (nikNameValue) {
    const objOne = {
      id: generateId(),
      name: nikNameValue,
    };
    //let response = fetch("/article/fetch/post/objOne", {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json;charset=utf-8",
    //  },
    //  body: JSON.stringify(objOne),
    //});
    //
    //let result = response.json;
    //
    console.log(objOne.id);
    console.log(objOne.name);
    Documentos.push(objOne);
    init();
  }
  modal.style.display = "none";
};
const init = () => {
  wind.textContent = "";
  Document.forEach(operationText);
  localStorage.setItem("calc", JSON.stringify(Document));
  localStorage.setItem("calcs", JSON.stringify(Documentos));
};
const delet = () => {
  localStorage.clear("calc");
};
setInterval(delet, 700);

btn.addEventListener("click", optionText);
btnOne.addEventListener("click", optionModal);
init();
