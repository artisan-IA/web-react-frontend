const Home = ({ language }) => {

    return (
        <section id="home">
            <div className="home-text">
                {language === "en" && <div className="home-text">
                    <h4>The power of big AI for your restaurant**</h4>
                    <a href="/demo" className="orange-button">See how it works</a>
                    <p>**Yes, it is posible!</p>    
                </div>}
                {language === "es" && <div className="home-text">
                    <h4>El poder de la gran IA para tu restaurante**</h4>
                    <a href="/demo" className="orange-button">Ver cómo funciona</a>
                    <p>**¡Sí, es posible!</p>    
                </div>}
                {language === "ca" && <div className="home-text">
                    <h4>The power of big AI for your restaurant**</h4>
                    <a href="/demo" className="orange-button">Mira com funciona</a>
                    <p>**¡Sí, és posible!</p>   
                </div>}
            </div>
            <div className="home-img"></div>
        </section>
    )
}

export default Home