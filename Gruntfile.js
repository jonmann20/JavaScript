module.exports = function(grunt) {

	grunt.initConfig({
	    connect: {
	        server: {
	            options: {
	                hostname: "jsclass",
	                port: 220,
	                open: true
	            }
	        }
	    },

	    watch: {
	        options: {
	            livereload: true
	        },

	        theJs: {
	            files: ["index.html"],
	            tasks: [""]
	        }
	    }
	});

	grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
  
    grunt.registerTask("default", ["connect", "watch"]);
};
