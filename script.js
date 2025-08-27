class Heartbeat {

constructor(onFlashRate, offFlashRate) { // <!-- add the flash rate parameters
    this._element = document.createElement('div');
    this._intervalId = null;
    this.onFlashRate = onFlashRate;
    this.offFlashRate = offFlashRate;
}

on() {
    clearInterval(this._intervalId);
    this._element.classList.remove('off');
    this._intervalId = setInterval(() => {
        this._element.classList.toggle('on');
    }, this.onFlashRate); // <!-- swap the hard-coded value for the parameter
}

off() {
    clearInterval(this._intervalId);
    this._element.classList.remove('on');
    this._intervalId = setInterval(() => {
        this._element.classList.toggle('off');
    }, this.offFlashRate); // <!-- swap the hard-coded value for the parameter
}

    get element() {
        return this._element;
    }
}
