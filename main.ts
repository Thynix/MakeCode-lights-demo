input.onSwitchMoved(SwitchDirection.Right, function () {
    light.setBrightness(255)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (lights_mode < num_modes) {
        lights_mode += 1
    } else {
        lights_mode = 0
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (lights_mode > 0) {
        lights_mode += -1
    } else {
        lights_mode = num_modes
    }
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    light.setBrightness(20)
})
let lights_mode = 0
let num_modes = 0
num_modes = 5
music.baDing.play()
if (input.switchRight()) {
    light.setBrightness(255)
} else {
    light.setBrightness(20)
}
forever(function () {
    if (lights_mode == 0) {
        light.showAnimation(light.rainbowAnimation, 100)
    } else if (lights_mode == 1) {
        light.showAnimation(light.runningLightsAnimation, 100)
    } else if (lights_mode == 2) {
        light.showAnimation(light.cometAnimation, 100)
    } else if (lights_mode == 3) {
        light.showAnimation(light.sparkleAnimation, 100)
    } else if (lights_mode == 4) {
        light.showAnimation(light.colorWipeAnimation, 100)
    } else if (lights_mode == 5) {
        light.showAnimation(light.theaterChaseAnimation, 100)
    }
})
