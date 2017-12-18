// functions selector and DOM
{
  inArray = (arrayToCheck, value) => {
    for( i = 0; i < arrayToCheck.length; i++){
      if(arrayToCheck[i] === value){
        return true;
      }

    }
    return false;
  }

  let randArray = [1,3,5,7,6,4,2]
  document.write("In Array : ",inArray(randArray,0),"</br>")
}
{
  let double = function(num){
    return num * 2
  }
  let times2 =  num => {
    let v2 = 2
    return num * v2
  }
  let triple = function(num){
    return num * 3
  }
  let times3 =  num => num * 3

  function multiply(func,num){
    return func(num)
  }
  let mul = (x,y)=> x(y)
  let getsum = function(){
    let sum=0
    for(i=0;i<arguments.length;i++){

        sum+=arguments[i]
    }
    return sum
  }
  multipleArr = (x,y) =>{
    _len = x.length -1
      while(_len>=0){
        x[_len] = x[_len]*y
        _len--
      }
      return x
  } // คูณ ทุกค่าใน array
  factorial = x => x>0? x*factorial(x-1):1

  // document.write(v2) // can not find variable
  document.write(times2(6),"<br/>",times3(6),"<br/>",multiply(times2,2),"<br/>")
  document.write(double(6),"<br/>",triple(6),"<br/>",mul(triple,2),"<br/>")
  document.write(getsum(1,2,3,4,5,6),"<br/>")
  document.write([1,2,3,4,5,6].reduce((x,y)=>x+y),"<br/>") //sum from reduce with arrow
  document.write([2,6,4,3,2],"<br/>")
  document.write(multipleArr([2,6,4,3,2],3),"<br/>")
  document.write("factorial of 10 : ", factorial(10),"<br/>")

}
{
  openAlert = x => alert(x)
}
{
  getChar = e => e.which==null? String.fromCharCode(e.keyCode) : e.which!=0&&e.charCode!=0? String.fromCharCode(e.which) : null
  // อธิบาย ฟังก์ชั่น getchar
  // function getChar(event){
  //   if(event.which == null){
  //     return String.fromCharCode(event.keyCode)
  //   }else if(event.which != 0 && event.charCode != 0){
  //     return String.fromCharCode(event.which)
  //   }else {
  //     return null
  //   }
  // }

  // รอให้ หน้า page ready ก่อนเรียก object
  document.onreadystatechange = function() {
    if (document.readyState == "complete") {
      document.getElementById('charInput').onkeypress =
      function(event){
        var char = getChar(event || window.event)
        if(!char) {
          return false }

        document.getElementById("keyData").innerHTML = char + " was clicked";
        return true
      }

      document.getElementById('charInput').onselect = event =>
      document.getElementById('keyData').innerHTML = "Text Selected"

      document.getElementById('logoButton').onclick = event =>
      document.getElementById('logo').className = "show"

      document.getElementById('logo').onclick = event =>
      document.getElementById('logo').className = "hidden"

      document.getElementById('logo').onmouseover = event => {
        document.getElementById('logo').src = "./public/logo-2.png"
        document.getElementById('mouseInput').value = "Mouse Over Image"
      }

      document.getElementById('logo').onmouseout = event => {
        document.getElementById('logo').src = "./public/logo.png"
        document.getElementById('mouseInput').value = "Mouse Left Image"
      }

      document.body.onmousemove = e => {
        e = e || window.event

        pageX = e.pageX
        pageY = e.pageY

        if(pageX === undefined){
          pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
          pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
        }
        document.getElementById('mouseX').value = pageX
        document.getElementById('mouseY').value = pageY
      }

      document.getElementById('clearInputs').onclick = event =>{
        var inputElements = document.getElementsByTagName('input')
        var _len = inputElements.length
        // console.log(inputElements[2])

        for(i = 0; i < _len;i++){
          if(inputElements[i].type == "text"){
            inputElements[i].value = "";
          }
        }

      }

    } //document ready
  }


}
