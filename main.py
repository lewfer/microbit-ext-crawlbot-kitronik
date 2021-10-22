/**
 * servo 1 = left hip
 * 
 * servo 2 = left knee
 * 
 * servo 3 = right hip
 * 
 * servo 4 = right knee
 */
// position 0 is mid
// position 1 is forward
// position -1 is backward
function leftHip (position: number) {
    oldLeftHipAngle = currentLeftHipAngle
    if (position == 0) {
        currentLeftHipAngle = 90
    } else if (position == 1) {
        currentLeftHipAngle = 60
    } else if (position == -1) {
        currentLeftHipAngle = 135
    }
    leftHipStep = (currentLeftHipAngle - oldLeftHipAngle) / numSteps
    leftHipStepAngle = oldLeftHipAngle + leftHipStep
    for (let index = 0; index < numSteps; index++) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, leftHipStepAngle)
        leftHipStepAngle = leftHipStepAngle + leftHipStep
        basic.pause(20)
    }
}
function smoothMove (servo: number, fromAngle: number, toAngle: number) {
    step = (toAngle - fromAngle) / numSteps
    angle = fromAngle + step
    if (servo == 1) {
    	
    } else if (servo == 2) {
        for (let index = 0; index < numSteps; index++) {
            crickit.servo2.setAngle(angle)
            angle = angle + step
            basic.pause(20)
        }
    } else if (servo == 3) {
        for (let index = 0; index < numSteps; index++) {
            crickit.servo3.setAngle(angle)
            angle = angle + step
            basic.pause(20)
        }
    } else if (servo == 4) {
        for (let index = 0; index < numSteps; index++) {
            crickit.servo4.setAngle(angle)
            angle = angle + step
            basic.pause(10)
        }
    }
}
function leftKnee (position: number) {
    oldLeftKneeAngle = currentLeftKneeAngle
    if (position == 0) {
        currentLeftKneeAngle = 90
    } else if (position == 1) {
        currentLeftKneeAngle = 130
    } else if (position == -1) {
        currentLeftKneeAngle = 60
    }
    leftKneeStep = (currentLeftKneeAngle - oldLeftKneeAngle) / numSteps
    leftKneeStepAngle = oldLeftKneeAngle + leftKneeStep
    for (let index = 0; index < numSteps; index++) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, leftKneeStepAngle)
        leftKneeStepAngle = leftKneeStepAngle + leftKneeStep
        basic.pause(20)
    }
}
function rightKnee (position: number) {
    oldRightKneeAngle = currentRightKneeAngle
    if (position == 0) {
        currentRightKneeAngle = 90
    } else if (position == 1) {
        currentRightKneeAngle = 50
    } else if (position == -1) {
        currentRightKneeAngle = 120
    }
    rightKneeStep = (currentRightKneeAngle - oldRightKneeAngle) / numSteps
    rightKneeStepAngle = oldRightKneeAngle + rightKneeStep
    for (let index = 0; index < numSteps; index++) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, rightKneeStepAngle)
        rightKneeStepAngle = rightKneeStepAngle + rightKneeStep
        basic.pause(20)
    }
}
function move (side: string, joint: string, direction: string) {
    if (side == "left") {
        if (joint == "knee") {
            if (direction == "f") {
            	
            } else if (side == "b") {
            	
            } else if (side == "m") {
            	
            }
        } else if (side == "hip") {
            if (direction == "f") {
            	
            } else if (side == "b") {
            	
            } else if (side == "m") {
            	
            }
        }
    } else if (side == "right") {
        if (joint == "knee") {
            if (direction == "f") {
            	
            } else if (side == "b") {
            	
            } else if (side == "m") {
            	
            }
        } else if (side == "hip") {
            if (direction == "f") {
            	
            } else if (side == "b") {
            	
            } else if (side == "m") {
            	
            }
        }
    }
}
function rightHip (position: number) {
    oldRightHipAngle = currentRightHipAngle
    if (position == 0) {
        currentRightHipAngle = 90
    } else if (position == 1) {
        currentRightHipAngle = 120
    } else if (position == -1) {
        currentRightHipAngle = 45
    }
    rightHipStep = (currentRightHipAngle - oldRightHipAngle) / numSteps
    rightHipStepAngle = oldRightHipAngle + rightHipStep
    for (let index = 0; index < numSteps; index++) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, rightHipStepAngle)
        rightHipStepAngle = rightHipStepAngle + rightHipStep
        basic.pause(20)
    }
}
let rightHipStepAngle = 0
let rightHipStep = 0
let oldRightHipAngle = 0
let rightKneeStepAngle = 0
let rightKneeStep = 0
let oldRightKneeAngle = 0
let leftKneeStepAngle = 0
let leftKneeStep = 0
let oldLeftKneeAngle = 0
let angle = 0
let step = 0
let leftHipStepAngle = 0
let leftHipStep = 0
let oldLeftHipAngle = 0
let numSteps = 0
let currentRightKneeAngle = 0
let currentLeftKneeAngle = 0
let currentRightHipAngle = 0
let currentLeftHipAngle = 0
currentLeftHipAngle = 90
currentRightHipAngle = 90
currentLeftKneeAngle = 90
currentRightKneeAngle = 90
numSteps = 50
rightHip(0)
rightKnee(0)
leftHip(0)
leftKnee(0)
let rightMovement = 1
let leftMovement = 1
basic.forever(function () {
    rightHip(1)
    basic.pause(1000)
    rightKnee(-1)
    basic.pause(1000)
    rightHip(-1)
    basic.pause(1000)
    rightKnee(1)
    basic.pause(1000)
    leftHip(1)
    basic.pause(1000)
    leftKnee(-1)
    basic.pause(1000)
    leftHip(-1)
    basic.pause(1000)
    leftKnee(1)
    basic.pause(1000)
})
