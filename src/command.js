import data from '../data/timezones';
import { timeByTimeZone } from '../services/timeByTimeZone';
import { parseDateTime } from '../services/parseDateTime';

// A helper funtion to remove the extra whitespace from command and sub command
function parseCommand(command) {
  return command.trim();
}

export async function command(args) {
  var message = parseCommand(args[0]);
  message = message.split(" ");
  switch (parseCommand(message[0])) {
    case '!timeat':
      let timezone = parseCommand(message[1]);
      if (data.timezones.includes(timezone)) {
        // valid timezone, we now call Time Api and get current time in this timezone
        let response = await timeByTimeZone(timezone);
        let utc_time = response.utc_datetime;
        parseDateTime(utc_time);

      } else {
        console.log("unknown timezone");
      }
      // console.log("Timezone = " + timezone);
      break;
    case '!timepopularity':
      console.log("Time Popularity Called");
      break;

    default:
      console.log("Not to Respond");
      break;
  }

  // console.log("Message to the Bot is " + "< " + message + " >");
}
