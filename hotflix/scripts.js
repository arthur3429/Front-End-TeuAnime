// Função que abre a sidebar na versão mobile

const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");

  sidebar.classList.toggle("sidebar-active");
});

// Função que exibe as opções da div PAGES na sidebar

function displayPage() {
  let page = document.querySelector(".pages-elements");
  let pages = document.querySelector("#pages-id"); // Nomes confusos, btw

  if (page.style.height == "0px" || page.style.height == "") {
    page.style.height = "270px";
    pages.classList.add("pages-active");
  } else {
    page.style.height = "0px";
    pages.classList.remove("pages-active");
  }
}

// Responsável por deixar a div PAGES ativa na sidebar quando estiver nas abas ADD-ITEM ou EDIT-USER
// function pageLoaded() {
//   let page = document.querySelector(".pages-elements");
//   let pages = document.querySelector("#pages-id");
//   page.style.height = "270px";
//   pages.classList.add("pages-active");
// }

// Função responsável por exibir os popups nas divs CATALOG e na USERS

function catalog() {
  // Função que abre a div do icone verde
  let confirmStatusChange = document.querySelectorAll(
    ".main-table-button--banned"
  );
  let popup1 = document.querySelector(".popup1");
  let popup1overlay = document.querySelector(".popup-overlay");
  let close = document.querySelector("#dismiss");
  // Para abrir clicando em qualquer um dos botões
  Array.from(confirmStatusChange).forEach((btn) => {
    btn.addEventListener("click", () => {
      popup1.style.display = "flex";

      if (popup1.style.display == "flex") {
        const popup1container = document.querySelector(".popup-container");
        setInterval(() => {
          popup1container.classList.add("popup-active");
        }, 0);
      }

      const popup1container = document.querySelector(".popup-container");
      popup1container.classList.remove("popup-active");
    });
    // para fechar clicando no overlay
    popup1overlay.addEventListener("click", () => {
      popup1.style.display = "none";
    });
    // para fechar clicando no botão DISMISS
    close.addEventListener("click", () => {
      popup1.style.display = "none";
    });
  });

  // Abrir o popup do ícone vermelho
  let confirmDelete = document.querySelectorAll(".main-table-button--delete");
  let popup2 = document.querySelector(".popup2");
  let popup2overlay = document.querySelector(".popup2-overlay");
  let close2 = document.querySelector("#dismiss2");

  Array.from(confirmDelete).forEach((btn) => {
    btn.addEventListener("click", () => {
      popup2.style.display = "flex";

      if (popup2.style.display == "flex") {
        const popup2container = document.querySelector("#pc2");
        setInterval(() => {
          popup2container.classList.add("popup-active");
        }, 0);
      }

      const popup2container = document.querySelector("#pc2");
      popup2container.classList.remove("popup-active");
    });
    // para fechar clicando no overlay
    popup2overlay.addEventListener("click", () => {
      popup2.style.display = "none";
    });
    // para fechar clicando no botão DISMISS
    close2.addEventListener("click", () => {
      popup2.style.display = "none";
    });
  });
}

