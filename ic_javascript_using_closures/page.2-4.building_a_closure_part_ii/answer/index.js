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
