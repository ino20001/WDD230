const requestURL = 'https://ino20001.github.io/wdd230/chamber/data/data.json';
const directlist = document.querySelector(".directList");
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    directory.forEach(displayDirectory);
  });

  
  function displayDirectory(directory) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let info = document.createElement("p");
    let address = document.createElement("p");
    let links = document.createElement("a");
  
    h2.textContent = directory.companyname;

    address.innerHTML = `${directory.address}`
    info.innerHTML = `Telephone: ${directory.Tel}`
    links.innerHTML = `${directory.link}`

    links.setAttribute('href', directory.link);
    portrait.setAttribute('src', directory.imageurl);
    portrait.setAttribute('alt', 'Logo of ' + directory.name);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(info);
    card.appendChild(links);
    directlist.appendChild(card);
  }
  
  
  