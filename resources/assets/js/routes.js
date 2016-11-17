module.export = function(app) {

	// Server Routes
	// Handle API Calls

	//Front-end Routes
	app.use('/static', express.static(path.join(__dirname, 'index')));
};