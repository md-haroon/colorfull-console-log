export default function rgbConsole() {
    this.background = "#481E14";
    this.color = "#F2613F";
}

rgbConsole.prototype.Primary  = function () {
    this.background = "#cce5ff";
    this.color = "#004085";
    return this
}


rgbConsole.prototype.Secondary  = function () {
    this.background = "#383d41";
    this.color = "#e2e3e5";
    return this
}

rgbConsole.prototype.Success  = function () {
    this.background = "#155724";
    this.color = "#d4edda";
    return this
}

rgbConsole.prototype.Success  = function () {
    this.background = "#155724";
    this.color = "#d4edda";
    return this
}

rgbConsole.prototype.msg = function name(msg) {
    console.log('%c ' + msg, `background: ${this.background}; color: ${this.color}`);
    return this
}