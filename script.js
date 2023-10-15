/*usando inner.HTML para adicionar tudo: */
/*let main = document.createElement('main');
main.innerHTML = `
    <main>
        <section>
            <h1 id='titulo'><u>PRODUTO À VENDA!!!</u></h1>
            <h2><u>Computador Gamer, Intel i5-13400, Radeon RX 7600 8GB, 16GB DDR4, SSD 480GB</u></h2>
            <img src='/src/img/PC.png'></img>
            <h2>Preço: R$ 5.500,00</h2>
            <div>
                <h3>Descrição:</h3>
                <p><strong>PROCESSADOR</strong><br>1 x Processador Intel Core I5-13400, 10-Core, 16-Threads, 2.5GHz (4.6GHz), Cache 20MB, LGA1700</p>
                <p><strong>PLACA MÃE</strong><br>1 x Placa Mae Gigabyte B660M Gaming X, DDR4, Socket LGA 1700, M-ATX, Chipset Intel B660, B660M-GAMINGX-DDR4</p>
                <p><strong>MEMÓRIA</strong><br>2 x Memoria Team Group T-Force Vulcan, 8GB (1x8), DDR4, 3200MHz, C16, Branca RTB</p>
                <p><strong>ARMAZENAMENTO</strong><br>1 x SSD Mancer Reaper, 500GB, SATA III 6GB/s, Leitura 550 MB/s, Gravacao 500 MB/s</p>
                <p><strong>PLACA DE VÍDEO</strong><br>1 x Placa de Video Gigabyte Radeon RX 7600 Gaming OC, 8GB, GDDR6, 128-bit</p>
                <p><strong>FONTE</strong><br>1 x Fonte Corsair CV Series CV550 80 Plus Bronze 550W</p>
                <p><strong>GABINETE</strong><br>1 x Gabinete Gamer Kazan 2, Mid-Tower, Lateral de Vidro, Com 4 Ventoinhas, Preto</p>
                <p><strong>CABO HDMI</strong><br>1 x Cabo HDMI 1.8m</p>
                <p><strong>CABO DE FORÇA</strong><br>1 x Cabo de Força 1.2m, 3 Pinos, Vermelho</p>
            </div>
            
        </section>
    </main>
`
const body = document.querySelector('body');
body.style.background = 'blueviolet';
body.style.color = 'yellow';
body.appendChild(main);*/

/*usando somente createElement e appendChild:*/ 
const body = document.querySelector('body');
body.style.background = 'blueviolet';
body.style.color = 'yellow';

const main = document.createElement('main');
console.log(main.innerHTML);
body.appendChild(main);
const section = document.createElement('section');
main.appendChild(section);
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerHTML = `<u>PRODUTO À VENDA!!!</u>`
section.appendChild(titulo);
const nome = document.createElement('h2');
nome.innerHTML = `<u>Computador Gamer, Intel i5-13400, Radeon RX 7600 8GB, 16GB DDR4, SSD 480GB</u>`;
section.appendChild(nome);
const img = document.createElement('figure');
img.innerHTML = `<img src='/src/img/PC.png'>`
section.appendChild(img);
const preco = document.createElement('h2');
preco.innerText = `Preço: R$ 5.500,00`;
section.appendChild(preco);
const div = document.createElement('div');
section.appendChild(div);
const descricao = document.createElement('h3');
descricao.innerText = 'Descrição:';
div.appendChild(descricao);
const processador = document.createElement('p');
processador.innerHTML = `<strong>PROCESSADOR</strong><br>1 x Processador Intel Core I5-13400, 10-Core, 16-Threads, 2.5GHz (4.6GHz), Cache 20MB, LGA1700`;
div.appendChild(processador);
const placaMae = document.createElement('p');
placaMae.innerHTML = `<strong>PLACA MÃE</strong><br>1 x Placa Mae Gigabyte B660M Gaming X, DDR4, Socket LGA 1700, M-ATX, Chipset Intel B660, B660M-GAMINGX-DDR4`;
div.appendChild(placaMae);
const memoria = document.createElement('p');
memoria.innerHTML = `<strong>MEMÓRIA</strong><br>2 x Memoria Team Group T-Force Vulcan, 8GB (1x8), DDR4, 3200MHz, C16, Branca RTB`;
div.appendChild(memoria);
const armazenamento = document.createElement('p');
armazenamento.innerHTML = `<strong>ARMAZENAMENTO</strong><br>1 x SSD Mancer Reaper, 500GB, SATA III 6GB/s, Leitura 550 MB/s, Gravacao 500 MB/s`;
div.appendChild(armazenamento);
const placaVideo = document.createElement('p');
placaVideo.innerHTML = `<strong>PLACA DE VÍDEO</strong><br>1 x Placa de Video Gigabyte Radeon RX 7600 Gaming OC, 8GB, GDDR6, 128-bit`;
div.appendChild(placaVideo);
const fonte = document.createElement('p');
fonte.innerHTML = `<strong>FONTE</strong><br>1 x Fonte Corsair CV Series CV550 80 Plus Bronze 550W`;
div.appendChild(fonte);
const gabinete = document.createElement('p');
gabinete.innerHTML = `<strong>GABINETE</strong><br>1 x Gabinete Gamer Kazan 2, Mid-Tower, Lateral de Vidro, Com 4 Ventoinhas, Preto`;
div.appendChild(gabinete);
const caboHDMI = document.createElement('p');
caboHDMI.innerHTML = `<strong>CABO HDMI</strong><br>1 x Cabo HDMI 1.8m`;
div.appendChild(caboHDMI);
const caboForca = document.createElement('p');
caboForca.innerHTML = `<strong>CABO DE FORÇA</strong><br>1 x Cabo de Força 1.2m, 3 Pinos, Vermelho`;
div.appendChild(caboForca);


