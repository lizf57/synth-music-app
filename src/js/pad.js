import '../css/pad.css'

export class Pad {
    xPosition = 0.5
    yPosition = 0.5
    pressed = false

    constructor(){
        this.pad = document.getElementById('pad')
        this.puck = document.getElementById('puck')
        this.setPuckStyle()
    }

    clamp(value){
        return Math.min(Math.max(value, 0), 1)
    }

    setPuckStyle(){
        const leftPercent = `${(this.xPosition * 100) .toFixed(2)}%`
        const topPercent = `${(this.yPosition * 100) .toFixed(2)}%` 
        this.puck.style.left = leftPercent
        this.puck.style.top = topPercent
    }
}
