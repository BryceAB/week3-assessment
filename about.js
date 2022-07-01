console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Submitted Successfully");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let pic = document.querySelector("img");
pic.addEventListener("mouseover", () => alert("UwU u soo pritty"));
