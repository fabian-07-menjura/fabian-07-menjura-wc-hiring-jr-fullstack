export default [
  {
    category: "Restaurants", //restaurantes
    description: "Burger King",
    amount: 26800,
    type: "expense", //gasto
  },
  {
    category: "Restaurants", //restaurantes
    description: "Pan Pa Ya",
    amount: 16800,
    type: "expense", //gasto
  },
  //los ingresos se sacan sumando todos los valores de esta misma categoria "incone"=3.900.000
  {
    category: "Income", //ingresos
    description: "Freelance Project 1",
    amount: 1200000,
    type: "income", //ingreso
  },
  {
    category: "Income", //ingresos
    description: "Freelance Project 2",
    amount: 1750000,
    type: "income", //ingreso
  },
  {
    category: "Income", //ingreaos
    description: "Freelance Project 3",
    amount: 950000,
    type: "income", //ingreso
  },
  {
    category: "Groceries", //comestibles
    description: "Exito",
    amount: 250000,
    type: "expense", //gasto
  },
  {
    category: "Rent", //alquiler
    description: "Rent",
    amount: 2000000,
    type: "expense", //gasto
  },
];

//los ingresos se sacan sumando todos los valores de esta misma categoria "incone"=3.900.000
//el saldo actual se saca sumando todos los ingresos y restando los gastos 1606400
