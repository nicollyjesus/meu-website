import './pagina.css';
import imgs_eu from '../../assets/euu/index.jsx'

const Pagina = () => {
    return (
        <div>
            <main className="main-pagina">
                <section className="section-left">
                    <div className="div-name">
                        <h1 className="h1-name1">Nicolly</h1>
                        <h1 className="h1-name2">Jesus</h1>
                    </div>

                    <p className="p-sobre">
                        Olá a todos! Meu nome é Nicolly, tenho 20 anos e estou
                        começando minha jornada na programação. Sou uma analista
                        e desenvolvedora de sistemas apaixonada por explorar o
                        mundo da tecnologia e aprimorar minhas habilidades de
                        programação. Uma característica marcante em mim é a
                        minha criatividade.Sou uma amante dos animais, especialmente
                        do meu gato chamado Fumaça. Ele é meu companheiro fiel e
                        mostra meu lado carinhoso e comprometido em cuidar
                        daqueles que estão ao meu redor. Amo
                        escrever poesias. Através das palavras, consigo
                        transmitir emoções e despertar sentimentos profundos nos
                        corações daqueles que leem minhas
                        criações. Além disso, adoro cantar!
                        A música é outra maneira de me expressar e explorar
                        minha criatividade. Sempre que tenho uma chance, solto a
                        voz, seja em casa, com amigos ou em um karaokê. Minha
                        paixão pela música é uma fonte constante de inspiração
                        em minha vida. E, é claro, como toda pessoa criativa,
                        tenho um fraco por doces, pequenos prêmios que
                        me recompensam pelas conquistas aprendidas e pelos
                        desafios superados. Afinal, a programação pode ser
                        complexa, mas um docinho sempre ajuda a adoçar o
                        caminho.
                    </p>
                </section>
                <section className="section-right">
                    <img src={imgs_eu.eu1} alt="" height={'430vh'} />
                    <div className="div-imgs-menor">
                        <img src={imgs_eu.eu3} alt="" height={'100vh'} />
                        <img src={imgs_eu.eu2} alt="" height={'100vh'} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Pagina;
