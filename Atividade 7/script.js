function validationForm() {
  let validationNomePet = document.forms["register"]["nomePet"].value;
  let validationEspecie = document.forms["register"]["especie"].value;
  let validationRaca = document.forms["register"]["raca"].value;
  let validationTutor = document.forms["register"]["tutor"].value;
  let validationTel = document.forms["register"]["tel"].value;
  let validationData = document.forms["register"]["data"].value;
  let validationHora = document.forms["register"]["hora"].value;

  if (validationNomePet == "") {
    alert("O nome do pet deve ser preenchido");
    return false;
  }

  if (validationEspecie == "") {
    alert("A espécie do pet deve ser preenchido");
    return false;
  }

  if (validationRaca == "") {
    alert("A raça do pet deve ser informada");
    return false;
  }

  if (validationTutor == "") {
    alert("O nome do tutor deve ser preenchido");
    return false;
  }

  if (validationTel == "") {
    alert("O telefone para contato deve ser informado");
    return false;
  }

  if (validationData == "") {
    alert("A data do agendamento deve ser informada");
    return false;
  }

  if (validationHora == "") {
    alert("A hora do banho e tosa deve ser preenchida");
    return false;
  }

  alert("A validação ocorreu corretamente!");
}

function insert() {
  let pet = document.forms["register"]["nomePet"].value;
  let especie = document.forms["register"]["especie"].value;
  let raca = document.forms["register"]["raca"].value;
  let tutor = document.forms["register"]["tutor"].value;
  let tel = document.forms["register"]["tel"].value;
  let data = document.forms["register"]["data"].value;
  let hora = document.forms["register"]["hora"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
    <th scope="row">${pet}</th>
    <td>${especie}</td>
    <td>${raca}</td>
    <td>${tutor}</td>
    <td>${tel}</td>
    <td>${data}</td>
    <td>${hora}</td>
    `;
}
