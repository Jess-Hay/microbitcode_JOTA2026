input.onButtonPressed(Button.A, function () {
    basic.showString("Temp")
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Light")
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Sound")
    basic.showNumber(input.soundLevel())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
// Start up
basic.showIcon(IconNames.Yes)
