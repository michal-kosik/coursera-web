function sayHello() {
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";
//    console.log(message);

    // document.getElementById("content").textContent += message + "\n";
    document.getElementById("content").innerHTML = message + "<br>";
    console.log(document.getElementById("content").value);
    console.log(document.getElementById("content").textContent);
    console.log(document.getElementById("content").innerHTML);

    if (name === "student") {
        var  title = document.querySelector(".aaa").textContent;
        title += " Addendum";
        document.querySelector(".aaa").textContent = title;
        console.log(title);
    }

}