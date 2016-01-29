/**
 * Created by xbindt on 1/25/2016.
 */
/**
 * @module Journey
 *
 arrival: "2016-01-26T18:38"
 departure: "2016-01-26T17:50"
 fareInfo: Object
 fasterJourneyId: null
 id: "fromRef=den-haag/vlierboomstraat-260&toRef=station-rotterdam-centraal&searchType=departure&dateTime=2016-01-26T17:50&interchangeTime=standard&sequence=1&modes=train:true,bus:true,subway:true,tram:true,ferry:false"
 legs: Array[4]
 ludMessages: Array[0]
 numberOfChanges: 1
 *
 */


class Journey {

    /**
     * @param {HTMLElement} element - The HTMLElement this module is constructed upon
     * @param {Object} options - ConditionerJS's merged options
     */
    constructor(element,options) {
        this._element = element;
        this._options = options;
        //this.value = '';
        /*var arrivalDate = '',
            departureDate = '',
            fareInfo = {},
            fasterJourneyId = '',
            id = '',
            legs = [],
            ludMessages = [],
            numberOfChanges = 0;*/
    }

    /**
     * Base options
     */
    static get options() {}

    /**
     * Construct module
     */
    load() {
        console.log(arrivalDate)
    }

    get arrivalDate(){
        return this._arrivalDate;
    }
    set arrivalDate(date){
        this._arrivalDate = new Date(date);
    }//"2016-01-26T18:38"

    get departureDate(){
        return this._departureDate;
    }
    set departureDate(date){
        this._departureDate = new Date(date);
    } //"2016-01-26T17:50"

    get fareInfo(){
        return this._fareInfo;
    }
    set fareInfo(obj){
        this._fareInfo = obj;
    } //Object

    get fasterJourneyId(){
        return this._fasterJourneyId;
    }
    set fasterJourneyId(str){
        this._fasterJourneyId = str;
    } //null

    get id(){
        return this._id;
    }
    set id(str){
        this._id = str;
    }
    //"fromRef=den-haag/vlierboomstraat-260&toRef=station-rotterdam-centraal&searchType=departure&dateTime=2016-01-26T17:50&interchangeTime=standard&sequence=1&modes=train:true,bus:true,subway:true,tram:true,ferry:false"

    get legs(){
        return this._legs;
    }
    set legs(arr){
        this._legs = arr;
    } //Array[4]

    get ludMessages(){
        return this._ludMessages;
    }
    set ludMessages(arr){
        this._ludMessages = arr;
    } //Array[0]

    get numberOfChanges(){
        return this._numberOfChanges;
    }
    set numberOfChanges(int){
        this._numberOfChanges = int;
    } //1

    putOnStage(){

        var listElement = document.createElement('li');
        var duration = new Date(this._arrivalDate-this._departureDate);


        var template =`<p>`+
        `${this._departureDate.getHours()}:${this._departureDate.getMinutes()}<span>-</span>`+
        `${this._arrivalDate.getHours()}:${this._arrivalDate.getMinutes()}`+
        `</p>`+
        `<dl>`+
        `<dt>overstappen</dt>`+
        `<dd>2</dd>`+
        `<dt>totale reistijd</dt>`+
        `<dd>${duration.getHours()}:${duration.getMinutes()}</dd>`+
        `</dl>`;

        listElement.innerHTML = template;
        this._element.appendChild(listElement);
    }

    /**
     * Deconstruct module
     */
    unload() {}
}

// Exports
export default Journey;

