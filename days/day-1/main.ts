import * as fs from "fs";
import * as readline from "readline";

// dial numbers are 0-99
// dial can go from 99 -> 0, or 0 -> 99
// distance is the total numbers traveled on the dial (number of clicks), not the dial number

async function readFileStreaming(path: string) {
    const rl = readline.createInterface({
        input: fs.createReadStream(path),
        crlfDelay: Infinity
    });

    let password: number = 0; // this is basically a counter
    let dial: number = 50;
    let direction: string = "";
    let distance: number = 0;

<<<<<<< Updated upstream
    for await (const line of rl) {
        direction = line.substring(0, 1);
        distance = parseInt(line.substring(1));
        if(direction == "L"){
            dial -= distance;
            if(dial < 0) dial += 100;
        } else {
            dial += distance;
            if(dial > 99) dial -= 100;
        }
        if(dial === 0) password++;
=======
    // grab a substr of each line

    // get the direction and the distance => 'L30' would be Left 30 clicks (distance = 30)
    // set the dial to the new position, take count of if it goes under 0 or over 99
    // if after a rotation the dial is at 0, increase the password by 1
    //    if dial === 0 then password++
    for await (const line of rl) {
        direction = line.substring(0, 1);
        )
        console.log(line)
>>>>>>> Stashed changes
    }
    console.log(`Final password: ${password}`);
}

readFileStreaming("input.txt").catch(console.error);