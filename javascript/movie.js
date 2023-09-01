function movie(input) {
  let movieName = input[0];
  let epizodeDuration = Number(input[1]);
  let breakDuration = Number(input[2]);
  
  let lunchTime = (1 / 8) * breakDuration;
  let restTime = (1 / 4) * breakDuration;

  let totalTime = lunchTime + restTime;
  let movieTime = breakDuration - totalTime;

  if (movieTime >= epizodeDuration) {
    let timeLeft = Math.ceil(movieTime - epizodeDuration);
    console.log(
      `You have enough time to watch ${movieName} and left with ${timeLeft} minutes free time.`
    );
  } else {
    let timeNeeded = Math.ceil(epizodeDuration - movieTime);
    console.log(
      `You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`
    );
  }
}
movie(["Teen Wolf",

"48",

"60"])
