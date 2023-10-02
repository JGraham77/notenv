const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env');

function config(path = envPath) {
    const envString = fs.readFileSync(path).toString();
    // the .split is regular expression for multiplatform availability
    const lines = envString.split(/\n|\r/).filter((x) => x);

    const temp = {};

    lines.forEach(line => {
        const [key, ...value] = line.split('=');
        if(!key || !value.length || !value[0]) return;
        temp[key] = value.join('=');
    })

    Object.assign(process.env, {...process.env, ...temp});
}

module.exports = {
    config
};