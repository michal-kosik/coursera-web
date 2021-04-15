document.addEventListener("DOMContentLoaded", function (event) {
    function sayHello(event) {
        console.log(this);
        console.log(event);
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
    
        this.textContent = "Kuul!";
    }

    document.getElementById("cudlik").onclick = sayHello;
    // document.querySelector("button").addEventListener("click", sayHello);

    document.querySelector("body").addEventListener("mousemove", function (event) {
        if (event.shiftKey) {
            console.log("x:" + event.clientX);
            console.log("y:" + event.clientY);
        }
    });

});


