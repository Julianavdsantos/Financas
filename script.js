

const Modal = {
  open() {
    // Abrir modal
    document.querySelector('.modal-overlay').classList.add('active');
  },
  close() {
    // fechar o modal
    document.querySelector('.modal-overlay').classList.remove('active');
  },
};

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem('dev.finances:transactions')) || [];
  },

  set(transactions) {
    localStorage.setItem('dev.finances:transactions', JSON.stringify(transactions));
  },
};

const Transaction = {
  all: Storage.get(),

  add(transaction) {
    Transaction.all.push(transaction);
    App.reload();
  },


  remove(index) {
    Transaction.all.splice(index, 1);
    App.reload();
  },

  edit(index, transaction) {
    Transaction.all[index] = transaction;
    App.reload();
  },

  incomes() {
    let income = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });
    return income;
  },

  expenses() {
    let expense = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });
    return expense;
  },

  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};



const DOM = {

  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr');
    tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
    tr.dataset.index = index;

    DOM.transactionsContainer.appendChild(tr);

  },

  innerHTMLTransaction(transaction, index) {

    debugger

    const CSSclass = transaction.amount > 0 ? 'income' : 'expense';

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td  class="tipodeGasto">${transaction.tipodeGasto}</td>
        <td>
            <img onclick="Transaction.remove(${index})" src="remove.svg" alt="Remover transação">
            <img onclick="DOM.openEditModal(${index})" src="editar.svg" alt="Editar transação">
        </td>
        `;

    return html;
  },


  updateBalance() {
    document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes());
    document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses());
    document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total());
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = '';
  },

  openEditModal(index) {

    document.getElementById("title").innerHTML = "Editar Transação";

    const transaction = Transaction.all[index];

    Form.description.value = transaction.description;
    Form.amount.value = transaction.amount / 100;

    Form.date.value = Utils.formatDate(transaction.date);
    Form.tipodeGasto.value = transaction.tipodeGasto;

    Modal.open();

    const editButton = document.querySelector('.modal-overlay button');
    editButton.addEventListener('click', () => {
      DOM.editTransaction(index);
    });
  },

  editTransaction(index) {
    try {
      Form.validateFields();
      const transaction = Form.formatValues();
      Transaction.edit(index, transaction);
      Form.clearFields();
      Modal.close();
    } catch (error) {
      alert(error.message);
    }
  },
};


const Utils = {
  formatAmount(value) {
    value = Number(value.replace(/\,\./g, '')) * 100;

    return value;
  },

  formatDate(date) {
    const splittedDate = date.split('-');
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  },

  formatCurrency(value) {
    const signal = Number(value) < 0 ? '-' : '';

    value = String(value).replace(/\D/g, '');

    value = Number(value) / 100;

    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return signal + value;
  },
};
debugger
const Form = {

  description: document.querySelector('input#description'),
  amount: document.querySelector('input#amount'),
  date: document.querySelector('input#date'),
  tipodeGasto: document.querySelector('#tipodeGasto'),


  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
      tipodeGasto: Form.tipodeGasto.value,
    };
  },

  validateFields() {
    const { description, amount, date, tipodeGasto } = Form.getValues();

    if (description.trim() === '' || amount.trim() === '' || date.trim() === '' || tipodeGasto.trim() === '') {
      throw new Error('Por favor, preencha todos os campos');
    }
  },

  formatValues() {
    let { description, amount, date, tipodeGasto } = Form.getValues();

    amount = Utils.formatAmount(amount);

    date = Utils.formatDate(date);

    return {
      description,
      amount,
      date,
      tipodeGasto
    };
  },

  clearFields() {
    Form.description.value = '';
    Form.amount.value = '';
    Form.date.value = '';
  },

  submit(event) {
    debugger
    event.preventDefault();

    try {
      Form.validateFields();
      const transaction = Form.formatValues();
      Transaction.add(transaction);
      Form.clearFields();
      Modal.close();
    } catch (error) {
      alert(error.message);
    }
  },
};

const App = {
  init() {
    Transaction.all.forEach(DOM.addTransaction);

    DOM.updateBalance();

    Storage.set(Transaction.all);
  },
  reload() {
    DOM.clearTransactions();
    App.init();
  },
};


App.init();

