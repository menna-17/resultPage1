fetch('../header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('body').insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Error loading header:', error));



var allCountries = document.getElementsByClassName("view")
for (var i = 0; i < allCountries.length; i++) {
    allCountries[i].addEventListener("click", function () {

        location.assign("file:///D:/allll/Booking/main.html")

    })

}


var filters = document.getElementsByClassName("filter");
for (var i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", function () {
        var filter = this.getAttribute('data-filter');
        filterCountries(filter);
    });
}

function filterCountries(filter) {
    var countries = document.getElementsByClassName("maincountry");


    for (var i = 0; i < countries.length; i++) {
        var country = countries[i];
        var countryFilters = country.getAttribute('data-filter').split(' ');


        if (filter === 'all' || countryFilters.includes(filter)) {
            country.style.display = 'block';
        } else {
            country.style.display = 'none';
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    filterCountries('all');
});

onload = function () {
    var params = new URLSearchParams(location.search);
    document.getElementById("fromThisCountry").textContent = params.get("from");
    document.getElementById("toThisCountry").textContent = params.get("to");
    document.getElementById("dateOftakeoff").textContent = params.get("takeoff");
    document.getElementById("dateOfreturn").textContent = params.get("return");
};




function updateCountryContent() {

    var params = new URLSearchParams(location.search);
    var destinationCountry = params.get("to").toLowerCase().trim();
    
    var countriesToUpdate = ["italy", "spain", "turkey","morocco","brazil"];


    if (countriesToUpdate.includes(destinationCountry)) {


        var countries = document.getElementsByClassName("maincountry");


        for (var i = 0; i < countries.length; i++) {

            var countryName = countries[i].querySelector('.nameofcountry').textContent.toLowerCase()


            if (destinationCountry === "italy") {

                if (countryName === "edinburgh") {
                    countries[i].querySelector('.nameofcountry').textContent = "Rome";
                    countries[i].querySelector('.country').src = "Rome.jpg";
                    countries[i].querySelector('.money').textContent = "540$";
                }
                else if (countryName === "liverpool") {
                    countries[i].querySelector('.nameofcountry').textContent = "Milan";
                    countries[i].querySelector('.country').src = "Milan.jpg";
                    countries[i].querySelector('.money').textContent = "495$";
                }
                else if (countryName === "london") {
                    countries[i].querySelector('.nameofcountry').textContent = "Venice";
                    countries[i].querySelector('.country').src = "Venice.jpg";
                    countries[i].querySelector('.money').textContent = "750$";
                }
                else if (countryName === "manchester") {
                    countries[i].querySelector('.nameofcountry').textContent = "Amalfi";
                    countries[i].querySelector('.country').src = "Amalfi.jpg";
                    countries[i].querySelector('.money').textContent = "680$";
                }
                else if (countryName === "birmingham") {
                    countries[i].querySelector('.nameofcountry').textContent = "Florence";
                    countries[i].querySelector('.country').src = "Florence.jpg";
                    countries[i].querySelector('.money').textContent = "510$";
                }


            } else if (destinationCountry === "spain") {

                if (countryName === "edinburgh") {
                    countries[i].querySelector('.nameofcountry').textContent = "Barcelona";
                    countries[i].querySelector('.country').src = "Barcelona.jpeg";
                    countries[i].querySelector('.money').textContent = "525$";
                }
                else if (countryName === "liverpool") {
                    countries[i].querySelector('.nameofcountry').textContent = "Madrid";
                    countries[i].querySelector('.country').src = "Madrid.jpg";
                    countries[i].querySelector('.money').textContent = "478$";
                }
                else if (countryName === "london") {
                    countries[i].querySelector('.nameofcountry').textContent = "Ibiza";
                    countries[i].querySelector('.country').src = "Ibiza.jpg";
                    countries[i].querySelector('.money').textContent = "470$";
                }
                else if (countryName === "manchester") {
                    countries[i].querySelector('.nameofcountry').textContent = "Granada";
                    countries[i].querySelector('.country').src = "Granada.jpeg";
                    countries[i].querySelector('.money').textContent = "470$";
                }
                else if (countryName === "birmingham") {
                    countries[i].querySelector('.nameofcountry').textContent = "Seville";
                    countries[i].querySelector('.country').src = "Seville.jpg";
                    countries[i].querySelector('.money').textContent = "395$";
                }


            } else if (destinationCountry === "turkey") {

                if (countryName === "edinburgh") {
                    countries[i].querySelector('.nameofcountry').textContent ="Istanbul" ;
                    countries[i].querySelector('.country').src = "Istanbul.jpg";
                    countries[i].querySelector('.money').textContent = "580$";
                }
                else if (countryName === "liverpool") {
                    countries[i].querySelector('.nameofcountry').textContent = "Cappadocia";
                    countries[i].querySelector('.country').src = "Cappadocia.jpg";
                    countries[i].querySelector('.money').textContent = "495$";
                }
                else if (countryName === "london") {
                    countries[i].querySelector('.nameofcountry').textContent = "Bodrum";
                    countries[i].querySelector('.country').src = "Bodrum.jpg";
                    countries[i].querySelector('.money').textContent = "640$";
                }
                else if (countryName === "manchester") {
                    countries[i].querySelector('.nameofcountry').textContent = "Izmir";
                    countries[i].querySelector('.country').src = "Izmir.jpg";
                    countries[i].querySelector('.money').textContent = "710$";
                }
                else if (countryName === "birmingham") {
                    countries[i].querySelector('.nameofcountry').textContent = "Ankara";
                    countries[i].querySelector('.country').src = "Ankara.jpg";
                    countries[i].querySelector('.money').textContent = "420$";
                }


            }else if (destinationCountry === "morocco") {

                if (countryName === "edinburgh") {
                    countries[i].querySelector('.nameofcountry').textContent = "Marrakesh";
                    countries[i].querySelector('.country').src = "Marrakesh.png";
                    countries[i].querySelector('.money').textContent = "525$";
                }
                else if (countryName === "liverpool") {
                    countries[i].querySelector('.nameofcountry').textContent = "Casablanca";
                    countries[i].querySelector('.country').src = "Casablanca.jpg";
                    countries[i].querySelector('.money').textContent = "478$";
                }
                else if (countryName === "london") {
                    countries[i].querySelector('.nameofcountry').textContent = "Rabat";
                    countries[i].querySelector('.country').src = "Rabat.jpeg";
                    countries[i].querySelector('.money').textContent = "570$";
                }
                else if (countryName === "manchester") {
                    countries[i].querySelector('.nameofcountry').textContent = "Fes";
                    countries[i].querySelector('.country').src = "Fes.jpeg";
                    countries[i].querySelector('.money').textContent = "610$";
                }
                else if (countryName === "birmingham") {
                    countries[i].querySelector('.nameofcountry').textContent = "Agadir";
                    countries[i].querySelector('.country').src = "Agadir.jpg";
                    countries[i].querySelector('.money').textContent = "395$";
                }


            }else if (destinationCountry === "brazil") {

                if (countryName === "edinburgh") {
                    countries[i].querySelector('.nameofcountry').textContent = "Rio de Janeiro";
                    countries[i].querySelector('.country').src = "RiodeJaneiro.jpg";
                    countries[i].querySelector('.money').textContent = "480$";
                }
                else if (countryName === "liverpool") {
                    countries[i].querySelector('.nameofcountry').textContent = "São Paulo";
                    countries[i].querySelector('.country').src = "SãoPaulo.png";
                    countries[i].querySelector('.money').textContent = "525$";
                }
                else if (countryName === "london") {
                    countries[i].querySelector('.nameofcountry').textContent = "Salvador";
                    countries[i].querySelector('.country').src = "Salvador.jpg";
                    countries[i].querySelector('.money').textContent = "704$";
                }
                else if (countryName === "manchester") {
                    countries[i].querySelector('.nameofcountry').textContent = "Brasília";
                    countries[i].querySelector('.country').src = "Brasília.jpg";
                    countries[i].querySelector('.money').textContent = "640$";
                }
                else if (countryName === "birmingham") {
                    countries[i].querySelector('.nameofcountry').textContent = "Fernando de Noronha";
                    countries[i].querySelector('.country').src = "FernandodeNoronha.jpg";
                    countries[i].querySelector('.money').textContent = "580$";
                }


            }
        }
    }
}


document.addEventListener("DOMContentLoaded", updateCountryContent);









