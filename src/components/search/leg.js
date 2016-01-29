/**
 * Created by xbindt on 1/25/2016.
 */
/**
 * @module Journey
 *
 */


class Leg {

    /**
     * @param {HTMLElement} element - The HTMLElement this module is constructed upon
     * @param {Object} options - ConditionerJS's merged options
     */
    constructor(element, legData ,options) {
        this._element = element;
        this._legData = legData;
        this._options = options;


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
        console.log(this._legData)

    }


    /**
     * Deconstruct module
     */
    unload() {}
}

// Exports
export default Leg;

