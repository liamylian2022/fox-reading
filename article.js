var cnIsShown = false;
function showMandarin() {
  var elements = document.getElementsByClassName("cn");
  for (element of elements) {
    element.classList.remove('hidden');
  }
  cnIsShown = true;
  document.getElementById('cn-bn').innerHTML = '隐藏中文翻译';
};

function hideMandarin() {
  var elements = document.getElementsByClassName("cn");
  for (element of elements) {
    element.classList.add('hidden');
    document.getElementById('cn-bn').innerHTML = '显示中文翻译';
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
