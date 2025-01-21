function useCountdown() {
  let daysSpan, hoursSpan, minutesSpan, secondsSpan, time;

  // cd = "2025-11-26 12:15:00 EST"
  function init(cd) {
    const arr = cd.split(/[- :]/);
    const deadline = Date.parse(
      new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]).toString()
    );
    // console.log(deadline);

    // dummy deadline
    // const deadline = Date.parse(now.toString()) + 5000;
    _initClock(deadline);
  }

  function _initClock(deadline) {
    // ---# DOM SETUP
    _setupDOM();

    // ---# UPDATE THE CLOCK
    setInterval(() => _updateClock(deadline), 1000);
  }

  function _updateClock(deadline) {
    const t = _getTimeRemaining(deadline);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      // clearInterval(timeinterval);
      // this.removeTime();
      // this.showContent();
      // if (ytiframe) {
      //   ytiframe.style.display = "block";
      //   ytiframe.querySelector("iframe")!.src =
      //     "https://www.youtube.com/embed/B_kALCXfxq8?autoplay=1&cc_load_policy=1";
      // }
    }
  }

  function _getTimeRemaining(deadline) {
    const dateNow = Date.parse(
      String(
        new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
      )
    );
    const total = deadline - dateNow;

    // console.log(endtime, dateNow);
    // console.log(1732221636000 - 1732174832000);

    const seconds = Math.floor((total / 1000) % 60).toString();
    const minutes = Math.floor((total / 1000 / 60) % 60).toString();
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24).toString();
    const days = Math.floor(total / (1000 * 60 * 60 * 24)).toString();
    // const daysToHours = days * 24;

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function _setupDOM() {
    const clock = document.getElementById("clockdiv");
    if (!clock) return;

    daysSpan = clock.querySelector(".days");
    hoursSpan = clock.querySelector(".hours");
    minutesSpan = clock.querySelector(".minutes");
    secondsSpan = clock.querySelector(".seconds");
    time = clock.querySelector(".time");
  }

  return {
    init,
  };
}
