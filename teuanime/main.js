//Dados dos animes da Home e Listas

let animes = [
    {
        title: "Boku no Hero Academia",
        thumbnail: "images/boku-no-hero.jpe",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Overlord IV IV",
        thumbnail: "images/overllord.jpeg",
        category: "Ação",
        rating: "8.4",
    },
    {
        title: "Chainsaw Man",
        thumbnail: "images/chainsaw.jpe",
        category: "Ação",
        rating: "8.7",
    },
    {
        title: "Aharen-san wa Hakarenai!",
        thumbnail: "images/aharen-san wa hakarenai.png",
        category: "Escolar",
        rating: "8.1",
    },
    {
        title: "Kono Subarashii Sekai ni Shukufuku o!",
        thumbnail: "images/konosuba.jpeg",
        category: "Comédia",
        rating: "9.9",
    },
    {
        title: "Sword Art Online: Alicization",
        thumbnail: "images/sao alicization.jpe",
        category: "Sci-Fi",
        rating: "8.4",
    },
    {
        title: "Tate no Yuusha no Nariagari",
        thumbnail: "images/shield-hero.jpe",
        category: "Aventura",
        rating: "8.4",
    },
    {
        title: "Demon Slayer",
        thumbnail: "images/kimetsu.jpe",
        category: "Djabo",
        rating: "8.4",
    },
    {
        title: "Goblin Slayer",
        thumbnail: "images/goblin-slayer.jpeg",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Jujutsu Kaisen",
        thumbnail: "images/jujustsu.jpe",
        category: "Aventura",
        rating: "8.1",
    },
];

let episodios = [
    {
        title: "Overlord IV",
        ep_title: "Reino de Re-Estize",
        thumbnail: "images/13.jpeg",
        quality: "FHD",
        ep_num: "13",
    },
    {
        title: "Overlord IV",
        ep_title: "Império Baharuth",
        thumbnail: "images/12.jpeg",
        quality: "FHD",
        ep_num: "12",
        active: true,
    },
    {
        title: "Overlord IV",
        ep_title: "O governo da conspiração",
        thumbnail: "images/11.jpeg",
        quality: "FHD",
        ep_num: "11",
    },
    {
        title: "Overlord IV",
        ep_title: "A crise Iminente",
        thumbnail: "images/10.jpeg",
        quality: "FHD",
        ep_num: "10",
    },
    {
        title: "Overlord IV",
        ep_title: "Em busca do Reino dos Anões",
        thumbnail: "images/9.jpeg",
        quality: "FHD",
        ep_num: "9",
    },
    {
        title: "Overlord IV",
        ep_title: "Lorde Frost Dragon",
        thumbnail: "images/8.jpeg",
        quality: "FHD",
        ep_num: "8",
    },
    {
        title: "Overlord IV",
        ep_title: "Uma jogada inesperada",
        thumbnail: "images/7.jpeg",
        quality: "FHD",
        ep_num: "7",
    },
    {
        title: "Overlord IV",
        ep_title: "Contagem regressiva para a extinção",
        thumbnail: "images/6.jpeg",
        quality: "FHD",
        ep_num: "6",
    },
    {
        title: "Overlord IV",
        ep_title: "O último rei",
        thumbnail: "images/5.jpeg",
        quality: "FHD",
        ep_num: "5",
    },
    {
        title: "Overlord IV",
        ep_title: "Armadilhas bem preparadas",
        thumbnail: "images/4.jpeg",
        quality: "FHD",
        ep_num: "4",
    },
    {
        title: "Overlord IV",
        ep_title: "Invasão da capital real",
        thumbnail: "images/3.jpeg",
        quality: "FHD",
        ep_num: "3",
    },
    {
        title: "Overlord IV",
        ep_title: "A bruxa do reino extinto",
        thumbnail: "images/2.jpeg",
        quality: "FHD",
        ep_num: "2",
    },
    {
        title: "Overlord IV",
        ep_title: "O reino de Re-Estize",
        thumbnail: "images/1.jpeg",
        quality: "FHD",
        ep_num: "1",
    },
];

