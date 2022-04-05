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
        let button = document.createElement("button");
        let lbutton = document.createElement("button");
        let likebutton = document.createElement("button");
        let numberoflikes = document.createElement("p");

        portrait.setAttribute('scr', temples.imageurl);
        portrait.setAttribute('alt', 'Photo of ' + temples.templename);
        h2.textContent = temples.templename;
        address.innerHTML = `${temples.address}`
        address.setAttribute ('class', `temaddress`);
        Tel.innerHTML = `<b>Telephone:</b> ${temples.Tel}`
        lbutton.innerHTML = `<b>More info</b>`
        links.setAttribute ('href', temples.link);
        schedlinks.setAttribute ('href', temples.schedapplink)
        address.innerHTML = `${temples.address}`
        email.innerHTML = `<b>Email:</b> ${temples.email}`
        button.innerHTML = `<b>Schedule An Appointment</b>`
        services.innerHTML = `<b>Services:</b> ${temples.services}`
        likebutton.innerHTML = `Like &#9825;`
        numberoflikes.innerHTML = "";
        numberoflikes.setAttribute ('class', `root`);
        likebutton.setAttribute ('class', `like`);
        likebutton.setAttribute ( 'onclick', `plusOne()`)


        card.appendChild(portrait);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(Tel);
        card.appendChild(email);
        card.appendChild(services);
        card.appendChild(links);
        links.appendChild(lbutton);
        card.appendChild(schedlinks);
        schedlinks.appendChild(button);
        card.appendChild(schedlinks);
        card.appendChild(likebutton);
        card.appendChild(numberoflikes)
        templelist.appendChild(card);
    }
