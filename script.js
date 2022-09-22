const salario = document.querySelector('#salario')
const hora_trabalho = document.getElementById('hora')
const submit = document.querySelector('#submit')
const form = document.querySelector('#form')
const dias = document.querySelector('#dias')
submit.addEventListener('click', (event) => {
    event.preventDefault();
    const salario_value = salario.value;
    const hora_trabalho_value = hora_trabalho.value;
    const dias_mes = dias.value;

    const div = document.createElement('div');
    form.appendChild(div);

    const salario_hora = document.createElement('h1');
    div.appendChild(salario_hora);
    
    const horas_trabalhadas_por_mes = parseInt(dias_mes) * parseInt(hora_trabalho_value);
    const resultado_valor_hora = parseInt(salario_value) / horas_trabalhadas_por_mes ;
    salario_hora.innerText = `Seu valor hora é de : ${resultado_valor_hora}`  
})