

function displayDate() {
    console.log("The date is displayed")
    document.getElementById('js_test_element').innerHTML = Date()
}

function hideDate() {
    console.log("The date is hidden")
    document.getElementById('js_test_element').innerHTML = ""

}


function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dolphintursiops.jpg/350px-Dolphintursiops.jpg"){
        document.getElementById("imgClickAndChange").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dolphintursiops.jpg/350px-Dolphintursiops.jpg";
    } else {
        document.getElementById("imgClickAndChange").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dolphintursiops.jpg/350px-Dolphintursiops.jpg";
    }
}

var fontSize = 40

function changeHeaderSize() {
    document.getElementById("header").style.fontSize = fontSize + "px"

    size = document.getElementById("header").style.fontSize

    console.log("Font size is " + size)

    for (var i = 40; i <= 100; i++){
        console.log(i)
    }

    while (i < 40) {
        i++
    }

    if (fontSize < 40) {
       document.getElementById("header").style.fontSize = "50px"
    }
    else if ("another example") {
        // some code
    }
    else {
        // some code
    }
}

