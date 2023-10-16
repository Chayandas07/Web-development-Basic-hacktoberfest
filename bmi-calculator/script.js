function CalcularIMC() {

    var alt = document.getElementById("altura")
    var pes = document.getElementById("peso")

    // Testando se os valores fornecidos são válidos

    if (alt.value.length == 0 || pes.value.length == 0) {
        alert("Preencha ambos os campos.")
    }

    else {

        alt = Number(alt.value)
        pes = Number(pes.value)

    // se o num equivalente a altura for inteiro, ocorrerá a divisão desse valor por 100


    if (Number.isInteger(alt) == true) {
        alt = alt / 100
        var imc = (pes/alt**2).toFixed(2)
    } 
    else {
        var imc = (pes/alt**2).toFixed(2)
    }
   
    var resText =  document.getElementById("imc-div")
    resText.innerHTML = `O seu IMC é de: ${imc}`

    }
}
