const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
  
const heading = document.getElementById("heading")
const words = "I'm Priyanshu Kumar"
let j = 0;
let isDeleting = false;

function head() {
  if (isDeleting) {
    heading.textContent = words.substring(0, j - 1);
    j--;
    if (j == 0) {
      isDeleting = false;
    }
  } else {
    heading.textContent = words.substring(0, j + 1);
    j++;
    if (j == words.length) {
      isDeleting = true;
    }
  }
  setTimeout(head, 500);
}
head();


  

let form =  document.querySelector("#contactform");
form.addEventListener("submit",function(e){
  e.preventDefault();
  let name=document.querySelector("#name").value.trim()
  let email=document.querySelector("#email").value.trim();
  let message= document.querySelector("#message").value.trim();
  let nameError=document.querySelector("#nameError");
  let emailError=document.querySelector("#emailError");
  let messageError=document.querySelector("#messageError");

  let isValid=true;
  if(name.length<4){
    nameError.textContent="Name must be atleast four character.";
    isValid=false;
   
  }
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }
  
 if (message.length < 5) {
    messageError.textContent = "Message must be at least 5 characters.";
    isValid = false;
  }
  let formData= [
    name ,
    email,
    message
  ]
  console.log(formData)
  if(isValid){
    submit(formData)
    .then(saved)
    .then(reset)
    .catch((err)=>{
      console.log(err)
    })
  }
  else{
   reset()
  }
  function submit(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
       resolve(alert("Form is successfully submitted"))
      },2000)
    })

  }
  function saved(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        localStorage.setItem('formData',JSON.stringify(formData));
          alert('Form data send  to localStorage!');
          resolve()
      },2000)
    })
  }
  function reset(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        alert("Form should be reset")
        resolve(location.reload())
      },4000)
    })
  }
  
})
 
