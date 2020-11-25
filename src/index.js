#!/usr/bin/env node
require('dotenv').config()
require = require('esm')(module);
require('./jarvis').whatIsTheTime(process.argv);
