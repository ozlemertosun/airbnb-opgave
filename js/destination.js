
let url = window.location.search; 

let params = new URLSearchParams(url);

//console.log(params);
//console.log viser den indstans url giver

let houseId = params.get("houseId");
//console.log(houseId);

let header = document.querySelector("#headerDestination");

fetch("./json/gallery.json")
    .then(response => response.json())
    .then( data => {
        data.gallery.forEach(element => {
            if(element.id = houseId)
            header.innerHTML = `
            <h1 class="Heading-size-l">${element.title}<h1>
            `;  
        });
       
    })


