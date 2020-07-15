const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('create', 'create the multiplication table using a base and a limit', opt)
    .command('list', 'Print on console the multiplication table using a base and a limit', opt)
    .help()
    .argv;

module.exports = {
    argv
}