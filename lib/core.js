const core = {
    background: "#fff",
    color: "#000",
    log:function(msg)  {
        console.log('%c' + msg, `background: ${this.background}; color: ${this.color}; padding : 5px`)
    }
}

const changeAllProperies = (obj, _background, _color) => {
    const _obj = Object.create(obj)
    _obj.background = _background;
    _obj.color = _color;
    return _obj;
}

const coreModule = {
    core : core,
    changeAllProperies : changeAllProperies
}

export default coreModule