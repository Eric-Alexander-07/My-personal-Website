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