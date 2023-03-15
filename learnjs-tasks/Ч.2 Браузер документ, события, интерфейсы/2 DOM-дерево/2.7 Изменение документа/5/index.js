'use strict'

    function createCalendar(elem, year, month) {
      let rightMonth = month - 1;
      let day = new Date(year, rightMonth);
      let nextMonthDay = (new Date(year, month)).setDate(0);
      let maxDay = new Date(nextMonthDay).getDate();
      let rightDayNumber = rightDay(day);
      console.log('rightDayNumber: ', rightDayNumber);

      let calendar = `
      <table>
        <tr>
          <th>пн</th>
          <th>вт</th>
          <th>ср</th>
          <th>чт</th>
          <th>пт</th>
          <th>сб</th>
          <th>вс</th>
        </tr>
        <tr>
      `;

      for (let i = 0; i < rightDayNumber - 1; i++) {
        calendar += `<td></td>`;
      }

      let count = 0;

      for (let i = 1; i <= maxDay; i++) {

        if ((rightDayNumber - 1) + i < 7) {
          calendar += `<td>${i}</td>`;
        } else if ((rightDayNumber - 1) + i === 7) {
          calendar += `<td>${i}</td></tr><tr>`;
        } else if (i < maxDay) {
          calendar += `<td>${i}</td>`;
          count++;
        } else if (i === maxDay) {
          calendar += `<td>${i}</td>`;
          count++;
          if (count < 7) {
            for (let i = count; i < 7; i++) {
              calendar += `<td></td>`;
            }
          }
          calendar += '</tr></table>';
          count = 0;
        }

        if (count === 7) {
          calendar += '</tr><tr>';
          count = 0;
        }

        
        
        console.log(maxDay);
      }

      elem.innerHTML += calendar;
    }

    function rightDay(date) {
      let day = date.getDay();
      day = (day != 0) ? day : 7;
      return day; 
    }

    createCalendar(calendar, 2012, 9);

