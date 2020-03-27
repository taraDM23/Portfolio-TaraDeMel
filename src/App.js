/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
//import About from './Bio';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div classNameName="App">
        <header id="home">
          <div className="bg-img" style={{ backgroundImage: "url('./img/header.jpg')" }}>
            <div className="overlay"></div>
          </div>
          <nav id="nav" className="navbar nav-transparent">
            <div className="container">
              <div className="navbar-header">
                <div className="navbar-brand">
                  <a href="index.html">
                  </a>
                </div>

                <div className="nav-collapse">
                  <span></span>
                </div>
              </div>

              <ul className="main-nav nav navbar-nav navbar-right">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>

            </div>
          </nav>
          <div className="home-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="home-content">
                    <h1 className="white-text">Welcome! Aloha! Kia Ora!</h1>
                    <p className="white-text"> My Name is Tara and I am a junior Full Stack Software developer.</p>
                    <p className="white-text"> Coming from a customer service and project management background, I began coding not six months ago. In an effort to fulfill a long ignored need to find passion in my work, I changed direction and haven't looked back!</p>
                    <p className="white-text"> Please see below my efforts so far. Mahalo!</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>
        <div id="about" className="section md-padding" >
          <div className="container" /* style={{ backgroundColor: "#dbe4e9" }} */>
            <div className="row">
              <div className="section-header text-center">
                <h2 className="title">About Me</h2>
              </div>


              <div className="col-md-4">
                <div className="about">
                  <i className="fa fa-file"></i>
                  <h3>My Resume</h3>
                  <a href="https://drive.google.com/file/d/1MPotwXjNKBxFo_4dokOAiSGZfExad4Ug/view?usp=sharing" target="_blank" >Link Here</a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="about">
                  <i className="fa fa-github"></i>
                  <h3>My GitHub</h3>
                  <a href="https://github.com/taraDM23">Go to Github Portfolio</a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="about">
                  <i className="fa fa-user"></i>
                  <h3>My linkedin</h3>
                  <a href="https://www.linkedin.com/in/tara-de-mel/" target="_blank">Read more</a>
                </div>
              </div>

            </div>

          </div>

        </div>


        <div id="portfolio" className="section md-padding bg-grey">

          <div className="container">

            <div className="row">

              <div className="section-header text-center">
                <h2 className="title">My Portfolio</h2>
              </div>

              <div className="col-md-4 col-xs-6 work">
                <img className="img-responsive" src="./img/work1.png" alt="" style={{ width: 600, height: 300 }} />
                <div className="overlay"></div>
                <div className="work-content">
                  <span>Recipe Lover</span>
                  <h3>This application stands as a site to view, search and create recipes. A user can create an account and utilise this application to house and favorite recipes.</h3>
                  <div className="work-link">
                    <a href="https://hhop-recipe-blog.herokuapp.com/user/login" target="_blank"><i className="fa fa-external-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6 work">
                <img className="img-responsive" src="./img/work2.jpg" alt="" style={{ width: 600, height: 300 }} />
                <div className="overlay"></div>
                <div className="work-content">
                  <span>Don't Eat</span>
                  <h3>This application will display restaurants with known low ratings. This was achieved by using an api database and Google maps</h3>
                  <div className="work-link">
                    <a href="https://taradm23.github.io/Dont-Eat/?#" target="_blank"><i className="fa fa-external-link"></i></a>

                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6 work">
                <img className="img-responsive" src="./img/work3.jpg" alt="" style={{ width: 600, height: 300 }} />
                <div className="overlay"></div>
                <div className="work-content">
                  <span>Note Taker</span>
                  <h3>A simple hosted note taking application</h3>
                  <div className="work-link">
                    <a href="https://dry-woodland-02735.herokuapp.com/" target="_blank"><i className="fa fa-external-link"></i></a>

                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6 work">
                <img className="img-responsive" src="./img/work4.jpg" alt="" style={{ width: 600, height: 300 }} />
                <div className="overlay"></div>
                <div className="work-content">
                  <span>Random Password Generator</span>
                  <h3>This application generates a random password based on user-selected criteria. </h3>
                  <div className="work-link">
                    <a href="https://taradm23.github.io/Random-Password-Generator/" target="_blank"><i className="fa fa-external-link"></i></a>

                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-6 work">
                <img className="img-responsive" src="./img/work5.jpg" alt="" style={{ width: 600, height: 300 }} />
                <div className="overlay"></div>
                <div className="work-content">
                  <span>Sharing is Caring</span>
                  <h3>Lorem ipsum dolor</h3>
                  <div className="work-link">
                    <a href="#" target="_blank"><i className="fa fa-external-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6 work">
                <img className="img-responsive" src="./img/work6.jpg" alt="" style={{ width: 500, height: 300 }} />
                <div className="overlay"></div>
                <div className="work-content">
                  <span>Team Portfolio</span>
                  <h3>This is a node.js application run via your terminal. Once the application is complete, you will get a webpage of the data entered.</h3>
                  <div className="work-link">
                    <a href="https://github.com/taraDM23/Team_portfolio" target="_blank"><i className="fa fa-external-link"></i></a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="section md-padding">

          <div className="container">

            <div className="row">

              <div className="section-header text-center">
                <h2 className="title">Get in touch</h2>
              </div>
              <div className="col-sm-4">
                <div className="contact">
                  <i className="fa fa-linkedin"><a href="https://www.linkedin.com/in/tara-de-mel/" target="_blank"><h3>linkedin</h3></a></i>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="contact">
                  <i className="fa fa-envelope">
                    <a href="mailto:tara.demel91@gmail.com" target="_blank">
                      <h3>Email</h3>
                    </a></i>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="contact">
                  <i className="fa fa-github"><a href="https://github.com/taraDM23" target="_blank">   <h3>Github</h3> </a></i>

                </div>
              </div>

              {/*   <div className="col-md-8 col-md-offset-2">
                <form className="contact-form">
                  <input type="text" className="input" placeholder="Name" />
                  <input type="email" className="input" placeholder="Email" />
                  <input type="text" className="input" placeholder="Subject" />
                  <textarea className="input" placeholder="Message"></textarea>
                  <button className="main-btn">Send message</button>
                </form>
              </div> */}

            </div>

          </div>

        </div>


        <footer id="footer" className="sm-padding bg-dark">

          <div className="container">

            <div className="row">
              <div className="col-md-12">
                <ul className="footer-follow">
                  <li><a href="https://github.com/taraDM23" target="_blank"><i className="fa fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/tara-de-mel/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                </ul>
                <div className="footer-copyright">
                  <p>COPYRIGHT © 2017. ALL RIGHTS RESERVED. DESIGNED BY COLORLIB</p>
                </div>

              </div>

            </div>

          </div>

        </footer>

        <div id="back-to-top" ></div>

        <div id="preloader">
          <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
