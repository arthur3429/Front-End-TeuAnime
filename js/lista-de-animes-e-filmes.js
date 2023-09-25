// Simulaçõ de uma response
let listaDeAnimes = [
    {
        title: "Boku no Hero Academia",
        year: 2015,
        thumbnail: "images/boku-no-hero.jpe",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Overlord IV",
        year: 2016,
        thumbnail: "images/overllord.jpeg",
        category: "Ação",
        rating: "8.4",
    },
    {
        title: "Chainsaw Man",
        year: 2021,
        thumbnail: "images/chainsaw.jpe",
        category: "Ação",
        rating: "8.7",
    },
    {
        title: "Aharen-san wa Hakarenai!",
        year: 2023,
        thumbnail: "images/aharen-san wa hakarenai.png",
        category: "Escolar",
        rating: "8.1",
    },
    {
        title: "Kono Subarashii Sekai ni Shukufuku o!",
        year: 2014,
        thumbnail: "images/konosuba.jpeg",
        category: "Comédia",
        rating: "9.9",
    },
    {
        title: "Sword Art Online: Alicization",
        year: 2013,
        thumbnail: "images/sao alicization.jpe",
        category: "Sci-Fi",
        rating: "8.4",
    },
    {
        title: "Tate no Yuusha no Nariagari",
        year: 2021,
        thumbnail: "images/shield-hero.jpe",
        category: "Aventura",
        rating: "8.4",
    },
    {
        title: "Demon Slayer",
        year: 2020,
        thumbnail: "images/kimetsu.jpe",
        category: "Djabo",
        rating: "8.4",
    },
    {
        title: "Goblin Slayer",
        year: 2018,
        thumbnail: "images/goblin-slayer.jpeg",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Jujutsu Kaisen",
        year: 2022,
        thumbnail: "images/jujustsu.jpe",
        category: "Aventura",
        rating: "8.1",
    },
    {
        title: "Boku no Hero Academia",
        year: 2015,
        thumbnail: "images/boku-no-hero.jpe",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Overlord IV",
        year: 2016,
        thumbnail: "images/overllord.jpeg",
        category: "Ação",
        rating: "8.4",
    },
    {
        title: "Chainsaw Man",
        year: 2021,
        thumbnail: "images/chainsaw.jpe",
        category: "Ação",
        rating: "8.7",
    },
    {
        title: "Aharen-san wa Hakarenai!",
        year: 2023,
        thumbnail: "images/aharen-san wa hakarenai.png",
        category: "Escolar",
        rating: "8.1",
    },
    {
        title: "Kono Subarashii Sekai ni Shukufuku o!",
        year: 2014,
        thumbnail: "images/konosuba.jpeg",
        category: "Comédia",
        rating: "9.9",
    },
    {
        title: "Sword Art Online: Alicization",
        year: 2013,
        thumbnail: "images/sao alicization.jpe",
        category: "Sci-Fi",
        rating: "8.4",
    },
    {
        title: "Tate no Yuusha no Nariagari",
        year: 2021,
        thumbnail: "images/shield-hero.jpe",
        category: "Aventura",
        rating: "8.4",
    },
    {
        title: "Demon Slayer",
        year: 2020,
        thumbnail: "images/kimetsu.jpe",
        category: "Djabo",
        rating: "8.4",
    },
    {
        title: "Goblin Slayer",
        year: 2018,
        thumbnail: "images/goblin-slayer.jpeg",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Jujutsu Kaisen",
        year: 2022,
        thumbnail: "images/jujustsu.jpe",
        category: "Aventura",
        rating: "8.1",
    },
    {
        title: "Boku no Hero Academia",
        year: 2015,
        thumbnail: "images/boku-no-hero.jpe",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Overlord IV",
        year: 2016,
        thumbnail: "images/overllord.jpeg",
        category: "Ação",
        rating: "8.4",
    },
    {
        title: "Chainsaw Man",
        year: 2021,
        thumbnail: "images/chainsaw.jpe",
        category: "Ação",
        rating: "8.7",
    },
    {
        title: "Aharen-san wa Hakarenai!",
        year: 2023,
        thumbnail: "images/aharen-san wa hakarenai.png",
        category: "Escolar",
        rating: "8.1",
    },
    {
        title: "Kono Subarashii Sekai ni Shukufuku o!",
        year: 2014,
        thumbnail: "images/konosuba.jpeg",
        category: "Comédia",
        rating: "9.9",
    },
    {
        title: "Sword Art Online: Alicization",
        year: 2013,
        thumbnail: "images/sao alicization.jpe",
        category: "Sci-Fi",
        rating: "8.4",
    },
    {
        title: "Tate no Yuusha no Nariagari",
        year: 2021,
        thumbnail: "images/shield-hero.jpe",
        category: "Aventura",
        rating: "8.4",
    },
    {
        title: "Demon Slayer",
        year: 2020,
        thumbnail: "images/kimetsu.jpe",
        category: "Djabo",
        rating: "8.4",
    },
    {
        title: "Goblin Slayer",
        year: 2018,
        thumbnail: "images/goblin-slayer.jpeg",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Jujutsu Kaisen",
        year: 2022,
        thumbnail: "images/jujustsu.jpe",
        category: "Aventura",
        rating: "8.1",
    },
    {
        title: "Boku no Hero Academia",
        year: 2015,
        thumbnail: "images/boku-no-hero.jpe",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Overlord IV",
        year: 2016,
        thumbnail: "images/overllord.jpeg",
        category: "Ação",
        rating: "8.4",
    },
    {
        title: "Chainsaw Man",
        year: 2021,
        thumbnail: "images/chainsaw.jpe",
        category: "Ação",
        rating: "8.7",
    },
    {
        title: "Aharen-san wa Hakarenai!",
        year: 2023,
        thumbnail: "images/aharen-san wa hakarenai.png",
        category: "Escolar",
        rating: "8.1",
    },
    {
        title: "Kono Subarashii Sekai ni Shukufuku o!",
        year: 2014,
        thumbnail: "images/konosuba.jpeg",
        category: "Comédia",
        rating: "9.9",
    },
    {
        title: "Sword Art Online: Alicization",
        year: 2013,
        thumbnail: "images/sao alicization.jpe",
        category: "Sci-Fi",
        rating: "8.4",
    },
    {
        title: "Tate no Yuusha no Nariagari",
        year: 2021,
        thumbnail: "images/shield-hero.jpe",
        category: "Aventura",
        rating: "8.4",
    },
    {
        title: "Demon Slayer",
        year: 2020,
        thumbnail: "images/kimetsu.jpe",
        category: "Djabo",
        rating: "8.4",
    },
    {
        title: "Goblin Slayer",
        year: 2018,
        thumbnail: "images/goblin-slayer.jpeg",
        category: "Aventura",
        rating: "8.2",
    },
    {
        title: "Jujutsu Kaisen",
        year: 2022,
        thumbnail: "images/jujustsu.jpe",
        category: "Aventura",
        rating: "8.1",
    },
];
document.addEventListener("DOMContentLoaded", function () {
    organizaAnimes(listaDeAnimes);
});

