/**
 * Makecode block for the Think Create Learn Crawlbot (Kitronik control)
 *
 * servo 1 = left hip
 * servo 2 = left knee
 * servo 3 = right hip
 * servo 4 = right knee
 */

enum enumSide {
    left,
    right
}

enum enumJoint {
    hip,
    knee
}

enum enumHipDirection {
    forward,
    backward,
    middle
}

enum enumKneeDirection {
    up,
    down,
    middle
}


//% color="#ff7f50" icon="\uf06e" block="CrawlBot"
namespace crawlbot {

    let rightHipStepAngle = 0
    let rightHipStep = 0
    let oldRightHipAngle = 0

    let rightKneeStepAngle = 0
    let rightKneeStep = 0
    let oldRightKneeAngle = 0

    let leftKneeStepAngle = 0
    let leftKneeStep = 0
    let oldLeftKneeAngle = 0

    let leftHipStepAngle = 0
    let leftHipStep = 0
    let oldLeftHipAngle = 0

    let numSteps = 0

    let currentRightKneeAngle = 0
    let currentLeftKneeAngle = 0
    let currentRightHipAngle = 0
    let currentLeftHipAngle = 0

    let lowAngle = 70
    let midAngle = 90
    let highAngle = 110
    let stepPause = 20

    ////let angle = 0
    let step = 0

    //% blockId=initialise
    //% block="initialise"
    export function initialise() {

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
        pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
        pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
    }

    //% blockId=setAngles
    //% block="set angles low %low mid %mid high %high"
    export function setAngles(low: number, mid: number, high: number) {
        lowAngle = low
        midAngle = mid
        highAngle = high
    }

    //% blockId=setStepPause
    //% block="set step pause %pause"
    export function setStepPause(pause: number) {
        stepPause = pause
    }

    //% blockId=moveHip
    //% block="move hip %side side to %direction"
    export function moveHip(side: enumSide, direction: enumHipDirection) {
        if (side == enumSide.left) {
            if (direction == enumHipDirection.forward) {
                leftHip(1)
            } else if (direction == enumHipDirection.backward) {
                leftHip(-1)
            } else if (direction == enumHipDirection.middle) {
                leftHip(0)
            }
        } else if (side == enumSide.right) {
            if (direction == enumHipDirection.forward) {
                rightHip(1)
            } else if (direction == enumHipDirection.backward) {
                rightHip(-1)
            } else if (direction == enumHipDirection.middle) {
                rightHip(0)
            }
        }
    }

    //% blockId=moveKnee
    //% block="move knee %side side to %direction"
    export function moveKnee(side: enumSide, direction: enumKneeDirection) {
        if (side == enumSide.left) {
            if (direction == enumKneeDirection.up) {
                leftKnee(1)
            } else if (direction == enumKneeDirection.down) {
                leftKnee(-1)
            } else if (direction == enumKneeDirection.middle) {
                leftKnee(0)
            } 
        } else if (side == enumSide.right) {
            if (direction == enumKneeDirection.up) {
                rightKnee(1)
            } else if (direction == enumKneeDirection.down) {
                rightKnee(-1)
            } else if (direction == enumKneeDirection.middle) {
                rightKnee(0)
            }
        }
    }

    function leftHip (position: number) {
        oldLeftHipAngle = currentLeftHipAngle
        if (position == 0) {
            currentLeftHipAngle = midAngle
        } else if (position == 1) {
            currentLeftHipAngle = lowAngle
        } else if (position == -1) {
            currentLeftHipAngle = highAngle
        }
        leftHipStep = (currentLeftHipAngle - oldLeftHipAngle) / numSteps
        leftHipStepAngle = oldLeftHipAngle + leftHipStep
        for (let index = 0; index < numSteps; index++) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, leftHipStepAngle)
            leftHipStepAngle = leftHipStepAngle + leftHipStep
            basic.pause(stepPause)
        }
    }
    
    function leftKnee (position: number) {
        oldLeftKneeAngle = currentLeftKneeAngle
        if (position == 0) {
            currentLeftKneeAngle = midAngle
        } else if (position == 1) {
            currentLeftKneeAngle = highAngle
        } else if (position == -1) {
            currentLeftKneeAngle = lowAngle
        }
        leftKneeStep = (currentLeftKneeAngle - oldLeftKneeAngle) / numSteps
        leftKneeStepAngle = oldLeftKneeAngle + leftKneeStep
        for (let index = 0; index < numSteps; index++) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, leftKneeStepAngle)
            leftKneeStepAngle = leftKneeStepAngle + leftKneeStep
            basic.pause(stepPause)
        }
    }

    function rightKnee (position: number) {
        oldRightKneeAngle = currentRightKneeAngle
        if (position == 0) {
            currentRightKneeAngle = midAngle
        } else if (position == 1) {
            currentRightKneeAngle = lowAngle
        } else if (position == -1) {
            currentRightKneeAngle = highAngle
        }
        rightKneeStep = (currentRightKneeAngle - oldRightKneeAngle) / numSteps
        rightKneeStepAngle = oldRightKneeAngle + rightKneeStep
        for (let index = 0; index < numSteps; index++) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, rightKneeStepAngle)
            rightKneeStepAngle = rightKneeStepAngle + rightKneeStep
            basic.pause(stepPause)
        }
    }

    function rightHip (position: number) {
        oldRightHipAngle = currentRightHipAngle
        if (position == 0) {
            currentRightHipAngle = midAngle
        } else if (position == 1) {
            currentRightHipAngle = highAngle
        } else if (position == -1) {
            currentRightHipAngle = lowAngle
        }
        rightHipStep = (currentRightHipAngle - oldRightHipAngle) / numSteps
        rightHipStepAngle = oldRightHipAngle + rightHipStep
        for (let index = 0; index < numSteps; index++) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, rightHipStepAngle)
            rightHipStepAngle = rightHipStepAngle + rightHipStep
            basic.pause(stepPause)
        }
    }
}
