radio.onReceivedNumber(function (receivedNumber) {
    while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline) || cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line))) {
        Drive()
    }
    if (receivedNumber == 1 && cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
        basic.showNumber(1)
        cuteBot.stopcar()
        cuteBot.moveTime(cuteBot.Direction.left, 30, 0.1)
        cuteBot.moveTime(cuteBot.Direction.forward, 30, 1)
    } else {
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
            If2()
        }
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline) || cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line))) {
            Drive()
        }
        if (receivedNumber == 2 && cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
            basic.showNumber(2)
            cuteBot.stopcar()
            cuteBot.moveTime(cuteBot.Direction.left, 30, 0.1)
            cuteBot.moveTime(cuteBot.Direction.forward, 30, 1)
        } else {
            while (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
                If2()
            }
            while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline) || cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line))) {
                Drive()
            }
            if (receivedNumber == 3 && cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
                cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
                basic.showNumber(3)
                cuteBot.stopcar()
                cuteBot.moveTime(cuteBot.Direction.left, 30, 0.1)
                cuteBot.moveTime(cuteBot.Direction.forward, 30, 1)
            } else {
                cuteBot.stopcar()
                cuteBot.turnleft()
                cuteBot.turnleft()
                cuteBot.moveTime(cuteBot.Direction.forward, 30, 2)
                Drive()
            }
        }
    }
})
function If2 () {
    cuteBot.stopcar()
    cuteBot.moveTime(cuteBot.Direction.forward, 30, 0.5)
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(30, 30)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(30, 0)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(0, 30)
    }
}
function Drive () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(30, 30)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(30, 0)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(0, 30)
    }
}
radio.setGroup(5)
