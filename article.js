var cnIsShown = false;
function showMandarin() {
  var elements = document.getElementsByClassName("cn");
  for (element of elements) {
    element.classList.remove('hidden');
  }
  cnIsShown = true;
  document.getElementById('cn-link').innerHTML = '隐藏中文';
};

function hideMandarin() {
  var elements = document.getElementsByClassName("cn");
  for (element of elements) {
    element.classList.add('hidden');
    document.getElementById('cn-link').innerHTML = '杀对了吗？';
  }
  cnIsShown = false;
};

function handleMandarin() {
  if (cnIsShown) {
    hideMandarin();
  } else {
    showMandarin();
  }
}
