const linhas = document.querySelectorAll(".linha");
const camadas = ["K", "L", "M", "N", "O", "P", "Q"];
const familias = ["1A", "2A", "3B", "4B", "5B", "6B", "7B", "8B","8B", "8B", "1B", "2B", "3A", "4A",  "5A",
"6A", "7A", "0"];
const tabelaPeriodica = [
    { nome: "Hidrogênio", simbolo: "H", atomico: 1, massa: 1.008, imagem: "./imgs/hydrogen.jpg" },
    { nome: "Hélio", simbolo: "He", atomico: 2, massa: 4.0026, imagem: "./imgs/helio.jpg" },
    { nome: "Lítio", simbolo: "Li", atomico: 3, massa: 6.94, imagem: "./imgs/litio.jpg" },
    { nome: "Berílio", simbolo: "Be", atomico: 4, massa: 9.0122, imagem: "./imgs/berilio.jpg" },
    { nome: "Boro", simbolo: "B", atomico: 5, massa: 10.81, imagem: "./imgs/boro.jpg" },
    { nome: "Carbono", simbolo: "C", atomico: 6, massa: 12.011, imagem: "./imgs/carbono.jpg" },
    { nome: "Nitrogênio", simbolo: "N", atomico: 7, massa: 14.007, imagem: "./imgs/nitrogen.jpg" },
    { nome: "Oxigênio", simbolo: "O", atomico: 8, massa: 15.999, imagem: "./imgs/oxigen.jpg" },
    { nome: "Flúor", simbolo: "F", atomico: 9, massa: 18.998, imagem: "./imgs/fluor.jpg" },
    { nome: "Neônio", simbolo: "Ne", atomico: 10, massa: 20.18, imagem: "./imgs/neonio.jpg" },
    { nome: "Sódio", simbolo: "Na", atomico: 11, massa: 22.99, imagem: "./imgs/sodio.jpg" },
    { nome: "Magnésio", simbolo: "Mg", atomico: 12, massa: 24.305, imagem: "./imgs/magnesio.jpg" },
    { nome: "Alumínio", simbolo: "Al", atomico: 13, massa: 26.982, imagem: "./imgs/aluminio.jpg" },
    { nome: "Silício", simbolo: "Si", atomico: 14, massa: 28.085, imagem: "./imgs/silicio.jpg" },
    { nome: "Fósforo", simbolo: "P", atomico: 15, massa: 30.974, imagem: "./imgs/fosforo.jpg" },
    { nome: "Enxofre", simbolo: "S", atomico: 16, massa: 32.06, imagem: "./imgs/enxofre.jpg" },
    { nome: "Cloro", simbolo: "Cl", atomico: 17, massa: 35.45, imagem: "./imgs/cloro.jpg" },
    { nome: "Argônio", simbolo: "Ar", atomico: 18, massa: 39.948, imagem: "./imgs/argonio.jpg" },
    { nome: "Potássio", simbolo: "K", atomico: 19, massa: 39.098, imagem: "./imgs/potassium.jpg" },
    { nome: "Cálcio", simbolo: "Ca", atomico: 20, massa: 40.08, imagem: "./imgs/calcio.jpg" },
    { nome: "Escândio", simbolo: "Sc", atomico: 21, massa: 44.956, imagem: "./imgs/escandio.jpg" },
    { nome: "Titânio", simbolo: "Ti", atomico: 22, massa: 47.867, imagem: "./imgs/titanio.jpg" },
    { nome: "Vanádio", simbolo: "V", atomico: 23, massa: 50.942, imagem: "./imgs/vanadio.jpeg" },
    { nome: "Cromo", simbolo: "Cr", atomico: 24, massa: 51.996, imagem: "./imgs/cromo.jpg" },
    { nome: "Manganês", simbolo: "Mn", atomico: 25, massa: 54.938, imagem: "./imgs/manganes.jpg" },
    { nome: "Ferro", simbolo: "Fe", atomico: 26, massa: 55.845, imagem: "./imgs/iron.jpg" },
    { nome: "Cobalto", simbolo: "Co", atomico: 27, massa: 58.933, imagem: "./imgs/cobalto.jpg" },
    { nome: "Níquel", simbolo: "Ni", atomico: 28, massa: 58.693, imagem: "./imgs/niquel.jpg" },
    { nome: "Cobre", simbolo: "Cu", atomico: 29, massa: 63.546, imagem: "./imgs/cobre.jpg" },
    { nome: "Zinco", simbolo: "Zn", atomico: 30, massa: 65.38, imagem: "./imgs/zinco.jpg" },
    { nome: "Gálio", simbolo: "Ga", atomico: 31, massa: 69.723, imagem: "./imgs/galio.jpg" },
    { nome: "Germânio", simbolo: "Ge", atomico: 32, massa: 72.63, imagem: "./imgs/germanio.jpg" },
    { nome: "Arsênio", simbolo: "As", atomico: 33, massa: 74.922, imagem: "./imgs/arsenio.jpg" },
    { nome: "Selênio", simbolo: "Se", atomico: 34, massa: 78.971, imagem: "./imgs/selenio.jpg" },
    { nome: "Bromo", simbolo: "Br", atomico: 35, massa: 79.904, imagem: "./imgs/bromo.jpg" },
    { nome: "Criptônio", simbolo: "Kr", atomico: 36, massa: 83.798, imagem: "./imgs/criptonio.jpg" },
    { nome: "Rubídio", simbolo: "Rb", atomico: 37, massa: 85.468, imagem: "./imgs/rubidio.jpg" },
    { nome: "Estrôncio", simbolo: "Sr", atomico: 38, massa: 87.62, imagem: "./imgs/estroncio.jpg" },
    { nome: "Ítrio", simbolo: "Y", atomico: 39, massa: 88.906, imagem: "./imgs/itrio.jpg" },
    { nome: "Zircônio", simbolo: "Zr", atomico: 40, massa: 91.224, imagem: "./imgs/zirconio.jpg" },
    { nome: "Nióbio", simbolo: "Nb", atomico: 41, massa: 92.906, imagem: "./imgs/niobio.jpg" },
    { nome: "Molibdênio", simbolo: "Mo", atomico: 42, massa: 95.95, imagem: "./imgs/molibdenio.jpg" },
    { nome: "Tecnécio", simbolo: "Tc", atomico: 43, massa: 98, imagem: "./imgs/tecnecio.jpg" },
    { nome: "Rutênio", simbolo: "Ru", atomico: 44, massa: 101.07, imagem: "./imgs/rutenio.jpg" },
    { nome: "Ródio", simbolo: "Rh", atomico: 45, massa: 102.91, imagem: "./imgs/rodio.jpg" },
    { nome: "Paládio", simbolo: "Pd", atomico: 46, massa: 106.42, imagem: "./imgs/paladio.jpg" },
    { nome: "Prata", simbolo: "Ag", atomico: 47, massa: 107.87, imagem: "./imgs/prata.jpg" },
    { nome: "Cádmio", simbolo: "Cd", atomico: 48, massa: 112.41, imagem: "./imgs/cadmio.jpg" },
    { nome: "Índio", simbolo: "In", atomico: 49, massa: 114.82, imagem: "./imgs/indio.jpg" },
    { nome: "Estanho", simbolo: "Sn", atomico: 50, massa: 118.71, imagem: "./imgs/estanho.jpg" },
    { nome: "Antimônio", simbolo: "Sb", atomico: 51, massa: 121.76, imagem: "./imgs/antimonio.jpg" },
    { nome: "Telúrio", simbolo: "Te", atomico: 52, massa: 127.6, imagem: "./imgs/telurio.jpg" },
    { nome: "Iodo", simbolo: "I", atomico: 53, massa: 126.9, imagem: "./imgs/iodo.jpg" },
    { nome: "Xenônio", simbolo: "Xe", atomico: 54, massa: 131.29, imagem: "./imgs/xenonio.jpg" },
    { nome: "Césio", simbolo: "Cs", atomico: 55, massa: 132.91, imagem: "./imgs/cesio.jpg" },
    { nome: "Bário", simbolo: "Ba", atomico: 56, massa: 137.33, imagem: "./imgs/bario.jpg" },
    { nome: "Lantânio", simbolo: "La", atomico: 57, massa: 138.91, imagem: "./imgs/radioative.jpg" },
    { nome: "Cério", simbolo: "Ce", atomico: 58, massa: 140.12, imagem: "./imgs/radioative.jpg" },
    { nome: "Praseodímio", simbolo: "Pr", atomico: 59, massa: 140.91, imagem: "./imgs/radioative.jpg" },
    { nome: "Neodímio", simbolo: "Nd", atomico: 60, massa: 144.24, imagem: "./imgs/radioative.jpg" },
    { nome: "Promécio", simbolo: "Pm", atomico: 61, massa: 145, imagem: "./imgs/radioative.jpg" },
    { nome: "Samário", simbolo: "Sm", atomico: 62, massa: 150.36, imagem: "./imgs/radioative.jpg" },
    { nome: "Európio", simbolo: "Eu", atomico: 63, massa: 152, imagem: "./imgs/radioative.jpg" },
    { nome: "Gadolínio", simbolo: "Gd", atomico: 64, massa: 157.25, imagem: "./imgs/radioative.jpg" },
    { nome: "Térbio", simbolo: "Tb", atomico: 65, massa: 158.93, imagem: "./imgs/radioative.jpg" },
    { nome: "Disprósio", simbolo: "Dy", atomico: 66, massa: 162.5, imagem: "./imgs/radioative.jpg" },
    { nome: "Hólmio", simbolo: "Ho", atomico: 67, massa: 164.93, imagem: "./imgs/radioative.jpg" },
    { nome: "Érbio", simbolo: "Er", atomico: 68, massa: 167.26, imagem: "./imgs/radioative.jpg" },
    { nome: "Túlio", simbolo: "Tm", atomico: 69, massa: 168.93, imagem: "./imgs/radioative.jpg" },
    { nome: "Itérbio", simbolo: "Yb", atomico: 70, massa: 173.05, imagem: "./imgs/radioative.jpg" },
    { nome: "Lutécio", simbolo: "Lu", atomico: 71, massa: 174.97, imagem: "./imgs/radioative.jpg" },
    { nome: "Háfnio", simbolo: "Hf", atomico: 72, massa: 178.49, imagem: "./imgs/hafnio.jpg" },
    { nome: "Tântalo", simbolo: "Ta", atomico: 73, massa: 180.95, imagem: "./imgs/tantalo.jpg" },
    { nome: "Tungstênio", simbolo: "W", atomico: 74, massa: 183.84, imagem: "./imgs/tungstenio.jpg" },
    { nome: "Rênio", simbolo: "Re", atomico: 75, massa: 186.21, imagem: "./imgs/renio.jpg" },
    { nome: "Ósmio", simbolo: "Os", atomico: 76, massa: 190.23, imagem: "./imgs/osmio.jpg" },
    { nome: "Irídio", simbolo: "Ir", atomico: 77, massa: 192.22, imagem: "./imgs/iridion.jpg" },
    { nome: "Platina", simbolo: "Pt", atomico: 78, massa: 195.08, imagem: "./imgs/platina.jpg" },
    { nome: "Ouro", simbolo: "Au", atomico: 79, massa: 196.97, imagem: "./imgs/ouro.jpg" },
    { nome: "Mercúrio", simbolo: "Hg", atomico: 80, massa: 200.59, imagem: "./imgs/mercurio.jpg" },
    { nome: "Tálio", simbolo: "Tl", atomico: 81, massa: 204.38, imagem: "./imgs/talio.jpg" },
    { nome: "Chumbo", simbolo: "Pb", atomico: 82, massa: 207.2, imagem: "./imgs/chumbo.jpg" },
    { nome: "Bismuto", simbolo: "Bi", atomico: 83, massa: 208.98, imagem: "./imgs/bismuto.jpg" },
    { nome: "Polônio", simbolo: "Po", atomico: 84, massa: 209, imagem: "./imgs/polonio.jpg" },
    { nome: "Astato", simbolo: "At", atomico: 85, massa: 210, imagem: "./imgs/astato.jpg" },
    { nome: "Radônio", simbolo: "Rn", atomico: 86, massa: 222, imagem: "./imgs/radioative.jpg" },
    { nome: "Frâncio", simbolo: "Fr", atomico: 87, massa: 223, imagem: "./imgs/francio.jpg" },
    { nome: "Rádio", simbolo: "Ra", atomico: 88, massa: 226, imagem: "./imgs/radio.jpg" },
    { nome: "Actínio", simbolo: "Ac", atomico: 89, massa: 227, imagem: "./imgs/radioative.jpg" },
    { nome: "Tório", simbolo: "Th", atomico: 90, massa: 232.04, imagem: "./imgs/radioative.jpg" },
    { nome: "Protactínio", simbolo: "Pa", atomico: 91, massa: 231.04, imagem: "./imgs/radioative.jpg" },
    { nome: "Urânio", simbolo: "U", atomico: 92, massa: 238.03, imagem: "./imgs/radioative.jpg" },
    { nome: "Netúnio", simbolo: "Np", atomico: 93, massa: 237, imagem: "./imgs/radioative.jpg" },
    { nome: "Plutônio", simbolo: "Pu", atomico: 94, massa: 244, imagem: "./imgs/radioative.jpg" },
    { nome: "Amerício", simbolo: "Am", atomico: 95, massa: 243, imagem: "./imgs/americio.jpg" },
    { nome: "Cúrio", simbolo: "Cm", atomico: 96, massa: 247, imagem: "./imgs/radioative.jpg" },
    { nome: "Berquélio", simbolo: "Bk", atomico: 97, massa: 247, imagem: "./imgs/radioative.jpg" },
    { nome: "Califórnio", simbolo: "Cf", atomico: 98, massa: 251, imagem: "./imgs/radioative.jpg" },
    { nome: "Einstênio", simbolo: "Es", atomico: 99, massa: 252, imagem: "./imgs/radioative.jpg" },
    { nome: "Férmio", simbolo: "Fm", atomico: 100, massa: 257, imagem: "./imgs/radioative.jpg" },
    { nome: "Mendelévio", simbolo: "Md", atomico: 101, massa: 258, imagem: "./imgs/radioative.jpg" },
    { nome: "Nobélio", simbolo: "No", atomico: 102, massa: 259, imagem: "./imgs/radioative.jpg" },
    { nome: "Laurêncio", simbolo: "Lr", atomico: 103, massa: 266, imagem: "./imgs/radioative.jpg" },
    { nome: "Rutherfórdio", simbolo: "Rf", atomico: 104, massa: 267, imagem: "./imgs/radioative.jpg" },
    { nome: "Dúbnio", simbolo: "Db", atomico: 105, massa: 270, imagem: "./imgs/radioative.jpg" },
    { nome: "Seabórgio", simbolo: "Sg", atomico: 106, massa: 271, imagem: "./imgs/radioative.jpg" },
    { nome: "Bóhrio", simbolo: "Bh", atomico: 107, massa: 270, imagem: "./imgs/radioative.jpg" },
    { nome: "Hássio", simbolo: "Hs", atomico: 108, massa: 277, imagem: "./imgs/radioative.jpg" },
    { nome: "Meitnério", simbolo: "Mt", atomico: 109, massa: 276, imagem: "./imgs/radioative.jpg" },
    { nome: "Darmstádio", simbolo: "Ds", atomico: 110, massa: 281, imagem: "./imgs/radioative.jpg" },
    { nome: "Roentgênio", simbolo: "Rg", atomico: 111, massa: 280, imagem: "./imgs/radioative.jpg" },
    { nome: "Copernício", simbolo: "Cn", atomico: 112, massa: 285, imagem: "./imgs/radioative.jpg" },
    { nome: "Nihônio", simbolo: "Nh", atomico: 113, massa: 284, imagem: "./imgs/radioative.jpg" },
    { nome: "Fleróvio", simbolo: "Fl", atomico: 114, massa: 289, imagem: "./imgs/radioative.jpg" },
    { nome: "Moscóvio", simbolo: "Mc", atomico: 115, massa: 288, imagem: "./imgs/radioative.jpg" },
    { nome: "Livermório", simbolo: "Lv", atomico: 116, massa: 293, imagem: "./imgs/radioative.jpg" },
    { nome: "Tennesso", simbolo: "Ts", atomico: 117, massa: 294, imagem: "./imgs/radioative.jpg" },
    { nome: "Oganessônio", simbolo: "Og", atomico: 118, massa: 294, imagem: "./imgs/radioative.jpg" }
];

