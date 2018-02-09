/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-slack',

  isDevelopingAddon() {
    return true;
  },
  includedCommands() {
    return {
      slack: {
        name: 'slack',
        description: 'Posts a slack message',
        works: 'insideProject',
        anonymousOptions: ['<message>'],
        availableOptions: [{
          name: 'channel',
          type: String,
          default: 'general'
        }],
        run(commandOptions, rawArgs) {
          process.stdout.write(`---------------------------
#${commandOptions.channel}: ${rawArgs[0]}
`);
        }
      }
    }
  }
};
