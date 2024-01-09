import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';


const { b:base, l:limit, s:showTable } = yarg;
// grabar en el archivo de salida
// path: outputs/tabla-5.txt

let outPutMessage = '';
const headerMessage = `
=============================
        Tabla del ${ base }
=============================\n
`;

for ( let i = 1; i <= limit; i++ ) {
    outPutMessage += `${ base } x ${ i } = ${ base * i}\n`;
};

outPutMessage = headerMessage + outPutMessage;

if ( showTable ) {
    console.log(outPutMessage);
};

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true});
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outPutMessage);
console.log('File created');