class Transaccion {
    constructor(id,description,amount,type){
        this.id = id
        this.description = description
        this.amount = amount
        this.type = type
    }
}


    class CantidadTransacciones {
        constructor(arrayTransacciones = []){
            this.arrayTransacciones = arrayTransacciones
        }
        agregarTransacciones(arrayTransacciones){
            if(!Array.isArray(arrayTransacciones)){
                throw new Error ("Las Transacciones recibidas no son un array de elementos")
            }
            else{
                for(let transaccion of arrayTransacciones){
                    this.arrayTransacciones.push(new Transaccion(transaccion.id,transaccion.description,transaccion.amount,transaccion.type))
                }
            }
        }

    calcularTotalIn(arrayTransacciones){
    let total = arrayTransacciones.filter(transaccion => transaccion.type === "income")
    .reduce((acc,t) =>acc + t.amount,0);
    return total;
    }


    calcularTotalEx(arrayTransacciones){
        let total = arrayTransacciones.filter(transaccion =>transaccion.type === "expense")
        .reduce((acc,t) =>acc + t.amount,0);
        return total;
        }


    calcularBalance(arrayTransacciones){
    
    let totalIncome = arrayTransacciones.filter(transaccion =>transaccion.type === "income")
    .reduce((acc,t) =>acc + t.amount,0);

    let totalExpense= arrayTransacciones.filter(transaccion =>transaccion.type === "expense")
    .reduce((acc,t) =>acc + t.amount,0);
   
    return totalIncome-totalExpense;
}


    calcularPromediosIngYgastos(arrayTransacciones){
        const totalIng = this.calcularTotalIn(arrayTransacciones)
        const totalExp = this.calcularTotalEx(arrayTransacciones)
        const contadorIncome = arrayTransacciones.filter(t => t.type === "income").length
        const contadorExpense = arrayTransacciones.filter(t => t.type === "expense").length
        const promedioIncome = contadorIncome > 0 ? totalIng / contadorIncome : 0;
        const promedioExpense = contadorExpense > 0 ? totalExp / contadorExpense : 0;


        return({promedioIncome , promedioExpense})
    }

    filtrarTransaccionesGrandes(arrayTransacciones,valorMaximo,valorMinimo = Number.MIN_SAFE_INTEGER){
        let arrayFiltrado = arrayTransacciones.filter(t => t.amount >= valorMinimo  && t.amount <= valorMaximo)
        return arrayFiltrado
    }
}

const transacciones = new CantidadTransacciones
transacciones.agregarTransacciones([
    {
      "id": 1,
      "description": "Venta de productos al exterior",
      "amount": 1500.50,
      "type": "income"
    },
    {
      "id": 2,
      "description": "Compra de materia prima",
      "amount": 800.25,
      "type": "expense"
    },
    {
      "id": 3,
      "description": "Servicio de consultoría",
      "amount": 2200.00,
      "type": "income"
    },
    {
      "id": 4,
      "description": "Pago de servicios públicos",
      "amount": 350.75,
      "type": "expense"
    },
    {
      "id": 5,
      "description": "Venta de software personalizado",
      "amount": 5000.00,
      "type": "income"
    },
    {
      "id": 6,
      "description": "Gastos de marketing digital",
      "amount": 1200.30,
      "type": "expense"
    },
    {
      "id": 7,
      "description": "Comisión por ventas",
      "amount": 450.80,
      "type": "income"
    },
    {
      "id": 8,
      "description": "Mantenimiento de equipos",
      "amount": 650.00,
      "type": "expense"
    },
    {
      "id": 9,
      "description": "Licencias de software",
      "amount": 300.00,
      "type": "expense"
    },
    {
      "id": 10,
      "description": "Proyecto de desarrollo web",
      "amount": 3200.50,
      "type": "income"
    }
  ]
  )


  console.log(`El balance da: ${transacciones.calcularBalance(transacciones.arrayTransacciones)}$`)
  const {promedioIncome,promedioExpense } = transacciones.calcularPromediosIngYgastos(transacciones.arrayTransacciones)
  console.log(`El promedio de ingresos es ${promedioIncome}$\n Y el promedio de gastos es ${promedioExpense}$`)

  const filtro = transacciones.filtrarTransaccionesGrandes(transacciones.arrayTransacciones,900)
  console.table(filtro)


module.exports = { CantidadTransacciones };
