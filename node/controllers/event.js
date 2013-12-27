var server, graph;

server = require('../modules/server');
graph  = require('fbgraph');

server.get('/events', function (request, response) {
    'use strict';

	graph.get('/fql?q=SELECT pic_big%2C name%2C venue%2C location%2C start_time%2C eid FROM event WHERE eid IN (SELECT eid FROM event_member WHERE uid %3D me()) order by start_time DESC LIMIT 10&access_token=' + request.cookies['XSRF-TOKEN'], function (error, event) {
		if (error) { return next(error); }
		response.send(200, event.data)
	});
});

server.get('/events/:eventId', function (request, response, next) {
    'use strict';

	graph.get('/' + request.params.eventId + '/?fields=name,venue,location,start_time&access_token=' + request.cookies['XSRF-TOKEN'], function (error, event) {
		if (error) { return next(error); }
		response.send(200, event.data)
	});
});

server.get('/events/:eventId/attendings', function (request, response, next) {
    'use strict';

	graph.get('/' + request.params.eventId + '/attending/?fields=gender,link,name&access_token=' + request.cookies['XSRF-TOKEN'], function (error, attendings) {
		if (error) { return next(error); }
		response.send(200, attendings.data);
	});
});
