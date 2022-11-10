function startTrafficLight () {
    let stop = document.getElementById(`stop`);
    let ready = document.getElementById(`ready`);
    let go = document.getElementById(`go`);

    
    setTimeout(function () {
        stop.style.opacity = .3;
        ready.style.opacity = .3;
        go.style.opacity = 1;
    }, 10000);

    setTimeout(function () {
        stop.style.opacity = 1;
        ready.style.opacity = .3;
        go.style.opacity = .3;
    }, 15000);

     setTimeout(function() {
        stop.style.opacity = .3;
        ready.style.opacity = 1;
        go.style.opacity = .3;
    }, 5000);
}

const timer = setInterval(function () {
    startTrafficLight()
}, 15000)

startTrafficLight()

