var params = new URLSearchParams(location.search);
var q = params.get('q')
var ctx = document.getElementsByTagName('canvas')[0];
var filepath
if (q.charAt(0) == 'm') {
    filepath = '/Teasers/' + q + '.html'
    document.getElementById('plot').innerHTML = '<iframe width="100%"  height="500px" src="' + filepath + '" style="border: none"></iframe>';
} else {
    var xhttp = new XMLHttpRequest();
    filepath = q + '.json'
    console.log(filepath)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var dataObj = JSON.parse(this.responseText);
            var myChart = new Chart(ctx, dataObj);
        }
    };
    xhttp.open("GET", filepath, true);
    xhttp.send();
}

$(document).ready(function() {
    $('.sidenav').sidenav();
});

if (q.charAt(0) == 'm') {
    document.getElementById('title').innerHTML = headings2[q.substring(1) - 1];
    document.getElementById('description').innerHTML = descriptions2[q.substring(1) - 1];
} else {
    document.getElementById('title').innerHTML = headings[q - 1];
    document.getElementById('description').innerHTML = descriptions[q - 1];
}

teasers = document.getElementById('teasers');
for (i = 0; i < headings.length; i++) {
    teasers.innerHTML += '<li class="collection-item"><a href="/Teasers/?q=' + (i + 1) + '"> <h5>' + headings[i] + '</h5><h6>' + descriptions[i] + '</h6> </a></li>'
}

for (i = 0; i < headings2.length; i++) {
    teasers.innerHTML += '<li class="collection-item"><a href="/Teasers/?q=m' + (i + 1) + '"> <h5>' + headings2[i] + '</h5><h6>' + descriptions2[i] + '</h6> </a></li>'
}