// Funções responsáveis pela alternância entre as abas PROFILE, COMMENTS e REVIEWS na aba EDIT USER!
function editUser() {
  let profile = document.querySelector("#profile");
  let comments = document.querySelector("#comments");
  // let reviews = document.querySelector("#reviews");
  let Tprofile = document.querySelector("#table-profile");
  let Tcomments = document.querySelector("#table-comments");
  // let Treviews = document.querySelector("#table-reviews");

  profile.addEventListener("click", () => {
    // reviews.style.color = "white";
    comments.style.color = "white";
    profile.style.color = "#00dffb";
    //
    Tcomments.style.display = "none";
    // Treviews.style.display = "none";
    Tprofile.style.display = "flex";
    if (Tprofile.style.display == "flex") {
      setInterval(() => {
        Tprofile.classList.add("fadein");
      }, 0);
    }
    Tprofile.classList.remove("fadein");
  });

  comments.addEventListener("click", () => {
    // reviews.style.color = "white";
    profile.style.color = "white";
    comments.style.color = "#00dffb";
    Tcomments.style.display = "flex";
    // Treviews.style.display = "none";
    Tprofile.style.display = "none";
    if (Tcomments.style.display == "flex") {
      setInterval(() => {
        Tcomments.classList.add("fadein");
      }, 0);
    }
    Tcomments.classList.remove("fadein");
  });

  // reviews.addEventListener("click", () => {
  //   reviews.style.color = "#00dffb";
  //   comments.style.color = "white";
  //   profile.style.color = "white";
  //   Tcomments.style.display = "none";
  //   Treviews.style.display = "flex";
  //   Tprofile.style.display = "none";
  //   if (Treviews.style.display == "flex") {
  //     setInterval(() => {
  //       Treviews.classList.add("fadein");
  //     }, 0);
  //   }
  //   Treviews.classList.remove("fadein");
  // });

  // Função que abre a div do icone verde
  let confirmStatusChange = document.querySelectorAll(
    ".main-table-button--banned"
  );
  let popup1 = document.querySelector(".popup1");
  let popup1overlay = document.querySelector(".popup-overlay");
  let close = document.querySelector("#dismiss");
  // Para abrir clicando em qualquer um dos botões
  Array.from(confirmStatusChange).forEach((btn) => {
    btn.addEventListener("click", () => {
      popup1.style.display = "flex";

      if (popup1.style.display == "flex") {
        const popup1container = document.querySelector(".popup-container");
        setInterval(() => {
          popup1container.classList.add("popup-active");
        }, 0);
      }

      const popup1container = document.querySelector(".popup-container");
      popup1container.classList.remove("popup-active");
    });
    // para fechar clicando no overlay
    popup1overlay.addEventListener("click", () => {
      popup1.style.display = "none";
    });
    // para fechar clicando no botão DISMISS
    close.addEventListener("click", () => {
      popup1.style.display = "none";
    });
  });

  // Abrir o popup do ícone vermelho
  let confirmDelete = document.querySelectorAll(".main-table-button--delete");
  let popup2 = document.querySelector(".popup2");
  let popup2overlay = document.querySelector(".popup2-overlay");
  let close2 = document.querySelector("#dismiss2");

  Array.from(confirmDelete).forEach((btn) => {
    btn.addEventListener("click", () => {
      popup2.style.display = "flex";

      if (popup2.style.display == "flex") {
        const popup2container = document.querySelector("#pc2");
        setInterval(() => {
          popup2container.classList.add("popup-active");
        }, 0);
      }

      const popup2container = document.querySelector("#pc2");
      popup2container.classList.remove("popup-active");
    });
    // para fechar clicando no overlay
    popup2overlay.addEventListener("click", () => {
      popup2.style.display = "none";
    });
    // para fechar clicando no botão DISMISS
    close2.addEventListener("click", () => {
      popup2.style.display = "none";
    });
  });
}

//  Função responsável por exibir os popups nas divs COMMENTS e na REVIEWS
function comments() {
  // Abrir o popup do ícone vermelho
  let confirmDelete = document.querySelectorAll(".main-table-button--delete");
  let popup2 = document.querySelector(".popup2");
  let popup2overlay = document.querySelector(".popup2-overlay");
  let close2 = document.querySelector("#dismiss2");

  Array.from(confirmDelete).forEach((btn) => {
    btn.addEventListener("click", () => {
      popup2.style.display = "flex";

      if (popup2.style.display == "flex") {
        const popup2container = document.querySelector("#pc2");
        setInterval(() => {
          popup2container.classList.add("popup-active");
        }, 0);
      }

      const popup2container = document.querySelector("#pc2");
      popup2container.classList.remove("popup-active");
    });
    // para fechar clicando no overlay
    popup2overlay.addEventListener("click", () => {
      popup2.style.display = "none";
    });
    // para fechar clicando no botão DISMISS
    close2.addEventListener("click", () => {
      popup2.style.display = "none";
    });
  });
}


// v2 ADD-ITEM preview das imagens no form upload

function imagePreview() {
  // Função que faz as imagens upadas no input aparecerem na pré visualização

   const chooseFile = document.querySelector("#form-img-upload")
   const imgPreview = document.querySelector('.form-img')

   chooseFile.addEventListener('change', function () {
    getImgData()
   })

   function getImgData() {
      const files = chooseFile.files[0]
      if(files) {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(files)
        fileReader.addEventListener('load', function() {
            const image = document.createElement('img')
            image.setAttribute('src', this.result)
            image.setAttribute('id', 'form-img-uploaded')
            imgPreview.append(image)
        })
      }
   }
}

//  Função que faz as categorias adicionadas aparecerem na div de baixo

let array = []
let i = 0
function addCategorie() {
  let a = document.querySelectorAll('.infos2 input')
  array.push(a[i].value)                      
  document.querySelector('.categories').innerHTML += `<p>${array[i]}</p>`
  
  a[i].style.display = 'none'
  
  let newInput = document.createElement('input')
  newInput.setAttribute('type', 'text')
  newInput.setAttribute('placeholder', 'Categoria')
  newInput.setAttribute('name', 'categorias')
  document.querySelector('.infos2').append(newInput)
  
  return i++
}
