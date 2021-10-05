class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(bool) {
        this._isCheckedOut = bool;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(ratingArray) {
        // const array1 = [1, 2, 3, 4];
        const reducer = (previousValue, currentValue) =>
            previousValue + currentValue;

        return ratingArray.reduce(reducer) / ratingArray.length;
    }
    addRating(rating) {
        this.ratings.push(rating);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
        return this._runTime;
    }
    get runTime() {
        return this._runTime;
    }
    getAverageRating() {
        return this._ratings;
    }
    toggleCheckOutStatus(bool) {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(ratings) {
        this._ratings.push(ratings);
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

console.log(historyOfEverything)
