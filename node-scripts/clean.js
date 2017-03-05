require('shelljs/global');

const BUILD_DIR = 'public';

rm('-rf', BUILD_DIR);
mkdir(BUILD_DIR);
console.log('[Build directory cleaned]');