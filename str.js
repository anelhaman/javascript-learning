{
  let randStr = "สวัสดี "+" วันนี้อากาศดีจังเลย "+" มาเขียนโปรแกรมที่เรารักกันเถอด"

  document.write("ประโยค คือ \"",randStr+ "\"<br />")
  document.write("ความยาวประโยค  ",randStr.length+ "<br />")
  document.write("ตำแหน่งของคำว่า \"โปรแกรม\"  = ",randStr.indexOf("โปรแกรม")+ "<br />")
  document.write("randStr.slice(36,43) ",randStr.slice(36,43),"<br/>")
  document.write("randStr.slice(36) ",randStr.slice(36),"<br/>")
  document.write("randStr.substr(36,7) ",randStr.substr(36,7),"<br/>")
  document.write("randStr.replace(\"รักกันเถอด\",\"รักกันเถอะ\") ",randStr.replace("รักกันเถอด","รักกันเถอะ"),"<br/>")
  document.write("randStr.charAt(4) ",randStr.charAt(4),"<br/>")

  let randStrArray = randStr.split(" ")
  randStr = randStr.trim()

  document.write("randStr.split(\" \") = ",randStrArray,"<br/>")
  document.write("randStr.trim() = ",randStr,"<br/><br/>")

  randStr = "Hello guys, How do you do. What's goin\' on"
  document.write("String is = ",randStr,"<br/>")
  document.write("randStr.toUpperCase() = ",randStr.toUpperCase() ,"<br/>")
  document.write("randStr.toLowerCase() = ",randStr.toLowerCase() ,"<br/><br/>")

}{
  let s = "นกอยู่บนฟ้า ปลาอยู่ในน้ำ แต่ในนามีข้าว"

  document.write("big : ",s.big(),"<br/>")
  document.write("bold :",s.bold(),"<br/>")
  document.write("fontcolot : ",s.fontcolor("#004d40"),"<br/>")
  document.write("fontsize : ",s.fontsize("6em"),"<br/>")
  document.write("italics : ",s.italics(),"<br/>")
  document.write("Google",s.link("www.google.co.th"),"<br/>")
  document.write("small : ",s.small(),"<br/>")
  document.write("strike : ",s.strike(),"<br/>")
  document.write("sub :",s.sub(),"<br/>")
  document.write("SUPER sup :",s.sup(),"<br/>")
}
