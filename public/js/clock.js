console.log('hi');


function currenttime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let date = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();

    // if (hours < 12) {
    //     fulltime = fulltime + " AM"
    // } else {
    //     fulltime = fulltime + " PM"
    // }
    let ampm = (hours < 12) ? "AM" : "PM"
    // if (hours > 12) {
    //     newhours = hours - 12;
    // } else {
    //     newhours = hours;
    // }
    hours = (hours > 12) ? hours - 12 : "" + hours
    hours = ((hours == 0) ? 12 : "") + hours

    minutes = ((minutes < 10) ? "0" : "") + minutes;
    // if (seconds < 10) {
    //     newseconds = "0" + seconds;
    // } else {
    //     newseconds = seconds;
    // }
    seconds = ((seconds < 10) ? "0" + seconds : seconds)
    date = ((date < 10) ? "0" + date : date);
    month = ((month < 10) ? "0" + month : month);
    month = ((month == 0) ? 1 : "") + month

    let fulltime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    let fulltime1 = date + "/" + month + "/" + year;

    document.getElementById('date').innerHTML = fulltime1;
    document.getElementById('clock').innerHTML = fulltime;

}
