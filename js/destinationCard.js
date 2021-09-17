

let DestinationCard = document.querySelector(".Destination-card__wrapper");

fetch("./json/destination_card.json")
.then(response => response.json())
.then (data => {
    data.Destination.forEach(selectionElement => {
        DestinationCard.innerHTML += ` 
        <a class="a-reset" href="destination.html?houseId=${selectionElement.id}">
        <article class="Destination-card">
                        
        <div class="Destination-card__image-wrap">
            <img class="Destination-card__image Destination-card__image_superhost_true" src="./images/${selectionElement.image[0]}" alt="Sommerhus Orø udendørs">
        </div>

        <div class="Destination-card__paragraph-wrapper">
            
            <div class="flex-container">
                <div>
                    <p class="Destination-card__destination">${selectionElement.subtitle}</p>
                    <p class="Destination-card__destination-title">${selectionElement.title}</p>
                </div>
                    <i class="far fa-heart Destination-card__icon-heart"></i>
            </div>

            <div class="Destination-card__ruler"></div>

            <p class="Destination-card__features">${selectionElement.features}</p>
            <p class="Destination-card__ratings"> <i class="fas fa-star Destination-card__icon-star"></i> <span class="bold-font">${selectionElement.ratingScore}</span> (${selectionElement.ratingReview} omtaler)</p>
        </div>
    </article> 
    </a><!--end of article-->`;
});
});
;


    

