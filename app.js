// variable selection

const checkBox = document.querySelector(".checkbox");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    //console.log('checked')
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    //console.log('not checked')
  }
}

checkBox.addEventListener("change", switchTheme, false);
