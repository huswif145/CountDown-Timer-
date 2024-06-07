#!usr/bin/env node
import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns"

function* coundownTimer(second:number){

    while (second > 0 ){
        yield second;
        second--;
    }
}

let timerIterator = coundownTimer(10);

function displayCountDown(){

    let result = timerIterator.next();

    if(!result.done){
        const now = new Date();
        const countdownTimer = new Date(now.getTime ()+ (result.value * 1000))

        const remainingseconds = differenceInSeconds(countdownTimer , now)

        console.log(`Remaining Seconds: ${remainingseconds}`)

        setTimeout(displayCountDown, 1000)

    } else { 
        console.log('Countdown complete!')
    }
}
displayCountDown()









