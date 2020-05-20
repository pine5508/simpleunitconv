var input
var u
var unit
var output

function submit() {
    input = document.getElementById("input").value
    u = document.getElementById("unit")
    unit = u.options[u.selectedIndex].value
    calculate()
}

function calculate() {
    if (unit = "km") {
        document.getElementById("kmOutput").value = input
        kmTOmi()
        kmTOft()
    } else
    if (unit = "mi") {
        document.getElementById("miOutput").value = input
        miTOkm()
        miTOft()
    } else
    if (unit = "ft") {
        document.getElementById("ftOutput").value = input
        ftTOkm()
        ftTOmi()
    }
    else {
        alert("Invalid unit!")
    }
}

// kilometer conversions
function kmTOmi() {
    output = input * 0.621371
    document.getElementById("miOutput").value = output
}
function kmTOft() {
    output = input * 3280.84
    document.getElementById("ftOutput").value = output
}

// mile conversions
function miTOkm() {
    output = input * 1.6
    document.getElementById("kmOutput").value = output
}
function miTOft() {
    output = input * 5280
    document.getElementById("ftOutput").value = output
}

// feet conversions
function ftTOkm() {
    output = input * 0.0003048
    document.getElementById("kmOutput").value = output
}
function ftTOmi() {
    output = input * 0.000189
    document.getElementById("miOutput").value = output
}