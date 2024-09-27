var places, links;


places = ['Gidan sarki', 'Gobarau minaret', 'kusugu well'];

links = ['https://ha.wikipedia.org/wiki/Gidan_Korau_(Masarautar_Katsina)', 'https://en.wikipedia.org/wiki/Gobarau_Minaret', 'https://en.wikipedia.org/wiki/Kusugu'];


document.getElementById('btn-tap').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  if (!!places.length) {
    let new_li = document.createElement('li');
    new_li.innerText = places.shift();

    element_list.appendChild(new_li);
    let new_span = document.createElement('span');
    let new_a = document.createElement('a');
    new_a.setAttribute("href", links);
    new_a.innerText = links.shift();

    new_span.appendChild(new_a);

    element_list.appendChild(new_span);
  }

});