'use strict';

exports.description = 'Create a project for the FeedHenry studio.';

exports.notes = '_Note:_ This will create a project structure intended for ' +
    'use within the FeedHenry studio. If you _do not_ want to use the ' +
    'studio, you should use the _feedhenry-decoupled_ init task instead.';

// Warn on any non-dot file. TODO: Refine to warn for everything but VCS dirs.
exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  init.process({}, [
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description'),
    init.prompt('version')
  ], function(err, props) {
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);

    // Set hard dependencies for studio apps to be written to package.json.
    props.dependencies = {
      'fh-nodeapp': '*'
    };

    // For studio project there's no need for another root level package.json.
    init.writePackageJSON('cloud/package.json', props);

    done();
  });
};
