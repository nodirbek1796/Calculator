let number1
let number2
let operation
let result

function calculate() {
    number1 = parseFloat(document.getElementById("number1").value)
    number2 = parseFloat(document.getElementById("number2").value)
    operation = document.getElementById("amal").value

    if (number1 !== "" && number2 !== ""){
        switch (operation){
            case "+":
                result = number1 + number2
                break
            case "-":
                result = number1 - number2
                break
            case "*":
                result = number1 * number2
                break
            default:
                result = number1 / number2
        }
        document.getElementById("display").innerText = result
    }else {
        alert("A va B sonlarini kiriting!")
    }
}

let base = []

let draw = function (){
    let userName = document.getElementById("fish").value
    let match = document.getElementById("match").value
    let payment = document.getElementById("pay").value
    let date = new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear()

    if (userName !== "" && payment !== ""){
        let object = {
            userName,
            match,
            payment,
            date
        }
        base.push(object)
        inner()
        document.getElementById("fish").value = ""
        document.getElementById("pay").value = ""
    }else {
        alert("Ma'lumotlarni to'liq kiriting!")
    }
}

function inner() {
    let tr = ""
    let i = 0
    for (let td of base) {
        tr += "<tr>" +
            "<td>" + (++i) +"</td>" +
            "<td>" + td.userName +"</td>" +
            "<td>" + td.payment +"</td>" +
            "<td>" + td.match +"</td>" +
            "<td>" + td.date +"</td>" +
            "</tr>"
    }
    document.getElementById("tbody").innerHTML = tr
}