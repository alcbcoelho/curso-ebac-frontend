function handleSubmit() {
  const [fieldA, fieldB] = document.querySelectorAll("input");

  if (fieldA.value < fieldB.value) {
    alert("O formulário é válido!");
  } else {
    alert("O formulário é inválido!");
  }
}

document.querySelector("form button").addEventListener("click", handleSubmit);