/* eslint-disable */
var spawn = require('child_process').spawn;

var semver = require('./semver');
var leftpad = require('./leftpad');
var Promise = require('./promise').Promise;


function printVersionStatus(name, ok, target, found) {
  var parts = [];
  parts.push(ok ? '│ ✅  ' : '│ 🚫  ');
  parts.push(leftpad(found,8));
  parts.push(leftpad(name, 18));
  parts.push(' (needs: ' + target + ')')
  process.stdout.write(parts.join('') + '\n');
}

function checkVersion(name, target, cmd) {
  var command = cmd.command;
  var args = cmd.args;
  var filter = cmd.filter || function(x) { return x; }
  return new Promise(function (resolve, reject) {
    var child = spawn(command, args);
    var str = '';
    var didError = false;
    child.stdout.on('data', function(data) {
      str += data.toString();
    });
    child.on('close', function() {
      if (didError) {
        process.stdout.write('│ 🚫  ERROR trying to check version of ' + name + '.\n│    Perhaps you need to install it? (needs version: ' + target + ')\n');
        reject('not-installed');
        return;
      }
      var vstring = vstring = filter(str);
      vstring = semver.clean(vstring || '');

      if (semver.satisfies(vstring, target)) {
        resolve(vstring);
        printVersionStatus(name, true, target, vstring);
      } else {
        reject('bad-version');
        printVersionStatus(name, false, target, vstring);
      }
    })
    child.on('error', function(data) {
      didError = true;
    });
  });
}

function line(name) {
  var s = (name || '').toUpperCase();
  var barW = -2 + (50 - s.length)/2;
  var extra = s.length % 2 === 1 ? '' : '─';
  var bar = '';
  for (var i= 0; i < barW; i++) {
    bar += '─';
  }
  return function () {
    process.stdout.write('├' + bar + ' ' + s + ' ' + bar + extra + '■\n');
  }
}

function stripVersion(x) {
  var parts = /[0-9](?:\.[0-9]+){0,2}/.exec(x);
  return parts && parts.length ? parts[0] : 'NONE';
}


line('Core Tools')();
Promise.all([
  checkVersion('Git', '>= 1.8', {
    command: 'git',
    args: ['--version'],
    filter: stripVersion
  }),
  checkVersion('Watchman', '>= 4', {
    command: 'watchman',
    args: ['-v']
  }),
]).catch(function() { }).then(function () {
  line('JavaScript Tools')();
}).then(function () {
  return Promise.all([
    checkVersion('Node.js', '>= 6.4.0', {
      command: 'node',
      args: ['--version']
    }),
    checkVersion('Yarn', '>= 0.20', {
      command: 'yarn',
      args: ['--version']
    }),
    checkVersion('ESLint', '>= 3', {
      command: 'eslint',
      args: ['--version']
    }),
    checkVersion('PhantomJS', '>= 2', {
      command: 'phantomjs',
      args: ['--version']
    })
  ]);
}).catch(function() { }).then(function () {
  line('Ruby Tools')();
}).then(function () {
  return Promise.all([
    checkVersion('Ruby', '>= 2.0', {
      command: 'ruby',
      args: ['--version'],
      filter: stripVersion
    }),
    checkVersion('Gem', '>= 2', {
      command: 'gem',
      args: ['--version'],
      filter: stripVersion
    })
  ]);
}).catch(function() { }).then(function () {
  line('CI/CD Tools')();
}).then(function () {
  return Promise.all([
    checkVersion('Heroku Toolbelt', '>= 4', {
      command: 'heroku',
      args: ['-v'],
      filter: stripVersion
    }),

    checkVersion('Travis-CI Gem', '>= 1.8', {
      command: 'travis',
      args: ['-v'],
      filter: stripVersion
    })
  ]);
}).catch(function() { }).then(function () {
  line('Ember Tools')();
}).then(function () {
  return Promise.all([
    checkVersion('Ember-CLI', '>= 2.12.0', {
      command: 'ember',
      args: ['-v'],
      filter: function (s) {
        var firstLine = s.split(/[\n]/g)[0];
        var ver = firstLine.split(/[\s]/g)[1];
        return ver;
      }
    })
  ]);
}).catch(function() { });
