# NOTES

You want a `Node.js: Attach` debugging configuration

PORTS: 
- 5858 for Node 6.10 and older
- 9229 for Newer

PROTOCOL:
- https://github.com/mike-works/vscode-fundamentals/blob/master/docs/1_using/debugging.md


TO START AN EMBER APP
```sh
node --inspect --inspect-brk ./node_modules/.bin/ember s
```