const p = document.getElementById("peso")
const a = document.getElementById("altura")
const resultado = document.getElementById("resultado")

function calculoIMC() {
    let peso = p.value
    let altura = a.value

    calculo = peso/ (altura *altura)

    if (calculo < 18.5) {
        resultado.innerHTML = `Seu IMC é de ${Math.round(calculo)}kg/m2, magreza`
    } else if (calculo >= 18.5 && calculo < 25) {
        resultado.innerHTML = `Seu IMC é de ${Math.round(calculo)}Kg/m2, peso normal`
    } else if (calculo >= 25 && calculo < 30) {
        resultado.innerHTML = `Seu IMC é de ${Math.round(calculo)}Kg/m2, sobrepeso`
    } else if (calculo >= 30 && calculo < 35) {
        resultado.innerHTML = `Seu IMC é de ${Math.round(calculo)}Kg/m2, Obesidade grau I`
    } else if(calculo >= 35 && calculo < 40) {
        resultado.innerHTML = `Seu IMC é de ${Math.round(calculo)}Kg/m2, Obesidade grau II`
    } else {
        resultado.innerHTML = `Seu IMC é de ${Math.round(calculo)}Kg/m2, Obesidade grau III`
    }
}