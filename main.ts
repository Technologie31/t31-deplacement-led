input.onButtonPressed(Button.A, function () {
    if (position_X > 0) {
        position_X += -1
    } else {
        position_X = 4
        led.unplot(0, Position_Y)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Position_Y < 4) {
        Position_Y += 1
    } else {
        led.unplot(position_X, Position_Y)
        Position_Y = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (position_X < 4) {
        position_X += 1
    } else {
        position_X = 0
        led.unplot(4, Position_Y)
    }
})
input.onGesture(Gesture.Shake, function () {
    led.unplot(position_X, Position_Y)
    reinisialisation()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Position_Y > 0) {
        Position_Y += -1
    } else {
        led.unplot(position_X, Position_Y)
        Position_Y = 4
    }
})
function reinisialisation () {
    Position_Y = 4
    position_X = 0
}
let Position_Y = 0
let position_X = 0
reinisialisation()
basic.forever(function () {
    led.plot(position_X, Position_Y)
    led.unplot(position_X - 1, Position_Y)
    led.unplot(position_X + 1, Position_Y)
    led.unplot(position_X, Position_Y + 1)
    led.unplot(position_X, Position_Y - 1)
})
