let yourName = prompt("What is your name")

if(yourName != null){
  document.getElementById("sayHello").innerHTML = "Hello, "+yourName;
}
else {
  alert("Please enter your name next time.")
}
