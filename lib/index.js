import coreModule  from "./core.js";

const rgbConsole = coreModule.core

Object.defineProperty(rgbConsole, "Primary",
    {
        writable: false,
        configurable: false,
        value: coreModule.changeAllProperies(rgbConsole,"#cce5ff", "#004085")
    })

Object.defineProperty(rgbConsole, "Secondary",
    {
        writable: false,
        configurable: false,
        value: coreModule.changeAllProperies(rgbConsole,"#383d41", "#e2e3e5")
    })

Object.defineProperty(rgbConsole, "Success",
    {
        writable: false,
        configurable: false,
        value: coreModule.changeAllProperies(rgbConsole,"#155724", "#d4edda"),
    })

export default rgbConsole;