const distribuicao = [[1, { eletron: 2 }], [2, { eletron: 2 }], [2, { eletron: 6 }],
[3, { eletron: 2 }], [3, { eletron: 6 }], [4, { eletron: 2 }], [3, { eletron: 10 }], [4, { eletron: 6 }], [5, { eletron: 2 }],
[4, { eletron: 10 }], [5, { eletron: 6 }], [6, { eletron: 2 }], [4, { eletron: 14 }], [5, { eletron: 10 }], [6, { eletron: 6 }],
[7, { eletron: 2 }], [5, { eletron: 14 }], [6, { eletron: 10 }], [7, { eletron: 6 }]]


/*
    A função gerarTabela vai gerar uma tabela 7x18 utilizando laços de repetição aninhados (forEach e for)
*/

function gerarTabela() {
    linhas.forEach(row => {
        for (let i = 0; i < 18; i++) {
            let celula = document.createElement("div");
            celula.classList.add("celula");
            row.appendChild(celula);
        }
    })
    contagem(document.querySelectorAll(".celula"));
}
/*
    A função contagem vai atribuir a cada célula um número atômico, aquelas células cuja a classe é hdn (hidden) serão tornadas
    invisíveis e não incrementaram o cont
*/
function contagem(celulas) {
    let cont = 1;
    linhas.forEach((row, index) => {
        let celulas = row.querySelectorAll(".celula");
        if (index == 1 || index == 2) {
            let cells = Array.from(celulas).slice(2, -6);
            cells.forEach(c => {
                c.style.visibility = "hidden";
                c.classList.add("hdn");
            })
        }
    })
    celulas.forEach((cell, index) => {
        cell.setAttribute('data-index', index);
        if (index > 0 && index < 17) {
            cell.style.visibility = "hidden";
            cell.classList.add("hdn");
        }
        if (!cell.classList.contains("hdn")) {
            let atomic_number = document.createElement("span");
            atomic_number.classList.add("atomic-number");

            if (cont !== 57 && cont !== 89) {
                atomic_number.textContent = cont;
            } else {
                atomic_number.classList.add("group");
                if (cont == 57) {
                    atomic_number.textContent = "*";
                    cont = 71;
                } else {
                    atomic_number.textContent = "**";
                    cont = 103;
                }
            }
            cell.appendChild(atomic_number);
            cont++;
        }

    })

    colorir();

}
/*
    A função colorir vai iterar vetores correspondentes ao número atômico de diferentes elementos agrupados em grupos e
    atribuir às células uma classe que corresponde a uma cor específica
*/
function colorir() {
    const atomic_numbers = document.querySelectorAll(".atomic-number");
    const groups = document.querySelectorAll(".group");
    const naoMetais = [6, 1, 7, 8, 15, 16, 34];
    const alcalinoTerrosos = [4, 12, 20, 38, 56, 88];
    const alcalinos = [3, 11, 19, 37, 55, 87];
    const semimetais = [5, 14, 32, 33, 51, 52, 84];
    const halogenios = [9, 17, 35, 53, 85, 117];
    const outrosMetais = [13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116];
    const metaisTransicao = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 72, 73, 74, 75, 76, 77, 78, 79, 80, 104, 105, 106, 107, 108, 109, 110, 111, 112];
    const gasesNobres = [2, 10, 18, 36, 54, 86, 118];
    const elementos = [...naoMetais, ...alcalinoTerrosos, ...alcalinos, ...semimetais, ...halogenios, ...outrosMetais, ...metaisTransicao, ...gasesNobres];

    groups.forEach((n, index) => {
        if (index == 0) {
            n.parentNode.classList.add("lant")
        }
        if (index == 1) {
            n.parentNode.classList.add("act")
        }
        n.parentNode.classList.add("group");
    })

    atomic_numbers.forEach(n => {

        naoMetais.forEach(e => {
            if (n.textContent == e) {
                n.parentNode.classList.add("nao")
            }
        })
        semimetais.forEach(e => {
            if (n.textContent == e) {
                n.parentNode.classList.add("semi")
            }
        })
        outrosMetais.forEach(e => {
            if (n.textContent == e) {
                n.parentNode.classList.add("outros")

            }
        })
        gasesNobres.forEach(e => {
            if (n.textContent == e) {
                n.parentNode.classList.add("gases")
            }
        })
        halogenios.forEach(e => {
            if (n.textContent == e) {
                n.parentNode.classList.add("halogenios")
            }
        })
        alcalinoTerrosos.forEach(e => {
            if (n.textContent == e) {
                n.parentNode.classList.add("terrosos")
            }
        })
        alcalinos.forEach(e => {
            if (n.textContent == e) {
                n.parentNode.classList.add("alcalinos")
            }
        })
        metaisTransicao.forEach(e => {
            if (n.textContent == e) {
                n.parentNode.classList.add("transicao")
            }
        })

        elementos.forEach(e => {
            for (let index = 0; index < tabelaPeriodica.length; index++) {
                if (e == tabelaPeriodica[index].atomico) {
                    let simbolo = document.createElement("div");
                    simbolo.classList.add("simbolo");
                    simbolo.textContent = tabelaPeriodica[index].simbolo;
                    if (n.textContent == e) {
                        n.parentNode.appendChild(simbolo);
                    }
                }
            }
        })
    })
}
/*
    A função hover vai adicionar um evento (mouseenter) a cada célula que possua um elemento cuja a classe seja atomic-number
    e que não contenha a classe group, quando o mouse entrar na célula, na tabela de informações, o nome, a massa, o símbolo e o número
    atômico serão preenchidos de acordo com o elemento da célula que recebeu o evento
*/
function hover() {
    const elementos = document.querySelectorAll(".atomic-number:not(.group)");
    elementos.forEach(e => {
        let number = parseInt(e.textContent);
        e.parentNode.addEventListener("mouseenter", () => {
            tabelaPeriodica.forEach(el => {
                if (el.atomico == number) {
                    function getPosition(element) {
                        const parent = element.parentNode;
                        const children = Array.from(parent.children);
                        const index = children.indexOf(element);
                        if(element.classList.contains("lant") || element.classList.contains("act")){
                            return "";
                        }
                        return index;
                      }
                    let nome = document.querySelector(".tabela-nome");
                    let simbolo = document.querySelector(".tabela-simbolo");
                    let numero = document.querySelector(".tabela-numero");
                    let massa = document.querySelector(".tabela-massa");
                    let familia = document.querySelector(".tabela-familia");
                    let imagem = document.querySelector(".exemplo");
                    nome.textContent = el.nome;
                    simbolo.textContent = el.simbolo;
                    numero.textContent = el.atomico;
                    massa.textContent = el.massa;
                    familia.textContent = familias[getPosition(e.parentNode)];
                    imagem.setAttribute("src", el.imagem);
                    if (nome.classList.length > 1) {
                        nome.classList.replace(nome.classList[1], e.parentNode.classList[1]);
                    } else {
                        nome.classList.add(e.parentNode.classList[1]);
                    }
                }
            })
        })
    })
}

