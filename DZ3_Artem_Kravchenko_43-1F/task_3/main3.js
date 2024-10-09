function calculator() {
  while (true) {
    var n1 = Number(prompt("Введите первое число :"));

    var operation = prompt("Введите операцию +, -, *, / :");

    var n2 = Number(prompt("Введите второе число :"));

    var result;

    if (operation === "+") {
      result = n1 + n2;
    } else if (operation === "-") {
      result = n1 - n2;
    } else if (operation === "*") {
      result = n1 * n2;
    } else if (operation === "/") {
      if (n2 === 0) {
        alert("Error : делить на ноль нельзя");
        continue;
      }
      result = n1 / n2;
    } else {
      alert("Error : неправильная операция, попробуйте еще раз");
      continue;
    }

    alert("Ответ : " + result);
  }
}

calculator();
