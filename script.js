function displayTime() {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let amOrPm = "AM";
  if (hour >= 12) {
    amOrPm = "PM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  let dayOfWeek = d.toLocaleString("default", { weekday: "long" });
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.getDate();
  let year = d.getFullYear();
  document.getElementById("clock").innerHTML =
    hour +
    ":" +
    min +
    ":" +
    sec +
    " " +
    amOrPm +
    "<br>" +
    dayOfWeek +
    ", " +
    month +
    " " +
    day +
    ", " +
    year;
}
setInterval(displayTime, 1000);
displayTime();