function home() {
    //Prev e Next no slider da homepage
    let prevBtn = document.querySelector("#prevBtn");
    let nextBtn = document.querySelector("#nextBtn");

    nextBtn.addEventListener("click", () => {
        let flickityNext = document.querySelector(".next");
        flickityNext.click();
    });

    prevBtn.addEventListener("click", () => {
        let flickityPrev = document.querySelector(".previous");
        flickityPrev.click();
    });

    const message = document.querySelector(".user-profile");
    message.classList.add("active");

    //Slider da Home
    let slider1 = document.querySelector(".slider-1");

    //Loop para adicionar os animes no primeiro slider dinamicamente
    animes.forEach((anime) => {
        let article = `<article id="base-article">
                    <a href="temporadas.html">
                        <div class="poster">
                            <img src="${anime.thumbnail}" alt="img" />
                            <div class="poster-overlay">
                            <div class="play-btn">
                                <!-- PLAY ICON -->
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
                                    fill="rgba(255,255,255,1)"
                                />
                                </svg>
                            </div>
                            <div class="rating">
                                <!-- STAR ICON -->
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                                >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                                    fill="rgba(255,255,255,1)"
                                />
                                </svg>
                                ${anime.rating}
                            </div>
                            </div>
                        </div>
                        <div class="data">
                            <h3><a href="#">${anime.title}</a></h3>
                            <h4><a href="#">${anime.category}</a></h4>
                        </div>
                    </a>
                </article>`;

        slider1.insertAdjacentHTML("beforeend", article);
    });

    //Iniciador da lib do slider na home
    var flickity = new Flickity(slider1, {
        draggable: true,
        cellAlign: "left",
        pageDots: false,
        freeScroll: false,
        contain: false,
        wrapAround: true,
    });

    let newEpsSection = document.querySelector("#new-eps-section");
    //Loop para adicionar os episodios dos animes da seção ùltimos lançamentos
    for (let i = 0; i < 12; i++) {
        let article = `    <article>
                            <div class="poster">
                                <img src="${episodios[i].thumbnail}" alt="img" />
                                <a href="episodio.html">
                                    <div class="poster-overlay">
                                        <div class="play-btn">
                                            <!-- PLAY ICON -->
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="48"
                                                height="48"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path
                                                    d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
                                                    fill="rgba(255,255,255,1)"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <span class="language">${episodios[i].quality}</span>
                            </div>
                            <div class="data">
                                <h3><a href="episodio.html">${episodios[i].title}</a></h3>
                                <h4>Episódio ${episodios[i].ep_num}</h4>
                            </div>
                        </article>`;
        newEpsSection.insertAdjacentHTML("beforeend", article);
    }

    let recentAdds = document.querySelector("#recent-adds-section");
    //Loop para adicionar os episodios dos animes da seção Recentemente adicionados
    for (let i = 0; i < 4; i++) {
        let article = `    <article>
                            <div class="poster">
                                <img src="${episodios[i].thumbnail}" alt="img" />
                                <a href="episodio.html">
                                    <div class="poster-overlay">
                                        <div class="play-btn">
                                            <!-- PLAY ICON -->
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="48"
                                                height="48"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path
                                                    d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
                                                    fill="rgba(255,255,255,1)"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <span class="language">${episodios[i].quality}</span>
                            </div>
                            <div class="data">
                                <h3><a href="episodio.html">${episodios[i].title}</a></h3>
                                <h4>Episódio ${episodios[i].ep_num}</h4>
                            </div>
                        </article>`;
        recentAdds.insertAdjacentHTML("beforeend", article);
    }
}

// Funções responsáveis por abrir e fechar pesquisa e menu
function openSearchBar() {
    let searchBar = document.querySelector(".search-bar");
    if (searchBar.classList.contains("hide")) {
        searchBar.classList.remove("hide");
    } else {
        searchBar.classList.add("show");
    }
}
function closeSearchBar() {
    let searchBar = document.querySelector(".search-bar");
    searchBar.classList.add("hide");
    setTimeout(() => {
        searchBar.classList.remove("hide");
        searchBar.classList.remove("show");
    }, 550);
}

function showMenu() {
    let menu = document.querySelector(".main-menu");
    menu.classList.add("show");
}

function hideMenu() {
    let menu = document.querySelector(".main-menu");
    menu.classList.add("hide");
    setTimeout(() => {
        menu.classList.remove("hide");
        menu.classList.remove("show");
    }, 550);
}

// Funções responsáveis pela paginação e escolha dos filtros nas paginas animes.html (Lista de animes) e filmes.html (Filmes)

function alphabet() {
    // Mudar o ACTIVE das letras do alfabeto
    let abc = document.querySelectorAll(".abc li");

    Array.from(abc).forEach((letter) => {
        letter.addEventListener("click", () => {
            Array.from(abc).forEach((all) => {
                if (all.classList.contains("active")) {
                    all.classList.remove("active");
                }
            });

            letter.classList.add("active");
        });
    });
    // Mudar o ACTIVE das opções de filtro
    let filterType = document.querySelectorAll(".filter-type li");

    Array.from(filterType).forEach((filter) => {
        filter.addEventListener("click", () => {
            Array.from(filterType).forEach((all) => {
                if (all.classList.contains("active")) {
                    all.classList.remove("active");
                }
            });

            filter.classList.add("active");
        });
    });

    // Mudar o ACTIVE dos botões de paginação

    let pagination = document.querySelectorAll(".pagination li");

    Array.from(pagination).forEach((page) => {
        page.addEventListener("click", () => {
            Array.from(pagination).forEach((all) => {
                if (all.classList.contains("active")) {
                    all.classList.remove("active");
                }
            });

            page.classList.add("active");
        });
    });
}