/*
    A função distribuir vai fazer a distruibuição eletrônica dos elétrons baseando-se no atributo param que ela recebe, além
    da distruibuição eletrônica, a função também vai preencher informar a camada de valência e o subnível
    mais energético e seus respectivos números de elétrons
*/

function distribuir(param) {
    let txt = "<p class='orbitais'>";
    let txtValencia = " ";
    let valencia = 1;
    let numEletrons = "";
    distribuicao.forEach((e, index, array) => {
        let eletrons = e[1].eletron;
        if (param > 0) {
            if (e[0] > valencia) {
                valencia = e[0];
                numEletrons = 0;
            }
            let sub = "";
            if (eletrons == 2) {
                sub = "s"
            } else if (eletrons == 6) {
                sub = "p"
            } else if (eletrons == 10) {
                sub = "d"
            } else if (eletrons == 14) {
                sub = "f"
            }

            if (param > eletrons) {
                txt += `<span class="orbital"><span class="nivel">${e[0]}${sub}</span><span class="superscript ${eletrons} ${sub}">${eletrons}</span></span> `;
                param -= eletrons;
                if (e[0] == valencia) {
                    numEletrons += eletrons;
                }
                return;
            }
            txt += `<span class="orbital"><span class="nivel">${e[0]}${sub}</span><span class="superscript ${param} ${sub}">${param}</span></span> `;
            if (e[0] == valencia) {
                numEletrons += param;
            }
            param -= eletrons;

        }
    })
    txt += "</p>"
    txtValencia += valencia;

    let camada = document.querySelector(".valencia");
    let distr = document.querySelector(".distribuicao");
    let nEletrons = document.querySelector(".n-valencia");
    let sub = document.querySelector(".subnivel");
    let nSub = document.querySelector(".n-subnivel");
    camada.innerHTML = `(${valencia})${camadas[txtValencia - 1]}`;
    distr.innerHTML = txt;
    nEletrons.innerHTML = numEletrons;
    let subNiveis = document.querySelectorAll(".superscript");
    let niveis = document.querySelectorAll(".nivel")
    let orbitalMaisEnergetico = niveis[niveis.length - 1].textContent;
    let contEletrons = subNiveis[subNiveis.length - 1].textContent;
    sub.innerHTML = orbitalMaisEnergetico.trim();
    nSub.innerHTML = contEletrons;
}
/*
    Essa função vai preencher as células dos elementos do grupo dos lantanídeos e dos actnídeos
*/

