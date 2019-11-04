headings = ['Most Popular Programming Languages', 'Most Popular Data Base', 'Most Popular Programming Platform', 'Most Popular Web FrameWork', 'Most Popular Technologies', 'Most Popular Development Environment', 'Most Popular Operating System Among Programmers']
descriptions = ['Stack Overflow Developer Survey 2019', 'Stack Overflow Developer Survey 2019', 'Stack Overflow Developer Survey 2019', 'Stack Overflow Developer Survey 2019', 'Stack Overflow Developer Survey 2019', 'Stack Overflow Developer Survey 2019', 'Stack Overflow Developer Survey 2019']
main = document.getElementsByTagName('main')[0]

function createContent(heading, description, i) {
  content = '<div class="col s6 m4">' + '\n'
  content += '<div class="card darken-1">' +'\n'
  content += '<div class="card-content">' +'\n'
  content += '<span class="card-title"><h5>' +heading+ '</h5></span>' + '\n'
  content += '<h6>' +description+ '</h6>' + '\n'
  content += '</div>' + '\n'
  content += '<div class="card-action">' + '\n'
  content += '<a href="/Teasers/?q='+(i+1)+'" target="_blank">View</a>' + '\n'
  content += '</div>' + '\n'
  content += '</div>' + '\n'
  content += '</div>' + '\n'
  return content;
}

for(i=0; i< headings.length; i++)
  main.innerHTML += createContent(headings[i], descriptions[i], i)
