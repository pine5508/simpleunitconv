function calculate() {
    var n = document.getElementById("input").value;
    var u = document.getElementById("unit");
    var strUser = u.options[u.selectedIndex].value;

    console.log(n);
    console.log(strUser);
}