import './App.css';
import TrendTab from './components/TrendTab';
import {CoinTable} from './components/CoinTable';
import { toggleNav } from './script';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {fadeOutEnabled} from 'react-reveal/globals';


function App() {

  return (
    
    <div className="App">
      <header className="header" data-header>
        <div className="container">
          <a href="!#" className="logo">
            <img src="./images/logo.png" width="50" height="50" alt="Crypto logo"/>
            GrypTa
          </a>

          <nav className="navbar">
            <ul className="navbar-list">

              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-link>Homepage</a>
              </li>

              <li className="navbar-item">
                <a href="#watchlist" className="navbar-link" data-nav-link>Watchlist</a>
              </li>

              <li className="navbar-item">
                <a href="#porfolio" className="navbar-link" data-nav-link>Porfolio</a>
              </li>
              <li className="navbar-item">
                <a href="#instr" className="navbar-link" data-nav-link>Instruction</a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link" data-nav-link>About</a>
              </li>
              <li className="navbar-item">
                <a href="#contact" className="navbar-link" data-nav-link>Contacts</a>
              </li>

            </ul>
          </nav>

          <button className="nav-toggle-btn" aria-label="Toggle menu" onClick={toggleNav} >
 
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <a href="https://www.linkedin.com/in/gradyta/" className="btn btn-outline">LinkedIn Profile</a>

        </div>
      </header>
      
      <main>
    <article>
      <section className="section hero" aria-label={"hero"} id="home" >
        <div className="container">
        <Fade top>
          <div className="hero-content">

            <h1 className="h1 hero-title">Grady T. <br /> Crypto Wallet</h1>
            <p className="hero-text">
              Boss Grady's crypto wallet and his real-time value.
            </p>

            <a href="!#" className="btn btn-primary">Get started now</a>

          </div>

          <figure className="hero-banner">
            <img src="./images/banner.png"  alt="hero banner" className="w-100"/>
          </figure>
          </Fade>
        </div>
      </section>
      
      <section id="watchlist" className="section trend" aria-label="crypto trend">
      <Fade top>
        <div className="container">
          <TrendTab/>
        </div>
      </Fade>
      </section>
     
      <section id="porfolio" className="section market" aria-label="market update">
        <div className="container">
          
          <div className="market-tab">
          <Fade top fadeOutEnabled> 
            <CoinTable/>
            </Fade>
          </div>
          
        </div>
      </section>

      <section className="section instruction" id="instr" aria-label="instruction">
        <div className="container">
          <Fade top>
          <h2 className="h2 section-title">How This Page Created</h2>
          
          <p className="section-text">
          I built this Full-stack Website using the technology below.
          </p>
          </Fade>
          <Fade top>
          <ul className="instruction-list">

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="./images/instruction-1.png" width="96" height="96" loading="lazy" alt="Step 1"
                    className="img"/>
                </figure>

                <p className="card-subtitle">Front-end</p>

                <h3>React.js Framwork</h3>

              </div>
            </li>

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="./images/instruction-2.png" width="96" height="96" loading="lazy" alt="Step 2"
                    className="img"/>
                </figure>

                <p className="card-subtitle">Back-end</p>

                <h3 className="h3 card-title">Node.js and Express.js</h3>
              </div>
            </li>

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="./images/instruction-3.png" width="96" height="96" loading="lazy" alt="Step 3"
                    className="img"/>
                </figure>

                <p className="card-subtitle">Database</p>

                <h3 className="h3 card-title">SQL (MySQL)</h3>

              </div>
            </li>

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="./images/instruction-4.png" width="96" height="96" loading="lazy" alt="Step 4"
                    className="img"/>
                </figure>

                <p className="card-subtitle">APIs</p>

                <h3 className="h3 card-title">CoinGecko Real-time API</h3>

              </div>
            </li>

          </ul>
          </Fade>

        </div>
      </section>


      <section className="section about" aria-label="about" id = "about">
        <div className="container">
        <Fade top>
          <figure className="about-banner">
            <img src="./images/about-banner.png" width="748" height="436" loading="lazy" alt="about banner"
              className="w-100"/>
          </figure>

          <div className="about-content" >

            <h2 style={{color: "black"}} className="h2">What Is GrypTa</h2>

            <p style={{color: "black"}} className="section-text">
            I started investing in cryptocurrency during the early stages of the pandemic. I was attracted to the decentralized nature of the cryptocurrency ecosystem, the potential of blockchain to disrupt traditional financial systems.
            </p>
            


                <h3 className="h3">What coin and how?</h3>

                <p className="item-text">
                Since then, I have built up a diversified portfolio of cryptocurrencies, including Bitcoin, Ethereum, and several altcoins. I have been monitoring the market closely and making informed investment decisions based on my analysis.
                </p>
              

            <a href="!#" className="btn btn-primary">Explore More</a>

          </div>
        </Fade>
        </div>
      </section>


      <section className="section app" aria-label="app" >
        <div className="container">

          <div className="app-content">
          <Fade top>
            <h2 className="h2 section-title">Now available on smartphones</h2>

            <p className="section-text">
              I am lying. I haven't launched this website to Google Play or App Store yet, because it has no function to other users =^^=
            </p>

            <ul className="section-list">

              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 className="h3 item-title">Why this section?</h3>
                </div>

                <p className="item-text">
                  To make the website looks accomplished
                </p>
              </li>

              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 className="h3 item-title">Is this section neccessary?</h3>
                </div>

                <p className="item-text">
                  No, I do not think any of above section is neccessary for users as well.
                </p>
              </li>

            </ul>
            </Fade>
            <div className="app-wrapper">
              <a href="!#">
                <img src="./images/googleplay.png" width="135" height="40" loading="lazy"
                  alt="get it on google play"/>
              </a>

              <a href="!#">
                <img src="./images/appstore.png" width="120" height="40" loading="lazy"
                  alt="download on the app store"/>
              </a>
            </div>

          </div>
          <Fade top>
          <div className="app-banner">
            <img src="./images/app-banner.png" loading="lazy" alt="app banner"
              className="w-100"/>

            <span className="span">Scan To Download</span>
          </div>
          </Fade>
        </div>
      </section>

    </article> 
      </main>
      
      <Fade top>
      <footer className="footer">

    <div id='contact' className="footer-top">
      <div className="container">

        <div className="footer-brand">

          <a href="!#" className="logo">
            <img src="./images/logo.png" width="55" height="55" alt="GrypTa logo"/>
            GrypTa
          </a>

          <h2 className="footer-title">Let's talk! 🤙</h2>

          <a href="tel:+123456" className="footer-contact-link">+1 (234) 567-8910</a>

          <a href="mailto:ggiangta@gmail.com" className="footer-contact-link">ggiangta@gmail.com</a>

          <address className="footer-contact-link">
            Somewhere Blvd. San Jose 95123
          </address>

        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Products</p>
          </li>

          <li>
            <a href="!#" className="footer-link">Spot</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Inverse Perpetual</a>
          </li>

          <li>
            <a href="!#" className="footer-link">USDT Perpetual</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Exchange</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Launchpad</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Binance Pay</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Services</p>
          </li>

          <li>
            <a href="!#" className="footer-link">Buy Crypto</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Markets</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Tranding Fee</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Affiliate Program</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Referral Program</a>
          </li>

          <li>
            <a href="!#" className="footer-link">API</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Support</p>
          </li>

          <li>
            <a href="!#" className="footer-link">Bybit Learn</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Help Center</a>
          </li>

          <li>
            <a href="!#" className="footer-link">User Feedback</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Submit a request</a>
          </li>

          <li>
            <a href="!#" className="footer-link">API Documentation</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Trading Rules</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">About Us</p>
          </li>

          <li>
            <a href="!#" className="footer-link">About Bybit</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Authenticity Check</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Careers</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Business Contacts</a>
          </li>

          <li>
            <a href="!#" className="footer-link">Blog</a>
          </li>

        </ul>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">

        <p className="copyright">
          &copy; 2022 GrypTa All Rights Reserved by <a href="https://www.linkedin.com/in/gradyta/" className="copyright-link">GGMADDR (Grady)</a>
        </p>

        <ul className="social-list">

          <li>
            <a href="!#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="!#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="!#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="!#" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

        </ul>

      </div>
    </div>

      </footer>
    </Fade>
    </div>)}
export default App;
