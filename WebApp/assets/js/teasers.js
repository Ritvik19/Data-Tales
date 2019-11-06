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


$(document).ready(function(){
  $('.sidenav').sidenav();
});

document.getElementById('title').innerHTML = headings[q-1];
document.getElementById('description').innerHTML = descriptions[q-1];

teasers = document.getElementById('teasers');
for(i=0; i< headings.length; i++){
  teasers.innerHTML += '<li class="collection-item"><a href="/Teasers/?q='+(i+1)+'"> <h5>'+headings[i]+'</h5><h6>'+descriptions[i]+'</h6> </a></li>'
}
