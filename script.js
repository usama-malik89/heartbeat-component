class Heartbeat {
  constructor(onFlashRate = 1000, offFlashRate = 500) {
    // <!-- add the default values
    this._element = document.createElement("div");
    this._intervalId = null;
    this.onFlashRate = onFlashRate;
    this.offFlashRate = offFlashRate;
  }

  on() {
    clearInterval(this._intervalId);
    this._element.classList.remove("off");
    this._intervalId = setInterval(() => {
      this._element.classList.toggle("on");
    }, 1000);
  }

  off() {
    clearInterval(this._intervalId);
    this._element.classList.remove("on");
    this._intervalId = setInterval(() => {
      this._element.classList.toggle("off");
    }, 500);
  }

  get element() {
    return this._element;
  }
}
