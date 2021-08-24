function warningMaker(obstacle) {
  return function() {
    console.log('Beware! There have been ' + obstacle + ' sightings in the Cove today!');
  };
}
