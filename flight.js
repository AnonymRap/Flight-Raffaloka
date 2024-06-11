const countrySelect = document.getElementById('countrySelect');
const flightList = document.getElementById('flightList');

countrySelect.addEventListener('change', function() {
    const selectedCountry = this.value;
    let flights = [];

    // Simulated flight data for demonstration
    switch(selectedCountry) {
        case 'usa':
            flights = [
                { airline: 'Garuda Air Lines', price: '$300' },
                { airline: 'Batik Air Lines', price: '$320' },
                { airline: 'Qatar Airways', price: '$310' }
            ];
            break;
        case 'uk':
            flights = [
                { airline: 'British Airways', price: '£250' },
                { airline: 'Jomok Atlantic', price: '£280' },
                { airline: 'Ryanair', price: '£200' }
            ];
            break;
        case 'france':
            flights = [
                { airline: 'Raffael Airways', price: '€350' },
                { airline: 'EasyJet', price: '€300' },
                { airline: 'Transavia France', price: '€280' }
            ];
            break;
        default:
            flights = [];
    }

    displayFlights(flights);
});

function displayFlights(flights) {
    flightList.innerHTML = '';

    if (flights.length === 0) {
        flightList.innerHTML = '<p>No flights available for selected destination</p>';
        return;
    }

    flights.forEach(flight => {
        const flightItem = document.createElement('div');
        flightItem.classList.add('flight-item');
        flightItem.innerHTML = `<strong>${flight.airline}</strong> - ${flight.price} <button class="book-btn">Book</button>`;
        flightList.appendChild(flightItem);
    });

    // Add event listener for book button
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const airline = this.parentElement.textContent.split(' - ')[0];
            const price = this.parentElement.textContent.split(' - ')[1].split(' ')[0];

            bookFlight(airline, price);
        });
    });
}

function bookFlight(airline, price) {
    flightList.innerHTML = `<p>Thank you for booking your flight with ${airline} for ${price}! Have a safe trip!</p>`;
}
