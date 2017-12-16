// condition operation & looping & array
{

  let age = 8
  //age = prompt("Enter your age ")
  if((age>= 5 && (age<=6)) ){
    document.write("Go go Kindergarten","<br/>")
  }else if(age > 18){
    document.write("Go go College","<br/>")
  }else {
    document.write("Go go Grade ",age - 5,"<br/><br />")
  }
}
{
  document.write("true || false : ",true || false,"<br/>")
  document.write("!true || false : ",!true || false,"<br/>")
  document.write("\"5\" == 5 : ",("5" == 5),"<br/>")
  document.write("\"5\" === 5 : ",("5" === 5),"<br/><br/>")
}
{
  let age = 5
  switch (age) {
    case 5 :
    case 6 : document.write("Go go Kindergarten","<br/><br/>")
     break;
    case 7 : document.write("Go go Grade 1st","<br/>")
     break;

    default:
    document.write("Subtract 5 from your age","<br/>")

  }
}
{
  let age = 18
  let canIVote = age>=18 ? true : false
}
{
  // comment this group before compile
  let i = 1
  while (i<=10) {
    document.write(i,"<br/>")
    i++
  }

  do{
    var guess = prompt("Enter number between 1 - 20")
  }while(guess != 15)
  alert("You're COOL, 15 is correct!!")

  for(let j=0;j<=20;j++){
    if(j%2 ==0){
      continue;
    }
    if(j === 15){
      break;
    }
    document.write(j,"<br/>")
  }
}
{
  let customer ={
    "name": "rachen",
    "address": "123 road unix",
    "balance": "170",
    "boots": {
      "nike": "air",
      "adidas": "energy"
    }
  }
  for(let k in customer){
    document.write(customer[k],"<br/><br/>")

  }

  let pai = ["Rachen Pengsang","123 road unix",170]
  document.write("Array pai : ", pai,"<br/>")
  document.write("1st : ",pai[0],"<br/>")

  pai[3] = "anelhaman@hotmail.com"
  document.write("pai[3] = \"anelhaman@hotmail.com\" : ", pai,"<br/>")

  pai.splice(1,1,"BKK","Thailand") // ลบ index ที่ [1]  เอาออกไป 1 ตัว เอาตัวที่ ,,* มาใส่
  document.write("splice(1,1) : ", pai,"<br/>")

  pai.splice(-2,1) // ลบตัวที่ 2 นับจากข้างหลัง เอาออกไปตัว 1 ตัว
  document.write("splice(3,1) : ", pai,"<br/>")

  document.write("Array : ",pai.valueOf(),"<br/>") // เหมือนกับ ไม่ใส่ valueOf()
  document.write("Array : ",pai.join(": "),"<br/>") // เปลี่ยนตัวคั่นกลาง

  delete pai[2]
  document.write("delete [2] Array : ",pai,"<br/>")

  document.write("sort Array : ",pai.sort(),"<br/>")

  document.write("sort","<br/>")

  let numbers = [6,4,2,14,64,24]
  numbers.sort((x,y) => (x-y)) //arrow function
  document.write("sort numbers : ",numbers.toString(),"<br/>")

  let combindArray = numbers.concat(pai)
  document.write("combindArray : ",combindArray.toString(),"<br/>")

  pai.pop()
  document.write("after pop() : ", pai,"<br/>")

  pai.push("สวัสดีครับ")
  document.write("after push(\"สวัสดีครับ\") : ", pai,"<br/>")

  pai.shift()
  document.write("after shift() : ", pai,"<br/>")

  pai.unshift("BKK")
  document.write("after unshift(\"BKK\") : ", pai,"<br/>")



}
