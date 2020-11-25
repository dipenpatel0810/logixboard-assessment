import minimist from 'minimist';
import { command } from './command';
import { help } from './help';

export function whatIsTheTime(args) {
    const argsObj = minimist(args.slice(2));
    let cmd = argsObj._ || 'help';

    if (argsObj.help || argsObj.h) {
        cmd = 'help';
    }

    switch (cmd) {
        case 'help':
            help();
            break;

        default:
            command(cmd);
            break;
    }
}