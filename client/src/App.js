import './App.css';
import PriceCard from './components/PriceCard.js';
import CoinTable from './components/CoinTable';
function App() {
  return (
    
    <div className="App">
      
      <header className="header" data-header>
        <div className="container">


          <a href="!#" className="logo">
            <img src="/images/logo.png" width="50" height="50" alt="Crypto logo"/>
            GrypTa
          </a>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">

              <li className="navbar-item">
                <a href="!#" className="navbar-link active" data-nav-link>Homepage</a>
              </li>

              <li className="navbar-item">
                <a href="!#" className="navbar-link" data-nav-link>Market</a>
              </li>

              <li className="navbar-item">
                <a href="!#" className="navbar-link" data-nav-link>Wallet</a>
              </li>
              <li className="navbar-item">
                <a href="!#" className="navbar-link" data-nav-link>Contacts</a>
              </li>

            </ul>
          </nav>

          {/* <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler> */}
          <button className="nav-toggle-btn">
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <a href="https://www.linkedin.com/in/gradyta/" className="btn btn-outline">LinkedIn Profile</a>

        </div>
      </header>

      <main>
    <article>

      <section className="section hero" aria-label={"hero"} id="watchlist">
        <div className="container">

          <div className="hero-content">

            <h1 className="h1 hero-title">Grady T. <br /> Crypto Wallet</h1>
            <p className="hero-text">
              Boss Grady's crypto wallet and his real-time value.
            </p>

            <a href="!#" className="btn btn-primary">Get started now</a>

          </div>

          <figure className="hero-banner">
            <img src="./images/banner.png" style={{width: "120%"}} alt="hero banner" className="w-100"/>
          </figure>

        </div>
      </section>

      

      <section className="section trend" aria-label="crypto trend">
        <div className="container">

          <div className="trend-tab">

            {/* <ul className="tab-nav">

              <li>
                <button className="tab-btn active">Crypto</button>
              </li>

              <li>
                <button className="tab-btn">DeFi</button>
              </li>

              <li>
                <button className="tab-btn">BSC</button>
              </li>

              <li>
                <button className="tab-btn">NFT</button>
              </li>

              <li>
                <button className="tab-btn">Metaverse</button>
              </li>

              <li>
                <button className="tab-btn">Polkadot</button>
              </li>

              <li>
                <button className="tab-btn">Solana</button>
              </li>

              <li>
                <button className="tab-btn">Opensea</button>
              </li>

              <li>
                <button className="tab-btn">Makersplace</button>
              </li>

            </ul> */}

          <h2 style={{paddingBottom:"1rem"}}>Watchlist</h2>
          <PriceCard />
          </div>
        </div>
      </section>


      <section className="section market" aria-label="market update">
        <div className="container">

          <div className="title-wrapper">
            <h2 className="h2 section-title">Market Update</h2>

            <a href="!#" className="btn-link">See All Coins</a>
          </div>

          <div className="market-tab">

            {/* <ul className="tab-nav">

              <li>
                <button className="tab-btn active">View All</button>
              </li>

              <li>
                <button className="tab-btn">Metaverse</button>
              </li>

              <li>
                <button className="tab-btn">Entertainment</button>
              </li>

              <li>
                <button className="tab-btn">Energy</button>
              </li>

              <li>
                <button className="tab-btn">NFT</button>
              </li>

              <li>
                <button className="tab-btn">Gaming</button>
              </li>

              <li>
                <button className="tab-btn">Music</button>
              </li>

            </ul> */}
            <CoinTable/>
            <table className="market-table">

              <thead className="table-head">

                <tr className="table-row table-title">

                  <th className="table-heading"></th>

                  <th className="table-heading" scope="col">#</th>

                  <th className="table-heading" scope="col">Name</th>

                  <th className="table-heading" scope="col">Last Price</th>

                  <th className="table-heading" scope="col">24h %</th>

                  <th className="table-heading" scope="col">Market Cap</th>

                  <th className="table-heading" scope="col">Last 7 Days</th>

                  <th className="table-heading"></th>

                </tr>

              </thead>

              <tbody className="table-body">

                <tr className="table-row">

                  <td className="table-data">
                    <button className="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
                      <ion-icon name="star-outline" aria-hidden="true" className="icon-outline"></ion-icon>
                      <ion-icon name="star" aria-hidden="true" className="icon-fill"></ion-icon>
                    </button>
                  </td>

                  <th className="table-data rank" scope="row">1</th>

                  <td className="table-data">
                    <div className="wrapper">
                      <img src="./images/coin-1.svg" width="20" height="20" alt="Bitcoin logo" className="img"/>

                      <h3>
                        <a href="!#" className="coin-name">Bitcoin <span className="span">BTC</span></a>
                      </h3>
                    </div>
                  </td>

                  <td className="table-data last-price">$56,623.54</td>

                  <td className="table-data last-update green">+1.45%</td>

                  <td className="table-data market-cap">$880,423,640,582</td>

                  <td className="table-data">
                    <img src="./images/chart-1.svg" width="100" height="40" alt="profit chart" className="chart"/>
                  </td>

                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>

                </tr>

      

              </tbody>

            </table>

          </div>

        </div>
      </section>


      <section className="section instruction" aria-label="instruction">
        <div className="container">

          <h2 className="h2 section-title">How It Work</h2>

          <p className="section-text">
            Stacks is a production-ready library of stackable content blocks built in React Native.
          </p>

          <ul className="instruction-list">

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="./images/instruction-1.png" width="96" height="96" loading="lazy" alt="Step 1"
                    className="img"/>
                </figure>

                <p className="card-subtitle">Step 1</p>

                <h3 className="h3 card-title">Download</h3>

                <p className="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                </p>

              </div>
            </li>

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="./images/instruction-2.png" width="96" height="96" loading="lazy" alt="Step 2"
                    className="img"/>
                </figure>

                <p className="card-subtitle">Step 2</p>

                <h3 className="h3 card-title">Connect Wallet</h3>

                <p className="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                </p>

              </div>
            </li>

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="./images/instruction-3.png" width="96" height="96" loading="lazy" alt="Step 3"
                    className="img"/>
                </figure>

                <p className="card-subtitle">Step 3</p>

                <h3 className="h3 card-title">Start Trading</h3>

                <p className="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                </p>

              </div>
            </li>

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="./images/instruction-4.png" width="96" height="96" loading="lazy" alt="Step 4"
                    className="img"/>
                </figure>

                <p className="card-subtitle">Step 4</p>

                <h3 className="h3 card-title">Earn Money</h3>

                <p className="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>


      <section className="section about" aria-label="about">
        <div className="container">

          <figure className="about-banner">
            <img src="./images/about-banner.png" width="748" height="436" loading="lazy" alt="about banner"
              className="w-100"/>
          </figure>

          <div className="about-content">

            <h2 className="h2 section-title">What Is GrypTa</h2>

            <p className="section-text">
              Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot
              Trade, Futures
              Trade, P2P, Staking, Mining, and margin.
            </p>

            <ul className="section-list">

              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 className="h3 list-title">View real-time cryptocurrency prices</h3>
                </div>

                <p className="item-text">
                  Experience a variety of trading on Bitcost. You can use various types of coin transactions such as
                  Spot Trade, Futures
                  Trade, P2P, Staking, Mining, and margin.
                </p>
              </li>

              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 className="h3 list-title">Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
                </div>

                <p className="item-text">
                  Experience a variety of trading on Bitcost. You can use various types of coin transactions such as
                  Spot Trade, Futures
                  Trade, P2P, Staking, Mining, and margin.
                </p>
              </li>

            </ul>

            <a href="!#" className="btn btn-primary">Explore More</a>

          </div>

        </div>
      </section>


      <section className="section app" aria-label="app">
        <div className="container">

          <div className="app-content">

            <h2 className="h2 section-title">Free Your Money & Invest With Confident</h2>

            <p className="section-text">
              With Cryptor Trade, you can be sure your trading skills are matched
            </p>

            <ul className="section-list">

              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 className="h3 item-title">Buy, Sell, And Trade On The Go</h3>
                </div>

                <p className="item-text">
                  Manage Your Holdings From Your Mobile Decive
                </p>
              </li>

              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 className="h3 item-title">Take Control Of Your Wealth</h3>
                </div>

                <p className="item-text">
                  Rest Assured You (And Only You) Have Access To Your Funds
                </p>
              </li>

            </ul>

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

          <div className="app-banner">
            <img src="./images/app-banner.png" width="618" height="526" loading="lazy" alt="app banner"
              className="w-100"/>

            <span className="span">Scan To Download</span>
          </div>

        </div>
      </section>

    </article> 
      </main>


      <footer className="footer">

    <div className="footer-top">
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
          &copy; 2022 GrypTa All Rights Reserved by <a href="!#" className="copyright-link">codewithsadee</a>
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

    </div>)}
export default App;
