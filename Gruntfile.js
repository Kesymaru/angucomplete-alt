module.exports = function (grunt) {
  'use strict';

  var initConfig;

  // less
//  grunt.loadNpmTasks('grunt-contrib-less');

	grunt.loadNpmTasks('grunt-contrib-connect');

  // Loading external tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  initConfig = {
    bower: 'bower_components',
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      test: {
        // Lint & run unit tests in Karma
        // Just running `$ grunt watch` will only lint your code; to run tests
        // on watch, use `$ grunt watch:karma` to start a Karma server first
        tasks: ['jshint', 'karma:unit:run']
      }
    },
    karma: {
      options: {
        configFile: 'test/karma.conf.js',
        browsers: ['PhantomJS']
      },
      unit: {
        singleRun: true
      },
      watch: {
        autoWatch: true
      },
      server: {
        background: true
      }
    },
    jshint: {
      all:[
        'gruntFile.js',
        'angucomplete-alt.js',
        'test/**/*.spec.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    changelog: {
      options: {
        dest: 'CHANGELOG.md'
      }
    },
    uglify: {
      options: {
        preserveComments: 'some'
      },
      build: {
        files: {
          'dist/angucomplete-alt.min.js': ['angucomplete-alt.js']
        }
      }
    },
	// The actual grunt server settings
	connect: {
		server: {
			options: {
				hostname: 'localhost',
				port: '7070',
				livereload: true,
				keepalive: true,
				open: true,
			}
		},
	},
  };

  // Register tasks
  grunt.registerTask('default', ['jshint', 'karma:unit']);
  grunt.registerTask('watch', ['jshint', 'karma:watch']);
  grunt.registerTask('build', ['jshint', 'uglify:build']);

  grunt.initConfig(initConfig);
};


