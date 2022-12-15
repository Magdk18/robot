def on_received_number(receivedNumber):
    while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE) or cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE)):
        Drive()
    if receivedNumber == 1 and cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
        cuteBot.color_light(cuteBot.RGBLights.ALL, 0xffffff)
        basic.show_number(1)
        cuteBot.stopcar()
        cuteBot.move_time(cuteBot.Direction.LEFT, 30, 0.1)
        cuteBot.move_time(cuteBot.Direction.FORWARD, 30, 1)
    else:
        while cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
            If2()
        while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE) or cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE)):
            Drive()
        if receivedNumber == 2 and cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
            cuteBot.color_light(cuteBot.RGBLights.ALL, 0x00ff00)
            basic.show_number(2)
            cuteBot.stopcar()
            cuteBot.move_time(cuteBot.Direction.LEFT, 30, 0.1)
            cuteBot.move_time(cuteBot.Direction.FORWARD, 30, 1)
        else:
            while cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
                If2()
            while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE) or cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE)):
                Drive()
            if receivedNumber == 3 and cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
                cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0x0000ff)
                basic.show_number(3)
                cuteBot.stopcar()
                cuteBot.move_time(cuteBot.Direction.LEFT, 30, 0.1)
                cuteBot.move_time(cuteBot.Direction.FORWARD, 30, 1)
            else:
                cuteBot.stopcar()
                cuteBot.turnleft()
                cuteBot.turnleft()
                cuteBot.move_time(cuteBot.Direction.FORWARD, 30, 2)
                Drive()
radio.on_received_number(on_received_number)

def If2():
    cuteBot.stopcar()
    cuteBot.move_time(cuteBot.Direction.FORWARD, 30, 0.5)
    if cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
        cuteBot.motors(30, 30)
    if cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
        cuteBot.motors(30, 0)
    if cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
        cuteBot.motors(0, 30)
def Drive():
    if cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
        cuteBot.motors(30, 30)
    if cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
        cuteBot.motors(30, 0)
    if cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
        cuteBot.motors(0, 30)
radio.set_group(5)