function gerarGrupo() {
    let grupo = document.querySelector(".lant-act");
    let linhas = grupo.querySelectorAll(".linha");
    const lantanideos = [
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71
    ];

    const actinideos = [
        89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103
    ];
    linhas.forEach((ln, index) => {
        let celulas = Array.from(ln.querySelectorAll(".celula"));
        let hidden = celulas.splice(celulas.length - 3, 3);
        hidden.forEach(e => {
            e.remove();
        })
        celulas.forEach((cell, i) => {
            let simbolo = document.createElement("div");
            simbolo.classList.add("simbolo");
            let span = cell.querySelector(".atomic-number");
            if (index == 0) {
                simbolo.textContent = tabelaPeriodica[lantanideos[i] - 1].simbolo;
                span.innerHTML = lantanideos[i];
                cell.classList.add("lant");
            }
            if (index == 1) {
                simbolo.textContent = tabelaPeriodica[actinideos[i] - 1].simbolo;
                span.innerHTML = actinideos[i];
                cell.classList.add("act");
            }
            cell.appendChild(simbolo);
        })
    })
}

/*
    A função destacar vai adicionar aos itens da legenda um evento de mouseenter e vai destacar as células que pertençam
    àquele grupo indicado no item da legenda que recebeu o evento
*/

function destacar(celulas) {
    let itens = document.querySelectorAll(".legenda-item");
    let nome = document.querySelector(".tabela-nome")
    itens.forEach(item => {
        item.addEventListener("mouseenter", () => {
            let square = item.querySelector(".square");
            let backgroundColorSquare = window.getComputedStyle(square).backgroundColor;
            let backgroundColorNome = window.getComputedStyle(nome).backgroundColor;
            celulas.forEach(cell => {
                let backgroundColor = window.getComputedStyle(cell).backgroundColor;
                if (backgroundColor !== backgroundColorSquare) {
                    cell.style.backgroundColor = "#555555";
                    return;
                }
                if (backgroundColorNome !== backgroundColorSquare) {
                    nome.style.backgroundColor = "#555555";
                }
            })

        })
        item.addEventListener("mouseleave", () => {
            celulas.forEach(cell => {
                cell.style.backgroundColor = "";
                nome.style.backgroundColor = "";

            })
        })

    })

}

