export class Evaluate {
    constructor(joke, score, date) {
        this._joke = joke;
        this._score = score;
        this._date = date;
    }

    get joke() {
        return this._joke;
    }
     
    set joke(joke) {
        this._joke = joke;
    }

    get score() {
        return this._score;
    }
     
    set score(score) {
        this._score = score;
    }

    get date() {
        return this._date;
    }
     
    set date(date) {
        this._date = date;
    }

    storeEvaluation(evObj, arr) {
        return arr.push(evObj);
    } 
}   

