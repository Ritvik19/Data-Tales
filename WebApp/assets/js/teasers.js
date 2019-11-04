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

mob = document.getElementById('mobile-demo');
teasers = document.getElementById('teasers');
for(i=0; i< headings.length; i++){
  mob.innerHTML += '<li><a href="/Teasers/?q='+(i+1)+'"> <h5>'+headings[i]+'</h5><h6>'+descriptions[i]+'</h6> </a></li>'
  teasers.innerHTML += '<li class="collection-item"><a href="/Teasers/?q='+(i+1)+'"> <h5>'+headings[i]+'</h5><h6>'+descriptions[i]+'</h6> </a></li>'
}
