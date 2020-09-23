var a = document.getElementById("hd-nav-icon");

var arr = document.getElementsByClassName("hidden-nav-column")[0];

a.addEventListener("click", function(){

    if (arr.style.visibility == "visible"){

        arr.style.visibility = "hidden";
        console.log(arr.style.visibility);

    }else{

        arr.style.visibility = "visible";
        console.log(arr.style.visibility);
        
    }
})
