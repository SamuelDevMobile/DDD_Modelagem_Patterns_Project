export default class Address {

    _street: string = "";
    _number: number = 0;
    _zip: string = "";
    _city: string = "";

    constructor(_street: string, _number: number, zip: string, city: string) {
        this._street = _street;
        this._number = _number;
        this._zip = zip;
        this._city = city;
        this.validate();
    }

    validate() {
        if ( this._street.length === 0) {
            throw Error("Street is required");
        }
        if (this._number === 0) {
            throw Error("Number is required");
        }
        if (this._zip.length === 0) { 
            throw Error("Zip is required");
        }
        if (this._city.length === 0) {
            throw Error("City is required");
        }
    }

    toString() {
        return `${this._street}, ${this._number}, ${this._zip} ${this._city}`;
    }
}