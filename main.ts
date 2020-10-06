for (let i = 0; i <= 4; i++) {
    led.plot(0, i)
    led.plot(4, i)
    led.plot(i, 0)
    led.plot(i, 4)
    basic.pause(500)
}
basic.forever(function () {
	
})
