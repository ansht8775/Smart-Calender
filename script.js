let calendar = document.getElementById("calendar");
let monthYear = document.getElementById("monthYear");

let currentDate = new Date();

function renderCalendar(){

  calendar.innerHTML = "";

  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();

  let firstDay = new Date(year, month, 1).getDay();

  let totalDays = new Date(year, month + 1, 0).getDate();

  let monthNames = [
    "January","February","March","April",
    "May","June","July","August",
    "September","October","November","December"
  ];

  monthYear.innerHTML = monthNames[month] + " " + year;

  for(let i=0; i<firstDay; i++){

    let empty = document.createElement("div");

    calendar.appendChild(empty);
  }

  for(let day=1; day<=totalDays; day++){

    let date = document.createElement("div");

    date.classList.add("date");

    date.innerHTML = day;

    let today = new Date();

    if(
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ){
      date.classList.add("today");
    }

    calendar.appendChild(date);
  }
}

function prevMonth(){

  currentDate.setMonth(currentDate.getMonth() - 1);

  renderCalendar();
}

function nextMonth(){

  currentDate.setMonth(currentDate.getMonth() + 1);

  renderCalendar();
}

renderCalendar();

function updateClock(){

  let now = new Date();

  let time = now.toLocaleTimeString();

  document.getElementById("clock").innerHTML = time;
}

setInterval(updateClock,1000);

updateClock();