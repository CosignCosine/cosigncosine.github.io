console.log('version 2')
var editor = ace.edit("editor");
editor.setTheme("ace/theme/sqlserver");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
  fontFamily: "Inconsolata",
  fontSize: "17px"
});
var oldValue = editor.getValue();
if(localStorage.strung){
  editor.setValue(localStorage.strung);
}

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
document.addEventListener("keyup", debounce(fini, 100, false));

function canvasAlert(){
  document.write('hi');
}
function fini () {
  if(oldValue !== editor.getValue()){
    var output = "<!DOCTYPE HTML><html><head><title>easter egg<\/title><script src=\"p5.min.js\"><\/script></head><body><div id=\"holder\" style=\"position: fixed; top: 0; left: 0; height: 100%; width: 100;\"></div><script type=\"text/javascript\">try{function setup() {var canvas = createCanvas(windowWidth, windowHeight);canvas.parent('holder');background(255, 0, 200);" + editor.getValue() + '};function windowResized() {resizeCanvas(windowWidth, windowHeight);};}catch(e){console.log(e)}<\/script><\/body><\/head>';
    document.getElementById("live").srcdoc = output;
    oldValue = editor.getValue();
    localStorage.strung = editor.getValue();
    document.getElementById("live").contentWindow.onerror = document.getElementById("live").contentWindow.onError = function() {
      alert('error!!');
      return false;
    };
  }
}
