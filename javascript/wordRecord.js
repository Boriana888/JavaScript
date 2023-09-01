function wordRecord(input) {
  let recordTime = Number(input[0]);
  let distance = Number(input[1]);
  let timePerMeter = Number(input[2]);

  let swimmingTime = distance * timePerMeter;
  let delayCount = Math.floor(distance / 15);
  let delayTimes = delayCount * 12.5;
  let totalTime = swimmingTime + delayTimes;

  if (totalTime < recordTime) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
  } else {
    let insufficientSeconds = totalTime - recordTime;
    console.log(`No, he failed! He was ${insufficientSeconds.toFixed(2)} seconds slower.`);
  }
}
wordRecord(["10464", "1500", "20"]);
