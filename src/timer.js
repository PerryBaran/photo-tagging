const Timer = () => {
    let seconds = 0;
    let interval = null;
    
    let mins = 0;
    let secs = 0;

    const updateTime = () => {
        seconds++
        mins = Math.floor(seconds / 60);
        secs = seconds % 60;
    }

    const start = () => {
        if (interval) {
            return
        }

        interval = setInterval(updateTime, 1000);
    }

    const stop = () => {
        if (secs < 10) {secs = `0${secs}`}
        if (mins < 10) {mins = `0${mins}`}
        clearInterval(interval);
    }

    const getTime = () => {
        return `${mins}:${secs}`
    }

    return { start, stop, getTime }
}

export default Timer