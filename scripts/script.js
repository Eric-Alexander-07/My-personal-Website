let a = document.getElementById('athletics');
let b = document.getElementById('dance');
let c = document.getElementById('calisthenics');
let d = document.getElementById('challenges');
let toggle1 = false; 
let toggle2 = false; 
let toggle3 = false; 
let toggle4 = false; 

function athletics() {
  toggle1 = !toggle1;
  
  if (toggle1 === true) {
    a.classList.remove('hidden1');
  } else {
    a.classList.add('hidden1');
  }
}

function dance() {
  toggle2 = !toggle2;
  
  if (toggle2 === true) {
    b.classList.remove('hidden2');
  } else {
    b.classList.add('hidden2');
  }
}

function calisthenics() {
  toggle3 = !toggle3;
  
  if (toggle3 === true) {
    c.classList.remove('hidden3');
  } else {
    c.classList.add('hidden3');
  }
}

function challenges() {
  toggle4 = !toggle4;
  
  if (toggle4 === true) {
    d.classList.remove('hidden4');
  } else {
    d.classList.add('hidden4');
  }
}

let width = screen.width;
if (width <= 1000) {
  document.querySelector(".indexHTML").innerHTML = `
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="phoneCss/index.css">
  <title>Eric</title>
  </head>
  <body class="phoneHtml">
    <div onclick="activate()" class="navCircle">
      <div class="hamContainer">
        <img class="hamburger" src="assets/Hamburger_icon.png">
      </div>
      <div class="invisible">
        <a href="#programming" class="navSection">
          <p class="bigTitle">About me</p>
        </a>
        <a href="phoneHtml/trading.html" class="navIcon">
          <img src="assets/stocks.png">
          <p class="subTitle">Trading</p>
        </a>
        <a href="phoneHtml/code.html" class="navIcon">
          <img src="assets/terminal.png">
          <p class="subTitle">Programming</p>
        </a>    
        <a href="#exploring" class="navSection">
          <p class="bigTitle">Hobbys</p>
        </a>
        <a href="phoneHtml/sport.html" class="navIcon">
          <img src="assets/fitness.png">
          <p class="subTitle">Sport</p>
        </a>
        <a href="phoneHtml/music.html" class="navIcon">
          <img src="assets/music.png">
          <p class="subTitle">Music</p>
        </a>
        <a href="#contact" class="navIcon down">
          <img src="assets/qr-code.png">
          <p class="subTitle">Contact</p>
        </a>
      </div> 
    </div>
    <div class="title">
      <p class="bigTitle">Welcome to my personal Website!</p>
      <p class="subTitle">Here you can learn more about me, my hobbies and my journey</p>
    </div>
    <div class="images">
      <img class="img" src="assets/image4.png" />
      <img class="img" src="assets/image2.png" />
      <img class="img" src="assets/image3.png" />
      <img class="img" src="assets/image1.png" />
      <img class="img" src="assets/image10.png" />
      <img class="img" src="assets/image11.png" />
    </div>
    <div id="programming" class="images under">
        <img class="img" src="assets/image5.png" />
        <img class="img" src="assets/image12.png" />
        <img class="img" src="assets/image7.png" />
        <img class="img" src="assets/image6.png" />
        <img class="img" src="assets/image13.png" />
        <img class="img" src="assets/image9.png" />
        <img class="img" src="assets/image8.png" />
    </div>
    <div class="sec2">
      <div class="sec2Title">
        <p class="subTitle">Experienced</p>
        <p class="bigTitle"> Expert in Programming</p>
      </div>
      <div class="sec2Container">
        <div class="ll">
          <img src="assets/programming.png">
        </div>
        <div class="rr">
          <a href="code.html" class="button">
            <p class="subTitle">Learn more</p>
          </a>
          <a href="#contact" class="button">
              <p class="subTitle">Contact</p>
          </a>
        </div>
      </div>
      <div class="sec2Container">
        <p class="subTitle" style="font-size: 35px;">With a strong background in programming, I bring extensive 
          knowledge and expertise to help you achieve your goals.</p>  
      </div>
    </div>
    <div id="exploring" class="sec3">
      <p class="bigTitle">Exploring</p>
    </div>
    <div class="exploring-container">
      <a href="sport.html">
          <div id="sport" class="exploring-card">
              <div class="img-container">
                  <img class="exploring-icon" src="assets/Rectangle 35.png" />
              </div>
              <div class="subTitle bold-text">Constantly seeking new adventures and pushing my limits.</div>
              <div class="subTitle card-text">I find solace and inspiration in pursuing my hobbies and interests.</div>
              <div class="subTitle"><a href="sport.html">Learn more ></a></div>
          </div>
      </a>
      <a href="music.html">
          <div id="music" class="exploring-card">
              <div class="img-container">
                  <img class="exploring-icon" src="assets/Rectangle 35.png" />
              </div>
              <div class="subTitle bold-text">Diving into the world of music and exploring different genres.</div>
              <div class="subTitle card-text">Music has the power to transport me<br/>to different worlds and broaden my perspective</div>
              <div class="subTitle"><a href="music.html">Learn more ></a></div>
          </div>
      </a>
      <a href="trading.html">
          <div id="trading" class="exploring-card">
              <div class="img-container">
                  <img class="exploring-icon" src="assets/Rectangle 35.png" />
              </div>
              <div class="subTitle bold-text">Trading Journey</div>
              <div class="subTitle card-text">Follow along as I navigate the worldof trading</div>
              <div class="subTitle"><a href="trading.html">Learn more ></a></div>
          </div>
      </a>
    </div>
    <div class="sec4">
      <div class="sec2Title">
        <p class="bigTitle">Discover</p>
        <p class="subTitle">Explore the different Sections of the website to learn more about me</p>
      </div>
      <div class="sec2Title">
        <a id="contact" href="#programming" class="discover-button">
          <p class="subTitle">Explore</p>
        </a>
      </div>
    </div>
    <div id="contact" class="sec5">
      <p class="bigTitle">Contact</p>
      <p class="subTitle">If you have any professional inquiries or would like to collaborate, please feel free to reach out to me</p>
      <div class="sec5-container">
        <div>
          <a href="mailto:eschuck58@gmail.com" target="_blank">
            <div class="contact-background">
                <img class="contact-image" src="assets/Email-Open-mail-icon-Graphics-13342456-1-1-580x376 1.png" />
                <p class="bigTitle">Email</p>
            </div>
          </a>
          <a href="https://www.instagram.com/_ericschuck_/" target="_blank">
            <div class="contact-background">
                <img class="contact-image" src="assets/Instagram_icon 1.png" />
                <p class="bigTitle">Instagram</p>
            </div>
          </a>
          <a href="https://github.com/Eric-Alexander-07" target="_blank">
            <div class="contact-background">
                <img class="contact-image" src="assets/Git_icon 1.png" />
                <p class="bigTitle">Git</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="footer h"></div>
    <div class="footer1"></div>
    <div class="footer2">
      <div class="footer-Container">
          <img class="navImg" src="assets/Profilbild 2.png" />
      </div>
      <div class="footer-Container">
          <p class="footer-title">About me</p>
          <a href="trading.html" class="subTitle">Trading</a>
          <a href="code.html" class="subTitle">Programming</a>
      </div>
      <div class="footer-Container">
          <p class="footer-title">Hobbys</p>
          <a href="music.html" class="subTitle">Music</a>
          <a href="sport.html" class="subTitle">Sport</a>
      </div>
    </div>
    <div class="footer"></div>
    <div class="footer3">
      <div>
        <p class="subTitle">© All rights reserved</p>
      </div>
      <div>
        <img class="footer-image" src="assets/Group 4.png" />
      </div>
    </div>
  </body>
  `
}

var check = false;

function activate () {
  check = !check;
  if (check === true) {
    document.querySelector('.navCircle').classList.add('activate');
    document.querySelector('.hamContainer').classList.add('ham');
    document.querySelector('.invisible').classList.add('shown');
  } else {
    document.querySelector('.navCircle').classList.remove('activate');
    document.querySelector('.hamContainer').classList.remove('ham');
    document.querySelector('.invisible').classList.remove('shown');
  }
}