const requestURL = 'https://ino20001.github.io/wdd230/chamber/data/data.json';
const directcard = document.querySelector(".Card");
const directList = document.querySelector(".List");
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    directory.forEach(displayDirectory);
  });

  
  function displayDirectory(directory) {
    //card view
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let info = document.createElement("p");
    let address = document.createElement("p");
    let links = document.createElement("a");
    //listview
    let tr = document.createElement('tr');
    let tdname = document.createElement('td');
    let tdadd = document.createElement('td');
    let tdtel = document.createElement('td');
    let tdlinks = document.createElement('td');
    let tdlink = document.createElement('a');
    
  

    //card view
    h2.textContent = directory.companyname;
    address.innerHTML = `${directory.address}`
    info.innerHTML = `Telephone: ${directory.Tel}`
    links.innerHTML = `${directory.link}`
    links.setAttribute('href', directory.link);
    links.setAttribute('target', `_blank`);
    portrait.setAttribute('src', directory.imageurl);
    portrait.setAttribute('alt', 'Logo of ' + directory.name);
    portrait.setAttribute('loading', 'lazy');
    //list view
    tdname.textContent = directory.companyname;
    tdadd.innerHTML = `${directory.address}`;
    tdtel.textContent = directory.Tel;
    tdlink.innerHTML = `Link here`;
    tdlink.setAttribute('href', directory.link);
    tdlink.setAttribute('target', `_blank`);



   //cardview
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(info);
    card.appendChild(links);
    directcard.appendChild(card);
    //listView

    tr.appendChild(tdname);
    tr.appendChild(tdadd);
    tr.appendChild(tdtel);
    tr.appendChild(tdlinks);
    tdlinks.appendChild(tdlink);
    directList.appendChild(tr);
  };


  function toggleView() {
    const list = document.getElementById("viewOpt");
    list.classList.toggle("listView");
    document.querySelector('.directOpt').classList.toggle("view");
    document.querySelector('.viewOpt').classList.toggle("view");
  }
  
  
  