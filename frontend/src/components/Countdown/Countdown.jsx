import './Countdown.css';
import React, { Component } from 'react';

const AnimatedCard = ({ animation, digit }) => (
  <div className={`flipCard ${animation}`}>
    <span>{digit}</span>
  </div>
);

const StaticCard = ({ position, digit }) => (
  <div className={position}>
    <span>{digit}</span>
  </div>
);

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  let currentDigit = digit;
  let previousDigit = digit - 1;

  if (previousDigit < 0) {
    if (unit === 'days') previousDigit = 0;
    if (unit === 'hours') previousDigit = 23;
    if (unit === 'minutes' || unit === 'seconds') previousDigit = 59;
  }

  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className={'flipUnitContainer'}>
      <StaticCard position={'upperCard'} digit={currentDigit} />
      <StaticCard position={'lowerCard'} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

class FlipClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const targetDate = new Date(2025, 1, 8, 18, 0, 0); // Month is zero-based (1 = February)
    const currentDate = new Date();

    const difference = targetDate - currentDate;

    if (difference <= 0) {
      // If the target date is reached or passed, set all to 0
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    this.setState((prevState) => ({
      days,
      hours,
      minutes,
      seconds,
      daysShuffle: prevState.days !== days,
      hoursShuffle: prevState.hours !== hours,
      minutesShuffle: prevState.minutes !== minutes,
      secondsShuffle: prevState.seconds !== seconds,
    }));
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds,
      daysShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state;

    return (
      <>
        <h5 className="text-xl text-center font-medium w-64 text-white tracking-wide mb-4 lg:text-2xl lg:pb-8">
          Faltan...
        </h5>
        <div className={'flipClock'}>
          <FlipUnitContainer unit={'days'} digit={days} shuffle={daysShuffle} />
          <FlipUnitContainer unit={'hours'} digit={hours} shuffle={hoursShuffle} />
          <FlipUnitContainer unit={'minutes'} digit={minutes} shuffle={minutesShuffle} />
          <FlipUnitContainer unit={'seconds'} digit={seconds} shuffle={secondsShuffle} />
        </div>
        <div
          className="grid grid-rows-1 grid-cols-4 gap-1 text-xs w-full md:w-[764px] mt-3 text-center
          lg:text-base"
        >
          <div>días</div>
          <div>hrs</div>
          <div>min</div>
          <div>seg</div>
        </div>
      </>
    );
  }
}

export default FlipClock;
