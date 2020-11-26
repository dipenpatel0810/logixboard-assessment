# logixboard-assessment

The name of the bot is **jarvis** hence, I have made a setup where jarvis would be the main command we need to run and then pass on the command after calling it.

### Steps to Run

```sh
$ npm install
$ npm link
$ jarvis --help
$ jarvis '<command>'
The use of '' is important otherwise using ! in the start of the command would not work as bash considers 
! as special history character. Hence, the command should be entered inside ''
```

CLI setup Ref : https://codeburst.io/build-a-command-line-interface-cli-application-with-node-js-59becec90e28