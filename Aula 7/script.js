function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  //dentro dos formulários do meu código, ele vai pegar o formulário que tem o name register e o valor que está dentro do input de name cod.
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationActor = document.forms["register"]["actor"].value;
  let validationImdb = document.forms["register"]["imdb"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  //validações --> caso input esteja vazio, dará o alerta:

  if (validationCod == "") {
    alert("O código deve ser preenchido");
    return false;
  }

  if (validationTitle == "") {
    alert("O título deve ser preenchido");
    return false;
  }

  if (validationDirector == "") {
    alert("O nome do diretor deve ser preenchido");
    return false;
  }

  if (validationDate == "") {
    alert("A data deve ser preenchida");
    return false;
  }

  if (validationActor == "") {
    alert("O ator ou atriz principal deve ser preenchido(a)");
    return false;
  }

  if (validationImdb == "") {
    alert("A nota no IMDb deve ser preenchida");
    return false;
  }

  if (validationRadio == "") {
    alert("O gênero deve ser preenchido");
    return false;
  }

  alert("A validação ocorreu corretamente.");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let actor = document.forms["register"]["actor"].value;
  let imdb = document.forms["register"]["imdb"].value;
  let radio = document.forms["register"]["radio"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
  <th scope="row">${cod}</th>
  <td>${title}</td>
  <td>${director}</td>
  <td>${date}</td>
  <td>${actor}</td>
  <td>${imdb}</td>
  <td>${radio}</td>
  `;

  //estamos adicionando uma concatenação do tamplate string com as crases e o $.
}
