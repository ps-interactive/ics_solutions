function warningMaker(obstacle) {
  return function(number, location) {
    console.log(
      'Beware! There have been ' +
        obstacle +
        ' sightings today! ' +
        number +
        ' have been spotted at the ' +
        location +
        '!'
    );
  };
}

let killerPenguinAlert = warningMaker('killer penguin');
let polarBearAlert = warningMaker('polar bear');

killerPenguinAlert(6, 'Ice Caves');
polarBearAlert(2, 'Blizzard Beach');
