function warningMaker(obstacle) {
  return function() {
    console.log('Beware! There have been ' + obstacle + ' sightings today!');
  };
}

let icebergAlert = warningMaker('iceberg');
icebergAlert();
