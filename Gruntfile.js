module.exports = function(grunt) {
    // URI paths for our tasks to use.
    grunt.uri = './';
    grunt.uriStatic = grunt.uri + 'bower_components/ood-omega/build/';
    grunt.uriDist = grunt.uriStatic + 'dist/';
    // grunt.uriSrc = grunt.uriStatic + '/';
    grunt.uriTask = grunt.uri + 'script/grunt/';

    // Our task object where we'll store our configuration.
    var tasks = {};
    tasks.concat = {};


    // Concatenation Tasks
    // tasks = require(grunt.uriTask + 'css-concat.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'js-concat.js')(grunt, tasks);

    // Minify Tasks
    // tasks = require(grunt.uriTask + 'css-minify.js')(grunt, tasks);
    // tasks = require(grunt.uriTask + 'html-minify.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'js-minify.js')(grunt, tasks);

    // Register The Tasks
    grunt.registerTask('minify', ['uglify']);
    grunt.registerTask('default', ['concat', 'minify']);

    // Initialize The Grunt Configuration
    grunt.initConfig(tasks);
};
