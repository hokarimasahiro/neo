input.onButtonPressed(Button.A, function () {
    brightness += -10
    if (brightness < 20) {
        brightness = 50
    }
    strip.setBrightness(brightness)
    strip.show()
    watchfont.showNumber2(brightness / 10)
})
input.onButtonPressed(Button.B, function () {
    brightness += 10
    if (brightness > 255) {
        brightness = 50
    }
    strip.setBrightness(brightness)
    strip.show()
    watchfont.showNumber2(brightness / 10)
})
let rainbowNo = 0
let brightness = 0
let strip: neopixel.Strip = null
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
strip = neopixel.create(DigitalPin.P1, 101, NeoPixelMode.RGB)
brightness = 50
strip.setBrightness(brightness)
strip.showRainbow(1, 360)
strip.show()
let mode = 0
let rainbow = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple)
]
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        mode = 0
        basic.showNumber(0)
        strip.showRainbow(1, 360)
    } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        mode = 1
        basic.showNumber(1)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        mode = 2
        basic.showNumber(2)
    }
    if (mode == 0) {
        strip.rotate(7)
        strip.show()
        basic.pause(200)
    } else if (mode == 1) {
        strip.showColor(rainbow[rainbowNo])
        rainbowNo = (rainbowNo + 1) % rainbow.length
        basic.pause(1000)
    } else if (mode == 2) {
        strip.showColor(rainbow._pickRandom())
        basic.pause(1000)
    }
})
