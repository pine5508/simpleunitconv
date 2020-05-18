function calculate() {
    var km = document.getElementById("input").value
    var u = document.getElementById("unit")
    var strUser = u.options[u.selectedIndex].value
    var output = 0

    if (strUser == "meters") { output = km * 1000 }
    else if (strUser == "centimeters") { output = km * 100000 }
    else if (strUser == "miles") { output = km * 0.621371 }
    else if (strUser == "yards") { output = km * 1093.61 }
    else if (strUser == "feet") { output = km * 3280.84 }

    document.getElementById("result").innerHTML = km+" km is "+output+" "+strUser+"."
}