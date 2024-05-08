document.addEventListener('DOMContentLoaded', function () {
    const apiUrL = 'https://api.adviceslip.com/advice';

    fetch(apiUrL)
        .then(response => response.json())
        .then(data => {
            //Verfico se a chave 'slip' existe nos dados
            if (data.slip && data.slip.advice) {

                //Exibo apenas o 'advice' na tela
                const advice = data.slip.advice;
                const apiDataElement = document.getElementById('api-data');
                apiDataElement.textContent = advice;
            } else {

                //Se a estrutura for diferente, exibo uma mensagem de erro
            const apiDataElement = document.getElementById('api-data');
            apiDataElement.textContent = 'Dados da API inválidos';
            }
        })

        .catch(error => {
            console.error('Erro ao carregar API', error);
        });
});