// Função que recebe todos os animes postados e trata de criar a paginação, ativar os filtros e exibir tudo no front
function organizaAnimes(response) {
    let data = response;
    //A primeira execução não é dinâmica, pega o filtro que já vem com class active escrito no HTML e executa
    jQuery(document).ready(function ($) {
        filter($(".filter-type li.active").html(), $(".abc li.active").html());

        $(".filter-type li").on("click", function (e) {
            $(".filter-type li").removeClass("active");
            $(this).addClass("active");

            filter($(this).html(), $(".abc li.active").html());
        });

        $(".abc li").on("click", function (e) {
            $(".abc li").removeClass("active");
            $(this).addClass("active");

            filter($(".filter-type li.active").html(), $(this).html());
        });
    });
    //Verifica qual é o filtro e organiza o array geral depois o divide em páginas
    function filter(filterType, filterCharacter) {
        let allPages = [];
        let singlePage = [];
        let postsPerPage = 14;

        if (filterCharacter != "ALL") {
            let firstLetter;
            let partialArray = [];

            data.forEach((anime) => {
                firstLetter = anime.title;
                firstLetter = firstLetter.toUpperCase();
                firstLetter = firstLetter.split("");
                //Filter Character recebe um valor que é uma das letras escolhidas para filtrar EX: A e verifica se a primeira letra do anime é igual a letra filtrada, então adiciona a um array parcial que será tratado e exibido pro usuario
                if (firstLetter[0] == filterCharacter) {
                    partialArray.push(anime);
                }
            });
            //Ok, eu sei que podia ter feito com switch case mas era 2 da manhã quando isso aqui deu certo e eu não quis mexer mais
            //A sequencia de ifs verifica qual foi o filtro escolhido e reordena o array maior de acordo com ele
            if (filterType == "Ordem Alfabética") {
                partialArray.sort((a, b) => {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();

                    if (titleA < titleB) {
                        return -1;
                    }
                    if (titleA > titleB) {
                        return 1;
                    }

                    return 0;
                });
            } else if (filterType == "Mais Recentes") {
                partialArray.sort((a, b) => {
                    const yearA = Number(a.year);
                    const yearB = Number(b.year);

                    if (yearA > yearB) {
                        return -1;
                    }
                    if (yearA < yearB) {
                        return 1;
                    }

                    return 0;
                });
            } else if (filterType == "Mais Antigos") {
                partialArray.sort((a, b) => {
                    const yearA = a.year !== "" ? Number(a.year) : 9999;
                    const yearB = b.year !== "" ? Number(b.year) : 9999;

                    if (yearA < yearB) {
                        return -1;
                    }
                    if (yearA > yearB) {
                        return 1;
                    }

                    return 0;
                });
            } else if (filterType == "Melhor Avaliados") {
                partialArray.sort((a, b) => {
                    const ratingA = a.rating !== "" ? Number(a.rating) : 1;
                    const ratingB = b.rating !== "" ? Number(b.rating) : 1;

                    if (ratingA > ratingB) {
                        return -1;
                    }
                    if (ratingA < ratingB) {
                        return 1;
                    }

                    return 0;
                });
            }
            //O loop abaixo é o que divide o array maior em páginas, salvando o número de articles em cada página de acordo com o valor inserido na váriavel postsPerPage no começo da função
            for (let i = 0; i < partialArray.length; i++) {
                if (singlePage.length < postsPerPage) {
                    singlePage.push(partialArray[i]);
                } else if (singlePage.length == postsPerPage) {
                    allPages.push(singlePage);
                    singlePage = [];
                    singlePage.push(partialArray[i]);
                }

                if (i + 1 == partialArray.length) {
                    allPages.push(singlePage);
                }
            }
        }
        //Com filterCharacter sendo ALL, eu trato o Array maior apenas baseado no filterType escolhido
        if (filterCharacter === "ALL") {
            //A sequencia de ifs verifica qual foi o filtro escolhido e reordena o array maior de acordo com ele
            if (filterType == "Ordem Alfabética") {
                data.sort((a, b) => {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();

                    if (titleA < titleB) {
                        return -1;
                    }
                    if (titleA > titleB) {
                        return 1;
                    }

                    return 0;
                });
            } else if (filterType == "Mais Recentes") {
                data.sort((a, b) => {
                    const yearA = Number(a.year);
                    const yearB = Number(b.year);

                    if (yearA > yearB) {
                        return -1;
                    }
                    if (yearA < yearB) {
                        return 1;
                    }

                    return 0;
                });
            } else if (filterType == "Mais Antigos") {
                data.sort((a, b) => {
                    const yearA = a.year !== "" ? Number(a.year) : 9999;
                    const yearB = b.year !== "" ? Number(b.year) : 9999;

                    if (yearA < yearB) {
                        return -1;
                    }
                    if (yearA > yearB) {
                        return 1;
                    }

                    return 0;
                });
            } else if (filterType == "Melhor Avaliados") {
                data.sort((a, b) => {
                    const ratingA = a.rating !== "" ? Number(a.rating) : 1;
                    const ratingB = b.rating !== "" ? Number(b.rating) : 1;

                    if (ratingA > ratingB) {
                        return -1;
                    }
                    if (ratingA < ratingB) {
                        return 1;
                    }

                    return 0;
                });
            }
            //O loop abaixo é o que divide o array maior em páginas, salvando o número de articles em cada página de acordo com o valor inserido na váriavel postsPerPage no começo da função
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i]);
                if (singlePage.length < postsPerPage) {
                    singlePage.push(data[i]);
                } else if (singlePage.length == postsPerPage) {
                    allPages.push(singlePage);
                    singlePage = [];
                    singlePage.push(data[i]);
                }

                if (i + 1 == data.length) {
                    allPages.push(singlePage);
                }
            }
        }

        exibeNoFront(allPages);
    }
    //Essa função é responsável por exibir os animes já filtrados e tratados no front e também cuida da paginação
    function exibeNoFront(allPages) {
        let resultado = document.querySelector(".filter-results");
        let pagination = document.querySelector(".pagination");
        let numResultados = document.querySelector("#filter-result");

        // resultado.style.opacity = 0
        resultado.innerHTML = "";

        allPages[0].forEach((anime, index) => {
            let rating = anime.rating;
            if (!anime.rating) {
                rating = "??";
            }

            let articleContent = `
                <article class="article-fade-in">
                    <div class="poster">
                        <img src="${anime.thumbnail}" alt="${
                "Capa do anime " + anime.title
            }">
                        <a href="/temporadas.html">
                            <div class="poster-overlay">
                                <div class="play-btn">
                                    <!-- PLAY ICON -->
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" fill="rgba(255,255,255,1)"/></svg>
                                </div>
                                <div class="rating">
                                    <!-- STAR ICON -->
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(255,255,255,1)"/></svg>
                                    ${rating}/10
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="data">
                        <h3>${anime.title}</h3>
                    </div>
                </article>
            `;

            // setTimeout(() => {
            resultado.insertAdjacentHTML("beforeend", articleContent);

            // }, 175 * index)
        });

        pagination.innerHTML = "";

        allPages.forEach((pagina, index) => {
            if (index == 0 && allPages.length > 1) {
                pagination.innerHTML += ` <li data-page="0" id="prevPageBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" fill="rgba(255,255,255,1)"></path></svg></li>`;
            }

            if (allPages.length > 1) {
                if (index == 0) {
                    pagination.innerHTML += `<li class="active"data-page="${index}">${
                        index + 1
                    }</li>`;
                } else {
                    pagination.innerHTML += `<li data-page="${index}">${
                        index + 1
                    }</li>`;
                }
            }

            if (index + 1 == allPages.length && allPages.length > 1) {
                pagination.innerHTML += `<li data-page="1" id="nextPageBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="rgba(255,255,255,1)"></path></svg></li>`;
            }
        });

        if (allPages.length > 1) {
            document
                .querySelectorAll(".pagination li")
                .forEach((element, indice) => {
                    element.addEventListener("click", (e) => {
                        let paginadorAtual = document.querySelector(
                            ".pagination li.active"
                        );
                        paginadorAtual.classList.remove("active");

                        let paginaAtual = element.getAttribute("data-page");
                        if (paginaAtual > 0) {
                            document
                                .querySelector("#prevPageBtn")
                                .setAttribute("data-page", paginaAtual - 1);
                        }
                        if (Number(paginaAtual) + 1 < allPages.length) {
                            document
                                .querySelector("#nextPageBtn")
                                .setAttribute(
                                    "data-page",
                                    Number(paginaAtual) + 1
                                );
                        }

                        element.classList.add("active");

                        resultado.innerHTML = "";
                        allPages[paginaAtual].forEach((anime, index) => {
                            // console.log(anime);
                            let rating = anime.rating;
                            if (!anime.rating) {
                                rating = "??";
                            }

                            let articleContent = `
                        <article class="article-fade-in">
                            <div class="poster">
                                <img src="${anime.thumbnail}" alt="${
                                "Capa do anime " + anime.title
                            }">
                                <a href="/temporadas.html">
                                    <div class="poster-overlay">
                                        <div class="play-btn">
                                            <!-- PLAY ICON -->
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" fill="rgba(255,255,255,1)"/></svg>
                                        </div>
                                        <div class="rating">
                                            <!-- STAR ICON -->
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(255,255,255,1)"/></svg>
                                            ${rating}/10
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="data">
                                <h3>${anime.title}</h3>
                            </div>
                        </article>
                        `;

                            // setTimeout(() => {
                            resultado.insertAdjacentHTML(
                                "beforeend",
                                articleContent
                            );

                            // }, 175 * index)
                        });

                        setTimeout(() => {
                            let totalPosts = document.querySelectorAll(
                                ".filter-results article"
                            ).length;
                            numResultados.innerHTML = "";

                            if (totalPosts == 0) {
                                numResultados.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M11 4H21V6H11V4ZM11 8H17V10H11V8ZM11 14H21V16H11V14ZM11 18H17V20H11V18ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z" fill="rgba(255,255,255,1)"></path></svg> Nenhum Resultado`;
                            } else if (totalPosts == 1) {
                                numResultados.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M11 4H21V6H11V4ZM11 8H17V10H11V8ZM11 14H21V16H11V14ZM11 18H17V20H11V18ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z" fill="rgba(255,255,255,1)"></path></svg> 1 Resultado`;
                            } else if (totalPosts > 1) {
                                numResultados.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M11 4H21V6H11V4ZM11 8H17V10H11V8ZM11 14H21V16H11V14ZM11 18H17V20H11V18ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z" fill="rgba(255,255,255,1)"></path></svg> ${totalPosts} Resultados`;
                            }
                        }, 3500);
                    });
                });
        }

        setTimeout(() => {
            let totalPosts = document.querySelectorAll(
                ".filter-results article"
            ).length;
            numResultados.innerHTML = "";

            if (totalPosts == 0) {
                numResultados.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M11 4H21V6H11V4ZM11 8H17V10H11V8ZM11 14H21V16H11V14ZM11 18H17V20H11V18ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z" fill="rgba(255,255,255,1)"></path></svg> Nenhum Resultado`;
            } else if (totalPosts == 1) {
                numResultados.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M11 4H21V6H11V4ZM11 8H17V10H11V8ZM11 14H21V16H11V14ZM11 18H17V20H11V18ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z" fill="rgba(255,255,255,1)"></path></svg> 1 Resultado`;
            } else if (totalPosts > 1) {
                numResultados.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M11 4H21V6H11V4ZM11 8H17V10H11V8ZM11 14H21V16H11V14ZM11 18H17V20H11V18ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z" fill="rgba(255,255,255,1)"></path></svg> ${totalPosts} Resultados`;
            }
        }, 500);
    }
}
