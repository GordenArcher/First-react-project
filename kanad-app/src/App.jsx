import Contact from "./contact.jsx"
import Footer from "./footer.jsx"
import Header from "./header.jsx"
import AlertPop from "./alert.jsx"
import About from "./about.jsx"
import "./assets/CSS/App.css"
import HomeImg from "./assets/images/hero-img.png"



function App() {

  return (
    <>
    <Header />

    <div className="home">
      <div className="home_left">
        <div className="message">
          <h2>Hey there Welcome <br /> I'm a full Stack developer <br /> who create complex <br /> software to satisfy my clients</h2>

          <div className="btn">
            <button id="get_started">Get Started  <i class="bi bi-arrow-up-right"></i> </button>
          </div>
        </div>
      </div>
      <div className="home_right">
        <div className="home_imgae">
          <img src={HomeImg} alt="home img" />
        </div>
      </div>
    </div>

    <About />

    <Contact  />
    
    <Footer/>


    </>
    
  )
}

export default App;
