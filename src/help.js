import chalk from 'chalk';
import data from '../data/timezones';
import { timeByTimeZone } from '../services/timeByTimeZone';

const helpMenus = {
  main: `
    ${chalk.yellowBright('Input Format is : <username>: <message> ')}, for example, ${chalk.yellowBright('josh: hello')} 
    There will always be exactly one space between the username - if there are multiple spaces, N-1 of 
    them were part of the user’s message. 
    The bot will receive a copy of all messages sent to the channel, but only needs to respond to those 
    which start with an exclamation point, which we call “commands”.
    For example josh: ${chalk.yellowBright('!timeat America/Los_Angeles')} 
  `
}

export async function help() {
  console.log(helpMenus.main);
}
