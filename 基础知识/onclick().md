
案例一：

<!DOCTYPE html>

<html>

<title>Online Javascript Editor</title>

<head>

</head>

<body>

   <script>

      function fun() {

         document.getElementById("result").innerHTML = "The function fun() is triggered !";

         alert("nice job!");

      }

   </script>

   Calling js function using HTML button <br><br>

   <button onclick = "fun()"> click me !</button>

   <p>

      <div id = "result"> </div>

   </p>

</body>

</html>

javascript 放在head里面或者body里面，总之事先申明

函数调用的另一种方法：

`<a href="javascript:test();">test</a>`



