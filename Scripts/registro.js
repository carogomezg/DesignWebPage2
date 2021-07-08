$(function (){


    $('#buttonCliente').click(function () {
        
        document.getElementById('registro1').style.display = 'block';
        document.getElementById('registro2').style.display = 'none';
        document.getElementById('titulo').innerHTML = 'Registro de Cliente';
    })

    $('#buttonEmpresa').click(function () {
        
        document.getElementById('registro1').style.display = 'none';
        document.getElementById('registro2').style.display = 'block';
        document.getElementById('titulo').innerHTML = 'Registro de Empresa';
    })

});