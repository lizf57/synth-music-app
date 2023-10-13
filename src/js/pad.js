import '../css/pad.css'

export class Pad {
    xPosition = 0.5
    yPosition = 0.5
    pressed = false

    constructor(onPadEngageCb, onPadDisengageCb, onPuckMoveCb){
        this.pad = document.getElementById('pad')
        this.puck = document.getElementById('puck')
        this.setPuckStyle()
        // attach listeners
        this.pad.addEventListener('mousemove', this.handleMouseMove.bind(this))
        this.pad.addEventListener('mousedown', this.handleMouseDown.bind(this))
        this.pad.addEventListener('mouseup', this.handleMouseUp.bind(this))
        this.pad.addEventListener('mouseleave', this.handleMouseLeave.bind(this))
    }

    handleMouseMove(e){
        if (e.buttons){
            this.updatePuckPosition(e)
        }
    }

    handleMouseDown(e){
        this.updatePuckPosition(e)
        this.pressed = true
    }

    handleMouseUp(e){
        this.updatePuckPosition(e)
        this.pressed = false
    }

    handleMouseLeave(e){
        this.pressed = false
    }

    updatePuckPosition(e){
        this.xPosition = this.clamp(e.offsetX / this.pad.offsetWidth)
        this.yPosition = this.clamp(e.offsetY / this.pad.offsetHeight)
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