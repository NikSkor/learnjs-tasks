let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000,
});

lowResolutionClock.start();