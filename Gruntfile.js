module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 8080,
          base: ['dist', 'app/views'],
          livereload: true
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['bower_components/**/*.js', 'app/js/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      js: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': ['dist/css/<%= pkg.name %>.css']
        }
      }
    },

    jshint: {
      files: ['app/js/**/*.js', 'spec/**/*.js']
    },

    jasmine: {
      src: 'app/js/**/*.js',
      options: {
        specs: 'spec/**/*.js'
      }
    },

    sass: {
      dist: {
        files: {
          'dist/css/<%= pkg.name %>.css': 'app/css/app.scss'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['test', 'concat', 'uglify'],
      },
      css: {
        files: ['app/css/**/*.scss', 'app/css/**/*.css'],
        tasks: ['sass', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('server', ['default', 'connect', 'watch'])
  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['test', 'concat', 'uglify', 'sass', 'cssmin']);
};
