$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

main = document.getElementsByTagName('main')[0]

function createContent(heading, description, i, m) {
    content = '<div class="col s12 m4">' + '\n'
    content += '<div class="card darken-1">' + '\n'
    content += '<div class="card-content">' + '\n'
    content += '<span class="card-title"><h5>' + heading + '</h5></span>' + '\n'
    content += '<h6>' + description + '</h6>' + '\n'
    content += '</div>' + '\n'
    content += '<div class="card-action">' + '\n'
    content += '<a href="/Teasers/?q=' + m + (i + 1) + '" target="_blank">View</a>' + '\n'
    content += '</div>' + '\n'
    content += '</div>' + '\n'
    content += '</div>' + '\n'
    return content;
}

for (i = 0; i < headings.length; i++)
    main.innerHTML += createContent(headings[i], descriptions[i], i, '')

for (i = 0; i < headings2.length; i++)
    main.innerHTML += createContent(headings2[i], descriptions2[i], i, 'm')