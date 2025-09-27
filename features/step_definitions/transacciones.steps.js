const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { CantidadTransacciones } = require('../../src/index.js');

let transacciones;
let resultado;
let resultadoFiltrado;
let promedios;

Given('la siguiente lista de transacciones:', function (dataTable) {
  const datos = dataTable.hashes().map(row => ({
    id: Number(row.id),
    description: row.description,
    amount: Number(row.amount),
    type: row.type
  }));
  transacciones = new CantidadTransacciones();
  transacciones.agregarTransacciones(datos);
});

When('calculo el total de ingresos', function () {
  resultado = transacciones.calcularTotalIn(transacciones.arrayTransacciones);
});

Then('el resultado de ingresos debe ser {float}', function (valorEsperado) {
  assert.strictEqual(Number(resultado.toFixed(2)), Number(valorEsperado.toFixed(2)));
});

When('calculo el total de egresos', function () {
  resultado = transacciones.calcularTotalEx(transacciones.arrayTransacciones);
});

Then('el resultado de egresos debe ser {float}', function (valorEsperado) {
  assert.strictEqual(Number(resultado.toFixed(2)), Number(valorEsperado.toFixed(2)));
});

When('calculo el balance', function () {
  resultado = transacciones.calcularBalance(transacciones.arrayTransacciones);
});

Then('el resultado del balance debe ser {float}', function (valorEsperado) {
  assert.strictEqual(Number(resultado.toFixed(2)), Number(valorEsperado.toFixed(2)));
});

When('calculo los promedios', function () {
  promedios = transacciones.calcularPromediosIngYgastos(transacciones.arrayTransacciones);
});

Then('el promedio de ingresos debe ser {float}', function (valorEsperado) {
  assert.strictEqual(Number(promedios.promedioIncome.toFixed(2)), Number(valorEsperado.toFixed(2)));
});

Then('el promedio de egresos debe ser {float}', function (valorEsperado) {
  assert.strictEqual(Number(promedios.promedioExpense.toFixed(2)), Number(valorEsperado.toFixed(2)));
});

When('filtro las transacciones con máximo {int}', function (valorMaximo) {
  resultadoFiltrado = transacciones.filtrarTransaccionesGrandes(transacciones.arrayTransacciones, valorMaximo);
});

Then('deben devolverse {int} transacciones', function (cantidadEsperada) {
  assert.strictEqual(resultadoFiltrado.length, cantidadEsperada);
});