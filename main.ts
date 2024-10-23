/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Oct 2024
 * This program rotates a servo motor.
*/

// Variables.
const servoNumber1 = robotbit.Servos.S1

// Setup.
basic.showIcon(IconNames.Happy)

// Rotate servo to 0.
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// Rotate servo to 180.
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)
    basic.clearScreen()
    basic.showString('180')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
