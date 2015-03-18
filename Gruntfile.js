module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            dev: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    env: {
                        PORT: '3006'
                    },
                    args: ['--public']
                }
            }
        },
        watch: {
            server: {
                files: ['**/*'],
                //tasks: ['gitupdate'],
                options: {
                    livereload: true
                }
            }
        },
        gitadd: {
            task: {
                options: {
                    force: true,
                    all: true,
                }
            }
        },
        gitcommit: {
            task: {
                options: {
                    message: 'Divvy Robot',
                    noVerify: true,
                    noStatus: false
                }
            }
        },
        gitpush: {
            your_target: {
                options: {
                    remote: 'origin',
                    force: true,
                }
            }
        },

    });
    
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-git');

    grunt.registerTask('gitupdate', ['gitadd', 'gitcommit', 'gitpush']);

    grunt.registerTask('default', ['concurrent:dev']);

};