gerarTabela()
gerarGrupo()
hover()
const button = document.querySelector(".button");
const input = document.querySelector("input");
const celulas = document.querySelectorAll(".celula");
destacar(celulas)

/*
    Os scripts abaixo vão receber o valor do input, seja clicando na célula ou escrevendo um valor ou símbolo no input, esses scripts
    chamarão a função distribuir para obter as informações necessárias
    A função output será chamada para verificar as informações
*/
function output() {
    let value = input.value.trim();
    let index = tabelaPeriodica.findIndex((elemento) => elemento.simbolo.toLowerCase() === value.toLowerCase());
    if (index == -1 && isNaN(value) || value == "" || value <= 0) {
        window.alert("Por favor, insira um valor válido");
        document.querySelector(".valencia").innerHTML = " ";
        document.querySelector(".distribuicao").innerHTML = " ";
        document.querySelector(".n-valencia").innerHTML = " ";
        document.querySelector(".subnivel").innerHTML = " ";
        document.querySelector(".n-subnivel").innerHTML = " ";
        input.value = " ";
        return;
    }
    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    input.value = isNaN(value) ? value : parseInt(value, 10);
    value = parseInt(value, 10);
    if (index !== -1) {
        value = tabelaPeriodica[index].atomico;
    }
    distribuir(value);
}
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && input.matches(":focus-visible")) {
        input.blur();
        output();
    }

});
celulas.forEach(cell => {
    cell.addEventListener("click", () => {

        let number = cell.querySelector(".atomic-number");
        if (isNaN(number.textContent)) {
            return;
        }
        input.value = number.textContent;
        distribuir(input.value);

    })
})
button.addEventListener("click", () => {
    output();
});

