var opa, opb, op_ando, nada;

function init() {

    var result = document.getElementById("input");
    var num1 = document.getElementById("btn1");
    var num2 = document.getElementById("btn2");
    var num3 = document.getElementById("btn3");
    var num4 = document.getElementById("btn4");
    var num5 = document.getElementById("btn5");
    var num6 = document.getElementById("btn6");
    var num7 = document.getElementById("btn7");
    var num8 = document.getElementById("btn8");
    var num9 = document.getElementById("btn9");
    var num0 = document.getElementById("btn0");
    var sum = document.getElementById("btnS");
    var resta = document.getElementById("btnR");
    var mult = document.getElementById("btnP");
    var div = document.getElementById("btnD");
    var borrar = document.getElementById("btnB");
    var igual = document.getElementById("btnI");
    var impR = document.getElementById("resulImp");
    var del = document.getElementById("deleteImp");


    num1.onclick = function(e) {
        result.value += num1.value;
    };
    num2.onclick = function(e) {
        result.value += num2.value;
    };
    num3.onclick = function(e) {
        result.value += num3.value;
    };
    num4.onclick = function(e) {
        result.value += num4.value;
    };
    num5.onclick = function(e) {
        result.value += num5.value;
    };
    num6.onclick = function(e) {
        result.value += num6.value;
    };
    num7.onclick = function(e) {
        result.value += num7.value;
    };
    num8.onclick = function(e) {
        result.value += num8.value;
    };
    num9.onclick = function(e) {
        result.value += num9.value;
    };
    num0.onclick = function(e) {
        result.value += num0.value;
    };

    sum.onclick = function(e) {
        opa = Number(result.value);
        op_ando = sum.value;
        Borrar();
    };
    resta.onclick = function(e) {
        opa = Number(result.value);
        op_ando = resta.value;
        Borrar();
    };
    mult.onclick = function(e) {
        opa = Number(result.value);
        op_ando = mult.value;
        Borrar();
    };
    div.onclick = function(e) {
        opa = Number(result.value);
        op_ando = div.value;
        Borrar();
    };

    igual.onclick = function(e) {
        opb = Number(result.value);
        Resolver();
    };
    borrar.onclick = function() {
        Borrar();
    };

    del.onclick = function() {
        //impR.removeChild(nada);
        impR.innerHTML = "";
    }


    function Limpiar() {
        Borrar();
        opa = 0;
        opb = 0;
        op_ando = "";
    }

    function Borrar() {
        result.value = "";
    }

    function ImpResultados(respuesta) {
        //var saltoL = document.createElement("br");
        var spam = document.createElement("span");
        var text = document.createTextNode(respuesta + "\n");
        var nspam = spam.appendChild(text);
        //spam.appendChild(saltoL);
        nada = impR.appendChild(nspam);
    }

    function Resolver() {
        var res = 0;
        switch (op_ando) {
            case "+":
                res = opa + opb;
                break;
            case "-":
                res = opa - opb;
                break;
            case "*":
                res = opa * opb;
                break;
            case "/":
                res = opa / opb;
                break;
        }

        result.value = res;
        //nada = res;
        ImpResultados(res);
        //nada(res);
    }

    Limpiar();
}

init();