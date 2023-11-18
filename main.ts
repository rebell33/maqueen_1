// Maqueen Motoren
let M1_IN1 = DigitalPin.P0
let M1_IN2 = DigitalPin.P1
let M2_IN1 = DigitalPin.P8
let M2_IN2 = DigitalPin.P12

// Funktion zum Steuern der Maqueen-Motoren
function maqueenDrive(leftSpeed: number, rightSpeed: number): void {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, leftSpeed)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, rightSpeed)
}
