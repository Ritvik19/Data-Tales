var params = new URLSearchParams(location.search);
var q = params.get('q')
var filepath

function createContent(heading, description, i, m) {
    content = '<div class="w3-col s12 m4">' + '\n'
    content += '<div class="card">' + '\n'
    content += '<div class="card-content">' + '\n'
    content += '<span class="card-title"><h5>' + heading + '</h5></span>' + '\n'
    content += '<h6>' + description + '</h6>' + '\n'
    content += '</div>' + '\n'
    content += '<div class="card-action">' + '\n'
    content += '<a href="/Teasers/?q=' + m + (i + 1) + '">View</a>' + '\n'
    content += '</div>' + '\n'
    content += '</div>' + '\n'
    content += '</div>' + '\n'
    return content;
}

if (q == null) {
    document.getElementsByTagName('main')[0].innerHTML = '<h1 class="w3-center">Data Tales: Teasers</h1>' +
        '<h4 class="w3-center">Visual Representation of Facts and Stats</h4>' +
        '<div class="w3-row-padding"> </div>';
    var grid = document.getElementsByClassName('w3-row-padding')[0]
    for (i = 0; i < headings.length; i++)
        grid.innerHTML += createContent(headings[i], descriptions[i], i, '')

    for (i = 0; i < headings2.length; i++)
        grid.innerHTML += createContent(headings2[i], descriptions2[i], i, 'm')

} else {
    teasers = document.getElementById('teasers');
    for (i = 0; i < headings.length; i++) {
        if (q.charAt(0) != 'm' && i == q - 1)
            teasers.innerHTML += '<li class="collection-item active"><a href="/Teasers/?q=' +
            (i + 1) + '"> <h5>' + headings[i] + '</h5><h6>' + descriptions[i] + '</h6> </a></li>'
        else
            teasers.innerHTML += '<li class="collection-item"><a href="/Teasers/?q=' +
            (i + 1) + '"> <h5>' + headings[i] + '</h5><h6>' + descriptions[i] + '</h6> </a></li>'
    }
    for (i = 0; i < headings2.length; i++) {
        console.log('Inside Second loop')
        if (q.charAt(0) == 'm' && i == q.substring(1) - 1)
            teasers.innerHTML += '<li class="collection-item active"><a href="/Teasers/?q=m' +
            (i + 1) + '"> <h5>' + headings2[i] + '</h5><h6>' + descriptions2[i] + '</h6> </a></li>'
        else
            teasers.innerHTML += '<li class="collection-item"><a href="/Teasers/?q=m' +
            (i + 1) + '"> <h5>' + headings2[i] + '</h5><h6>' + descriptions2[i] + '</h6> </a></li>'
    }

    if (q.charAt(0) == 'm') {
        filepath = '/Teasers/' + q + '.html'
        document.getElementById('plot').innerHTML += '<iframe width="100%"  height="500px" src="' +
            filepath + '" style="border: none"></iframe>';
        document.getElementById('title').innerHTML = headings2[q.substring(1) - 1];
        document.getElementById('description').innerHTML = descriptions2[q.substring(1) - 1];
    } else {
        document.getElementById('plot').innerHTML += '<canvas></canvas>';
        var ctx = document.getElementsByTagName('canvas')[0];
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
        document.getElementById('title').innerHTML = headings[q - 1];
        document.getElementById('description').innerHTML = descriptions[q - 1];
    }
}