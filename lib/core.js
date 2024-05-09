const core = {
    background: "#481E14",
    color: "#F2613F",
    log: (msg) => {
        console.log('%c' + msg, `background: ${this.background}; color: ${this.color}; padding : 15px`)
    }
}

const changeAllProperies = (obj, _background, _color) => {
    obj.background = _background;
    obj.color = _color;
    return obj;
}

const coreModule = {
    core : core,
    changeAllProperies : changeAllProperies
}

export default coreModule