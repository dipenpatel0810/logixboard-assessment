import data from '../data/timezones';
import { timeByTimeZone } from '../services/timeByTimeZone';
import { parseDateTime } from '../services/parseDateTime';

var records = [];

// A helper funtion to remove the extra whitespace from command and sub command
function parseCommand(command) {
  return command.trim();
}

function insertRecord(timezone) {
  let continent;
  let country = {}
  let city;
  timezone = timezone.split("/");

  continent = timezone[0];
  country.name = timezone[1];
  var record = {
    continent: continent,
    country: [country]
  }
  if (timezone.length == 3) {
    city = timezone[2];
  }
  records.push(record);
  console.log(records)
}

export async function command(args) {
  var message = parseCommand(args[0]);
  message = message.split(" ");
  switch (parseCommand(message[0])) {
    case '!timeat':
      let timezone = parseCommand(message[1]);
      if (data.timezones.includes(timezone.toLowerCase())) {
        // valid timezone, we now call Time API and get current time in this timezone
        let response = await timeByTimeZone(timezone);
        let utc_time = response.utc_datetime;
        let currentDateTime = parseDateTime(utc_time);
        insertRecord(timezone.toLowerCase());
        console.log(currentDateTime);
      } else {
        console.log("unknown timezone");
      }
      break;
    case '!timepopularity':
      console.log("Time Popularity Called");
      break;

    default:
      console.log("Result");
      console.log(records);
      break;
  }
}
