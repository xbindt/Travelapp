/**
 * @module Search
 * https://developers.google.com/maps/documentation/javascript/directions?hl=en
 */
//import * as googlemap from 'googlemap';
import Journey from './Journey'

class Search {

    /**
     * @param {HTMLElement} element - The HTMLElement this module is constructed upon
     * @param {Object} options - ConditionerJS's merged options
     */
    constructor(element, options) {
        this._element = element;
        this._options = options;
        this._form = this._element.querySelector('form');
        this.searchResultContainer = this._element.querySelector('.searchresultcontainer');

        this.load();
    }

    /**
     * Base options
     */
    static get options() {}

    /**
     * Construct module
     */
    load() {
        this._form.addEventListener('submit', this.onsubMit.bind(this))


    }

    onsubMit(event){
        event.preventDefault();
        var params = {
            'before': 1,
            'sequence': 1,
            'byFerry': false,
            'bySubway': true,
            'byBus': true,
            'byTram': true,
            'byTrain': true,
            'lang': 'nl-NL',
            'from': 'den-haag_vlierboomstraat-260',
            'dateTime': '2016-01-26T1754',
            'searchType': 'departure',
            'interchangeTime': 'standard',
            'after': 5,
            'to': 'station-rotterdam-centraal'
        };

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.onDirectionsServiceResponse.bind(this));
        oReq.open("GET", "//localhost:3002/9292");
        oReq.send(params);

    }

    onDirectionsServiceResponse(response){
        // Display the route on the page.
        this.plotDirections(JSON.parse(response.target.responseText));
    }

    plotDirections(response){
        console.log(response)
        response.journeys.forEach(this.createJourneys.bind(this));
    }

    createJourneys(journeyData){
        var list = document.createElement('ul');
        this.searchResultContainer.appendChild(list);
        var journey = new Journey(list);
        journey.arrivalDate = journeyData.arrival;
        journey.departureDate = journeyData.departure;
        journey.fareInfo = journeyData.fareInfo;
        journey.numberOfChanges = journeyData.numberOfChanges;
        journey.legs = journeyData.legs;
        journey.putOnStage();
    }


    /**
     * Deconstruct module
     */
    unload() {}
}

// Exports
export default Search;