// Funções responsáveis pela escolha dos dias da semana e paginação em calendario.html

function weekDays() {
    // Mudar o ACTIVE dos dias da semana
    let week = document.querySelectorAll(".week-days li");

    Array.from(week).forEach((day) => {
        day.addEventListener("click", () => {
            Array.from(week).forEach((all) => {
                if (all.classList.contains("active")) {
                    all.classList.remove("active");
                }
            });

            day.classList.add("active");
        });
    });

    // Mudar o ACTIVE dos botões de paginação

    let pagination = document.querySelectorAll(".pagination li");

    Array.from(pagination).forEach((page) => {
        page.addEventListener("click", () => {
            Array.from(pagination).forEach((all) => {
                if (all.classList.contains("active")) {
                    all.classList.remove("active");
                }
            });

            page.classList.add("active");
        });
    });
}
// Função responsável por exibir a lista de episódios na página episódio.html
function epList() {
    // UL QUE RECEBERÁ OS LI CRIADOS NO LOOP
    let receptor = document.querySelector("#ep-receptor");
    episodios = episodios.reverse();
    episodios.forEach((episodio) => {
        if (episodio.active == true) {
            let article = `<li>
                                <a href="#" class="active">
                                    <span>${episodio.ep_num}</span>
                                    <div>
                                        <p>Episódio</p>
                                        <h3>${episodio.ep_title}</h3>
                                    </div>
                                </a>
                            </li>`;
            receptor.insertAdjacentHTML("beforeend", article);
        } else {
            let article = `<li>
                                <a href="#">
                                    <span>${episodio.ep_num}</span>
                                    <div>
                                        <p>Episódio</p>
                                        <h3>${episodio.ep_title}</h3>
                                    </div>
                                </a>
                            </li>`;
            receptor.insertAdjacentHTML("beforeend", article);
        }
    });

    epAtual(12);
    //Função que scrolla até o episódio atual
    function epAtual(index) {
        let container = document.querySelector(".ep-wrapper");
        let element = document.querySelector("#ep-receptor li a.active");
        let positionToScroll;

        if (index > 1) {
            positionToScroll = element.offsetHeight * (index - 1);
            container.scrollTo({
                top: positionToScroll,
                behavior: "smooth",
            });
        }
    }
}

function epList2() {
    let episodes = [
        {
            epNumber: 1,
            epTitle: "Reino Feiticeiro Ainz Ooal",
            thumbnail: "",
        },
        {
            epNumber: 2,
            epTitle: "Reino de Re-Estize",
            thumbnail: "images/2.jpeg",
        },
        {
            epNumber: 3,
            epTitle: "Império Baharuth",
            thumbnail: "images/3.jpeg",
        },
        {
            epNumber: 4,
            epTitle: "O governo da conspiração",
            thumbnail: "images/4.jpeg",
        },
        {
            epNumber: 5,
            epTitle: "A crise Iminente",
            thumbnail: "images/5.jpeg",
        },
        {
            epNumber: 6,
            epTitle: "Em busca do Reino dos Anões",
            thumbnail: "images/1.jpeg",
        },
        {
            epNumber: 7,
            epTitle: "Lorde Frost Dragon",
            thumbnail: "images/7.jpeg",
        },
        {
            epNumber: 8,
            epTitle: "Uma jogada inesperada",
            thumbnail: "images/8.jpeg",
        },
        {
            epNumber: 9,
            epTitle: "Contagem regressiva para a extinção",
            thumbnail: "images/9.jpeg",
        },
        {
            epNumber: 10,
            epTitle: "O último rei",
            thumbnail: "images/10.jpeg",
        },
        {
            epNumber: 11,
            epTitle: "Armadilhas bem preparadas",
            thumbnail: "images/11.jpeg",
        },
        {
            epNumber: 12,
            epTitle: "Invasão da capital real",
            thumbnail: "images/12.jpeg",
        },
        {
            epNumber: 13,
            epTitle: "A bruxa do reino extinto",
            thumbnail: "images/13.jpeg",
        },
    ];

    // images/ep-no-thumb.png

    let receptor = document.querySelector(".episodios");

    for (let x = 0; x < episodes.length; x++) {
        let appendEP = document.createElement("a");
        appendEP.setAttribute("href", "episodio.html");
        let img = episodes[x].thumbnail;
        if (img == "") {
            img = "images/ep-no-thumb.png";
        }

        appendEP.innerHTML = `
        <div class="episodio">
            <img id="ep-thumb" src="${img}" alt="nopic">
            <div>
                <h3>Episódio ${episodes[x].epNumber}</h3>
                <p>${episodes[x].epTitle}</p>
                <p><strong>Overlord IV</strong></p>
            </div>
            <img id="ep-play-btn" src="images/bi_play-btn-fill.svg" alt=">">
        </div>
        `;
        receptor.append(appendEP);
    }
}
