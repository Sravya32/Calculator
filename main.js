function display(i) {
    document.getElementById("screen").value += i
}
function clean() {
    document.getElementById("screen").value = ""
}
function solve() {
    let x = document.getElementById("screen").value
    let y = eval(x)
    document.getElementById("screen").value = y
}
function remove() {
    let a = document.getElementById("screen").value
    let b = a.slice(0, -1)
    document.getElementById("screen").value = b
}