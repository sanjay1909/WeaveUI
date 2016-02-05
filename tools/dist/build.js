import exec from '../exec';
import {
    distRoot
}
from '../constants';

export default function BuildDistributable() {
    console.log('Building: '.cyan + 'distributable'.green);

    return exec.execute(`rimraf ${distRoot}`)
        .then(() => Promise.all([
      exec.execute(`webpack --bail`),
      exec.execute(`webpack --bail -p`)
    ]))
        .then(() => console.log('Built: '.cyan + 'distributable'.green));
}
