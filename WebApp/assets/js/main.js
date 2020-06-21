$(document).ready(function() {
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });
});

main = document.getElementsByTagName("main")[1].getElementsByTagName("div")[0];

function createContent(heading, description, i, m) {
    content = ""
    content += '<div class="w3-card w3-padding-large card">' + "\n";
    content += '<h5>' + heading + "</h5>" + "\n";
    content += "<h6>" + description + "</h6>" + "\n";
    content += "<hr>" + "\n";
    content +=
        '<a href="/Teasers/?q=' + m + (i + 1) + '" target="_blank">View</a>' + "\n";
    content += "</div>" + "\n";
    return content;
}

for (i = 0; i < headings.length; i++)
    main.innerHTML += createContent(headings[i], descriptions[i], i, "");

for (i = 0; i < headings2.length; i++)
    main.innerHTML += createContent(headings2[i], descriptions2[i], i, "m");