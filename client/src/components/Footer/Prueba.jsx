function ingredienteEnMalEstado(menu, comida, ingrediente) {
  let ingredientesEliminados = [];
  let menuDelDia = {
    raviolesConSalsa: ['Harina', 'Sal', 'Huevos', 'Aceite', 'Peceto', 'Ricota'],
    bagnaCauda: ['Ajo', 'Anchoas', 'Aceite', 'Crema', 'Papas', 'Zanahorias'],
    tallarines: ['Harina', 'Pollo', 'Aceite', 'Huevos', 'Tomates', 'Cebolla'],
  };
  for (menu in menuDelDia) {
    if (comida === menuDelDia[menu]) {
      console.log(comida);
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].indexOf() === ingrediente) {
          ingredientesEliminados.push(menu[i]);
          return ingredientesEliminados;
        }
      }
    }
  }
  return 'El menú está perfecto';
}

console.log(
  ingredienteEnMalEstado(
    ['Harina', 'Sal', 'Huevos', 'Aceite', 'Peceto', 'Ricota'],
    'raviolesConSalsa',
    'Peceto'
  )
);
//devuelve => ["Aceite", "Peceto", "Ricota"];

console.log(
  ingredienteEnMalEstado(
    ['Harina', 'Pollo', 'Aceite', 'Huevos', 'Tomates', 'Cebolla'],
    'tallarines',
    'Aceite'
  )
);
//devuelve => ["Pollo", "Aceite", "Huevos"];

// En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
// NOTA: No utilizar el método "includes".
