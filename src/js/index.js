async function getMenu(menu) {
    let response = await fetch(`https://5ff5c022941eaf0017f37210.mockapi.io/api/v1/${menu}`);
    let data = await response.json()
    return data;
}

async function getPortfolio(name) {
    let response = await fetch(`https://5ff5c022941eaf0017f37210.mockapi.io/api/v1/${name}`);
    let data = await response.json()
    return data;
}

getMenu('menu')
    .then(
        data => {
            let list = document.createElement('ul')
            for (let element of data) {
                let item = document.createElement('li')
                console.log(element)
                item.appendChild(document.createTextNode(element.name))
                list.appendChild(item)
            }
            document.getElementById('menu').appendChild(list);

        })

getPortfolio('portfolio')
    .then(
        data => {
            const mitad1 = data.splice(0, data.length / 3)
            const mitad2 = data.splice(0, data.length / 2)
            const mitad3 = data.splice(0, data.length)

            for (let element of mitad1) {

                document.getElementById('mitad1').innerHTML += '<li> <p>' + element.name + '</p> <img src=" ' + element.imagen + ' " />  </li>';
            }
            for (let element of mitad2) {

                document.getElementById('mitad2').innerHTML += '<li> <p>' + element.name + '</p> <img src=" ' + element.imagen + ' " />  </li>';
            }
            for (let element of mitad3) {

                document.getElementById('mitad3').innerHTML += '<li> <p>' + element.name + '</p> <img src=" ' + element.imagen + ' " />  </li>';
            }
        })

const activarLista = () => {
    let grilla = document.getElementById('portfolio')
    grilla.classList.add('lista');
}
const activarGrilla = () => {
    let grilla = document.getElementById('portfolio')
    grilla.classList.remove('lista');
}

const abrirMenu = () => {
    let hamburguesa = document.getElementById('hamburger');
    let menu = document.getElementById('menu');
    hamburguesa.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

const filtrarAll = () => {
    getPortfolio('portfolio')
        .then(
            data => {
                const mitad1 = data.splice(0, data.length / 3)
                const mitad2 = data.splice(0, data.length / 2)
                const mitad3 = data.splice(0, data.length)

                for (let element of mitad1) {

                    document.getElementById('mitad1').innerHTML += '<li> <p>' + element.name + '</p> <img src=" ' + element.imagen + ' " />  </li>';
                }
                for (let element of mitad2) {

                    document.getElementById('mitad2').innerHTML += '<li> <p>' + element.name + '</p> <img src=" ' + element.imagen + ' " />  </li>';
                }
                for (let element of mitad3) {

                    document.getElementById('mitad3').innerHTML += '<li> <p>' + element.name + '</p> <img src=" ' + element.imagen + ' " />  </li>';
                }
            })
}

const filtrar = (categoria) => {
    const filtro = getPortfolio('portfolio')
        .then(
            data => {
                const temp = data.filter(element => {
                    return element.categorias == categoria;

                })
                console.log("temp", temp)
                const mitad1 = temp.splice(0, temp.length / 3)
                const mitad2 = temp.splice(0, temp.length / 2)
                const mitad3 = temp.splice(0, temp.length)
                document.getElementById("mitad1").innerHTML = "";
                document.getElementById("mitad2").innerHTML = "";
                document.getElementById("mitad3").innerHTML = "";

                for (let element of mitad1) {
                    document.getElementById('mitad1').innerHTML += '<li> <p>' + element.name + '</p> <img src=" ' + element.imagen + ' " />  </li>';
                }
                for (let element of mitad2) {

                    document.getElementById('mitad2').innerHTML += '<li> <p>' + element.name + '</p> <img src=" ' + element.imagen + ' " />  </li>';
                }
                for (let element of mitad3) {
                    document.getElementById('mitad3').innerHTML += '<li> <p>' + element.name + '</p> <img src=" ' + element.imagen + ' " />  </li>';
                }
            }
        )
}