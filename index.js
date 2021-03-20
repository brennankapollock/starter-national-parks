const ratingSorter = document.querySelector("#ratingSorter");

ratingSorter.addEventListener("click", (event) => {
    event.preventDefault();

    const main = document.querySelector("main");
    const ratingList = main.querySelectorAll(".park");
    main.innerHTML = " ";
    const ratingsArray = Array.from(ratingList);

    ratingsArray.sort((ratingA, ratingB) => {
        const ratingValueA = parseFloat(ratingA.querySelector(".rating > .value").innerText);
        const ratingValueB = parseFloat(ratingB.querySelector(".rating > .value").innerText);
        return ratingValueB - ratingValueA;
    });

    ratingsArray.forEach((rating) => {
        main.appendChild(rating);
    });
});






const nameSorter = document.querySelector("#nameSorter");

nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park");
    main.innerHTML = " ";
    const parksArray = Array.from(parksList);

    parksArray.sort((parkA, parkB) => {
        const parkNameA = parkA.querySelector("h2").innerText;
        const parkNameB = parkB.querySelector("h2").innerText;
        if (parkNameA < parkNameB) {
            return -1;
        } else if (parkNameA > parkNameB) {
            return 1;
        } else {
            return 0;
        }
    });

    parksArray.forEach((park) => {
        main.appendChild(park);
    });
});