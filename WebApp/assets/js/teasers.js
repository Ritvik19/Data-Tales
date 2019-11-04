var params = new URLSearchParams(location.search);
var q = params.get('q')
var ctx = document.getElementsByTagName('canvas')[0];
var xhttp = new XMLHttpRequest();
var filepath = q+'.json'
console.log(filepath)
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   var dataObj = JSON.parse(this.responseText);
   var myChart = new Chart(ctx, dataObj);
  }
};
xhttp.open("GET", filepath, true);
xhttp.send();
