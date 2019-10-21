const withDefaults = require('./utils/default-options');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

exports.onPreBootstrap= ({ store }, options) => {
  const { program } = store.getState();
const { contentPath } = withDefaults(options);
  // get options with defaults
const dir = path.join(program.directory, contentPath);
  // gifure out the content path

  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }

};