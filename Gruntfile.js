module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    sourceMap: true,
                },
                files: {
                    "./dev/styles/main.css": "./src/styles/main.less"
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    "./dist/styles/main.min.css": "./src/styles/main.less"
                }
            }
        },
        uglify: {
            production: {
                options: {
                    compress: true,
                },
                files: {
                    "./dist/scripts/main.min.js": "./src/scripts/main.js"
                }
            }
        },
        watch: {
            files: ["./src/**/*"],
            tasks: ["concurrent:development"],
        },
        replace: {
            development: {
                options: {
                    patterns: [
                        {
                            match: "replaceme_css",
                            replacement: "./styles/main.css"
                        },
                        {
                            match: "replaceme_js",
                            replacement: "../src/scripts/main.js"
                        }
                    ]
                },
                files: {
                    "./dev/index.html": "./src/index.html"
                }
            },
            production: {
                options: {
                    patterns: [
                        {
                            match: "replaceme_css",
                            replacement: "./styles/main.min.css"
                        },
                        {
                            match: "replaceme_js",
                            replacement: "./scripts/main.min.js"
                        }
                    ]
                },
                files: {
                    "./dist/index.html": "./src/index.html"
                }
            }
        },
        htmlmin: {
            production: {
                options: {
                    collapseWhitespace: true,
                    removeComments: true
                },
                files: {
                    "./dist/index.html" : "./dist/index.html"
                }
            }
        },
        concurrent: {
            development: ["less:development", "replace:development"],
            build: ["less:production", ["replace:production", "htmlmin"], "uglify"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-replace");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["concurrent:build"]);
}