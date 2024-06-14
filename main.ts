let strip = neopixel.create(DigitalPin.P1, 101, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(50)
})
