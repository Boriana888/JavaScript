function weatherForcast(input) {
  let wether = input[0];

  if (wether === "sunny") {
    console.log("It's warm outside!");
  } else if (wether === "cloudy") {
    console.log("It's cold outside!");
  } else {
    console.log("It's cold outside!");
  }
}
weatherForcast(["snowy"]);
