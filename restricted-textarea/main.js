var el_t = document.getElementById('textarea');
var length = el_t.getAttribute("maxlength");
var el_c = document.getElementById('count');
el_c.innerHTML = length;
el_t.onkeyup = function () {
  document.getElementById('count').innerHTML = (length - this.value.length);
};