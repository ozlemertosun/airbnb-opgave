let hostInformation = document.querySelector(".Host-info");

fetch("./json/host.json")
.then(response => response.json())
.then ( data => {
    data.Host.forEach(element => {
    hostInformation.innerHTML +=  `
    <div class="Host-info__flex-container">
        <div class="Host-info__image-container">
        <img class="Host-info__host_image" src="images/${element.hostImage}" alt="picture of host Morten">
    </div>
    
     <div class="Host-info__user-information">
         <h2 class="Heading-size-m">Hils på din vært, ${element.hostName}</h2>
         <p class="Host-info__host-since">Vært siden ${element.hostSince.month} ${element.hostSince.year}</p>
         <div class="Host-info__about-host-wrap">
             <p class="right-padding"><i class="fas fa-star icon-red icon-gap"></i>${element.hostInfoList.hostReview} omtaler</p>
             <p class="right-padding"><i class="far fa-thumbs-up icon-red icon-gap"></i>Idenditet bekræftet</p>
             <p><i class="fas fa-medal icon-red icon-gap"></i>Superhost</p>
         </div>
     </div> <!-- end of Host-info__user-information-->
    </div>  <!--end of Host-info__flex-container-->
    
    <h3 class="Heading-size-s">Morten er Superhost</h3>
    <p class="Host-info__superhost-info">Superhosts er erfarne værter med gode anmeldelser, der dedikerer dere tid til at give deres gæster et godt ophold.</p>
    <p class="Host-info__answer-time">Morten svarer som regel inden for en time.</p> 
    
    <a class="button-style" href="#">Stil Morten et spørgsmål</a>
    
    <div class="safety-wrapper margin-top margin-bottom">
    <i class="fas fa-shield-alt shield-icon"></i>
    <p class="safety-text">For at beskytte din betaling skal du aldrig overføre penge eller kommunikere uden for Airbnb's hjemmeside eller app</p>
    </div>
        `;
});
});
;