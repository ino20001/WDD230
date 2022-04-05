const requestURL = 'https://ino20001.github.io/wdd230/final-project/data/temples.json';
const templelist = document.querySelector(".templeList");
fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        const temples = jsonObject['Temples'];
        temples.forEach(displayDirectory);
    });


    function displayDirectory(temples) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let address = document.createElement("p");
        let Tel = document.createElement("p");
        let email = document.createElement("p");
        let services = document.createElement("p")
        let links = document.createElement("a");
        let schedlinks = document.createElement("a");

        portrait.setAttribute('scr', temples.imageurl);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('alt', 'Photo of ' + temples.templename);
        h2.textContent = temples.templename;
        address.innerHTML = `${temples.address}`
        Tel.innerHTML = `Telephone: ${temples.Tel}`
        links.innerHTML = `${temples.link}`
        links.setAttribute ('href', temples.link);
        address.innerHTML = `${temples.address}`
        email.innerHTML = `Email: ${temples.email}`
        schedlinks.innerHTML = `${temples.schedapplink}`
        schedlinks.setAttribute = ('href', temples.schedapplink);
        services.innerHTML = `${temples.services}`

        card.appendChild(portrait);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(Tel);
        card.appendChild(email);
        card.appendChild(services);
        card.appendChild(schedlinks);
        templelist.appendChild(card);
    }
