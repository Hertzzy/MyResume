function insert(num) {
    let = numero = document.getElementById('result').innerHTML //select div result to show number
    document.getElementById('result').innerHTML = numero + num;
}

function back(){
    var resultado = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    
    var resultado = document.getElementById('result').innerHTML;
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado);
    }
}

//eval calculator => Create a calculator that prompts for an arithmetic expression and returns its result.

function clearAll(){
    document.getElementById('result').innerHTML = ''
}
