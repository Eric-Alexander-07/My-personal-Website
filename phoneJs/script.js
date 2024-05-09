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