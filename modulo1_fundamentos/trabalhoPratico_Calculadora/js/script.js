var globalCalculations = [
  {
    id: 1,
    description: 'Sum (A+B) : ',
    calculationFunction: function sum(a, b) {
      return a + b;
    },
    type: 'a_b',
  },

  {
    id: 2,
    description: 'Subtraction 1 (A-B) : ',
    calculationFunction: function subtract(a, b) {
      return a - b;
    },
    type: 'a_b',
  },

  {
    id: 3,
    description: 'Subtraction 2 (B-A) : ',
    calculationFunction: function subtract(b, a) {
      return b - a;
    },
    type: 'b_a',
  },

  {
    id: 4,
    description: 'Multiplication (AxB) : ',
    calculationFunction: function multiply(a, b) {
      return formatNumber(a * b);
    },
    type: 'a_b',
  },

  {
    id: 5,
    description: 'Division 1 (A/B) : ',
    calculationFunction: function division(a, b) {
      return getDivisionFrom(a, b);
    },
    type: 'a_b',
  },

  {
    id: 6,
    description: 'Division 2 (B/A) : ',
    calculationFunction: function division(b, a) {
      return getDivisionFrom(b, a);
    },
    type: 'b_a',
  },

  {
    id: 7,
    description: 'Square of A (A^2) : ',
    calculationFunction: function square(a) {
      return formatNumber(a ** 2);
    },
    type: 'a',
  },

  {
    id: 8,
    description: 'Square of B (B^2) : ',
    calculationFunction: function square(b) {
      return formatNumber(b ** 2);
    },
    type: 'b',
  },

  {
    id: 9,
    description: 'A integer divisors : ',
    calculationFunction: function divisorsFrom(a) {
      return getDivisorsFrom(a);
    },
    type: 'a',
  },

  {
    id: 10,
    description: 'B integer divisors: ',
    calculationFunction: function divisorsFrom(b) {
      return getDivisorsFrom(b);
    },
    type: 'b',
  },

  {
    id: 11,
    description: 'Factorial of A (!A): ',
    calculationFunction: function factorial(a) {
      return getFactorialFrom(a);
    },
    type: 'a',
  },

  {
    id: 12,
    description: 'Factorial of B (!B): ',
    calculationFunction: function factorial(b) {
      return getFactorialFrom(b);
    },
    type: 'b',
  },
];

var globalInputA = document.querySelector('#inputA');
var globalInputB = document.querySelector('#inputB');

function formatNumber(number) {
  return new Intl.NumberFormat('pt-BR').format(number);
}

function getDivisionFrom(number1, number2) {
  if (number2 === 0){
   return 'Division by 0';
  }
  return formatNumber((number1/number2).toFixed(2));
}

function getDivisorsFrom(number) {
  var divisors = [];

  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.join(', ') + '(' + divisors.length + ')';
}

function getFactorialFrom(number) {
  if (number > 21) {
    return 'Número muito grande.';
  }

  var factorial = 1;

  for (var i = number; i > 1; i--) {
    factorial *= i;
  }

  return formatNumber(factorial);
}

function start() {
  globalInputA.addEventListener('input', handleChangeInputA);
  globalInputB.addEventListener('input', handleChangeInputB);

  calculate();
}

function handleChangeInputA() {
  calculate();
}

function handleChangeInputB() {
  calculate();
}

function calculate() {
  var divCalculations = document.querySelector('#calculations');

  var innerCalculations = document.createElement('div');
  innerCalculations.classList.add('row');

  var a = parseInt((globalInputA.value  ));
  var b = parseInt((globalInputB.value ));

  for (var i = 0; i < globalCalculations.length; i++) {
    var currentCalculation = globalCalculations[i];
    var type = currentCalculation.type;
    var calculationFunction = currentCalculation.calculationFunction;

    // Modern javascript
    // const {type, calculationFunction} = currentCalculation;

    var id = 'input_' + currentCalculation.id;

    var value = getCalculationFrom(type, calculationFunction, a, b);

    var div = getMaterializeDiv();

    var input = getMaterializeInput(id, value);

    var label = getMaterializeLabel(id, currentCalculation.description);

    div.appendChild(input);
    div.appendChild(label);
    innerCalculations.appendChild(div);
  }
  divCalculations.innerHTML = '';
  divCalculations.appendChild(innerCalculations);
}


function getCalculationFrom(type, calculationFunction, number1, number2) {
  var value = '';

  switch (type) {
    case 'a':
      value = calculationFunction(number1);
      break;

    case 'b':
      value = calculationFunction(number2);
      break;

    case 'a_b':
      value = calculationFunction(number1, number2);
      break;

    case 'b_a':
      value = calculationFunction(number2, number1);
      break;

    default:
      value = "The calculation type wasn't identified.";
  }

  return value;
}

function getMaterializeDiv(){
  var div = document.createElement('div');
  div.classList.add('input-field', 'col', 's12', 'm6', 'l4');

  return div;
}

function getMaterializeInput(id, value){
  var input = document.createElement('input');
  input.readOnly = true;
  input.type = 'text';
  input.id = id;
  input.value = value;

  return input;
}

function getMaterializeLabel(id, description){
  var label = document.createElement('label');
  label.for = id;
  label.textContent = description;
  label.classList.add('active');

  return label;
}

start();
