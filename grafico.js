
const { DOM } = require('./Finanças/script.js');



const consultaDb = {
  transactions: [], // Armazenar as transações obtidas do localStorage
  dataBancos: [], // Armazenar as datas formatadas das transações

  getDataFromLocalStorage: function () {
    let storedData = localStorage.getItem('dev.finances:transactions');
    if (storedData) {
      this.transactions = JSON.parse(storedData);
      for (let i = 0; i < this.transactions.length; i++) {
        let transaction = this.transactions[i];
        let transactionDate = transaction.date;


        const dateParts = transactionDate.split('/'); // Dividir a string da data em partes separadas
        const day = parseInt(dateParts[0], 10); // Obter o dia como um número inteiro
        const month = parseInt(dateParts[1], 10); // Obter o mês como um número inteiro
        const year = parseInt(dateParts[2], 10); // Obter o ano como um número inteiro

        const datestorage = new Date(year, month - 1, day); // Criar o objeto Date com as partes separadas

        if (isNaN(datestorage)) { // Verificar se a data é inválida
          console.log('Data inválida:', transactionDate);
        } else {
          const month2 = datestorage.toLocaleString('default', { month: '2-digit' });
          const year2 = datestorage.getFullYear();
          const dataBanco = month2 + "/" + year2;
          console.log(dataBanco);

          this.dataBancos.push(dataBanco); // Adicionar a data formatada ao array dataBancos
        }
      }
    } else {
      // Dados não encontrados ou não existentes
    }
  },

  getDataSelecionada: function () {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function () {
      debugger;

      const monthYearInput = document.getElementById('month-year'); //tratando data selecionada para ter apenas mês e ano e assim poder ser comparada com a data selecionada
      const selectedMonthYear = monthYearInput.value;
      const selectedMonth = selectedMonthYear.split('-')[1];
      const selectedYear = selectedMonthYear.split('-')[0];

      const dataSelecionada = selectedMonth + "/" + selectedYear; // data selecionada

      for (let i = 0; i < consultaDb.dataBancos.length; i++) {
        if (dataSelecionada === consultaDb.dataBancos[i]) {
          console.log('Datas iguais - Data selecionada:', dataSelecionada, "Data do banco:", consultaDb.dataBancos[i]);
          const tr = document.createElement('tr');

          console.log(consultaDb.transactions[i]);
          const html = DOM.innerHTMLTransaction(transaction, index);




        } else {
          console.log('Datas diferentes - Data selecionada:', dataSelecionada, "Data do banco:", consultaDb.dataBancos[i]);
        }
      }
    });
  }
};

consultaDb.getDataFromLocalStorage();
consultaDb.getDataSelecionada();
