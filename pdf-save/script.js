function genPDF(){
    const data = document.getElementById("content");
    // alert("yes");
    html2pdf()
    .from(data)
    .save();
}

/*
<html>
  <button id="mybutton">click me</button>
  <script>
    var greeting = "hello, ";
    var button = document.getElementById("mybutton");
    button.person_name = "Bob";
    button.addEventListener("click", () =>
      alert(greeting + button.person_name + ".")
    , false);
  </script>
</html>
*/