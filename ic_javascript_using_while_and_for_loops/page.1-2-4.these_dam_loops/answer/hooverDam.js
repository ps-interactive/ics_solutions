let runningGen = 1;
let totalGen = 19;

while (runningGen < 5) {
    console.log("Generator #" + runningGen + " is on.");
    runningGen++;
}

for (let stoppedGen = runningGen; stoppedGen <= totalGen; stoppedGen++) {
    console.log("Generator #" + stoppedGen + " is off.");
}
