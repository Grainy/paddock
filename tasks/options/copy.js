module.exports = {
	img: {
		files: [{
			expand: true,
			cwd: 'src/assets/img/',
			src: '**',
			dest: 'dist/assets/img',
		},
	]},
	jsVendor: {
		files: [{
			expand: true,
			cwd: 'src/assets/js/vendor',
			src: '**',
			dest: 'dist/assets/js/vendor',
		},
	]},
	jsScripts: {
		files: [{
			expand: true,
			cwd: 'src/assets/js/scripts',
			src: '**',
			dest: 'dist/assets/js/scripts',
		},
	]},
	css: {
		files: [{
			expand: true,
			cwd: 'src/assets/css/',
			src: '**',
			dest: 'dist/assets/css',
		},
	]},
}