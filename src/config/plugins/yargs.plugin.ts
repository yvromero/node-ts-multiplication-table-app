import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import { options } from 'yargs';

export const yarg = yargs(hideBin(process.argv) )
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l',{
        alias: 'limit',
        type:'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s',{
        alias:'show',
        type: 'boolean',
        default: false,
        demandOption: 'Show multiplication table'
    })
    .option('n',{
        alias:'name',
        type: 'string',
        default: 'multiplication-table',
        demandOption: 'File name'
    })
    .option('d',{
        alias:'destination',
        type: 'string',
        default: 'outputs',
        demandOption: 'File destination'
    })
    .check(( argv, options ) => {
        
        if ( argv.b < 1 ) throw 'Error: base must be greater than 0';

        return true;
    })
    .parseSync();