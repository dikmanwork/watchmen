/*
	ping_interval: in seconds
	retry_in: minutes. If the site is no back up, keeps trying in the last value
	
	Both ping_interval and retry_in array can be defined at host or url level.
	
	notify_after_failed_ping:  
	You can set how many failed pings needs to be counted before triggering the notification email. 
	Ex: 1 (the second failed ping will trigger notification)
*/
var one_minute = 1 //you can set this to other value for testing the service in dev env.

exports.hosts = 
	[
		{
			name:'VitaminasDev', 
			host: 'www.vitaminasdev.com', 
			port:80,
			ping_interval: one_minute * 5, //seconds
			retry_in: [10,30,120], //minutes
			enabled: true,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 200, contains: 'noticias'} ,
				},
				{
					method: 'get', 
					url : '/Home/Contacto', 
					expected: {statuscode: 200, contains: 'encantados'},
					ping_interval:200, //overwrite ping and retry intervals for this url
					retry_in: [10,20,30]
				}
			]
		}
		,	
		{
			name:'iloire.com', 
			host: 'www.iloire.com', 
			port:80, 
			ping_interval: one_minute * 5,
			retry_in: [10,30,120],
			enabled: true,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 200, contains: 'vitaminas'} 
				},
				{
					method: 'get', 
					url : '/en', 
					expected: {statuscode: 200, contains: 'Freelance'} 
				},
			]
		}
		,
		{
			name:'ASP Photo Gallery', 
			host: 'www.aspphotogallery.net', 
			port:80, 
			ping_interval: one_minute * 5,
			retry_in: [10,30,120],
			enabled: true,
			notify_after_failed_ping: 1,
			alert_to: 'ajax@aspphotogallery.net', //you can include a different email recipient per host
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 200, contains: 'fast and responsive'}
				},
				{
					method: 'get', 
					url : '/mvcphotogallery', 
					expected: {statuscode: 200, contains: 'Knockout'}
				},
				{
					method: 'get', 
					url : '/demomvc', 
					expected: {statuscode: 200, contains: 'Simple, sexy, FAST, ASP.NET MVC photo gallery'}
				}
			]
		}
		,
		{
			name:'CachiruloValley', 
			host: 'cachirulovalley.com', 
			port:80, 
			ping_interval: one_minute * 5,
			retry_in: [10,30,120],
			enabled: true,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 200, contains: ''}
				}
			]
		}
		,
		{
			name:'SocialMadrid', 
			host: 'socialmadrid11.com', 
			port:80, 
			ping_interval: one_minute * 5,
			retry_in: [10,30,120],
			enabled: true,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 302, contains: ''}
				}
			]
		}
		,
		{
			name:'letsnode.com', 
			host: 'letsnode.com', 
			port:80, 
			ping_interval: one_minute * 5,
			retry_in: [10,30,120],
			enabled: true,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 200, contains: 'A blog about node.js and express.js'}
				}
			]
		}
		,
		{
			name:'letsnode.com frelancer service', 
			host: 'letsnode.com', 
			port:8080, 
			ping_interval: one_minute * 5,
			retry_in: [10,30,120],
			enabled: true,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 200, contains: 'journey'}
				}
			]
		}
		,
		{
			name:'letsnode.com directory web', 
			host: 'letsnode.com', 
			port:8081, 
			ping_interval: one_minute * 5,
			retry_in: [10,30,120],
			enabled: true,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 200, contains: 'directory'}
				}
			]
		}
		,
		{
			name:'google.com', 
			host: 'www.google.com', 
			port:80, 
			ping_interval: one_minute * 5,
			retry_in: [10,30,120],
			enabled: true,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 302, contains: ''}
				}
			]
		}
		,
		{
			name:'localhost service test', 
			host: '127.0.0.1', 
			port:8080, 
			ping_interval: one_minute * 5,
			retry_in: [1,30,120],
			enabled: false,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get', 
					url : '/', 
					expected: {statuscode: 200, contains: 'blog about node'}
				}
			]
		}
		,
		{
			name:'form post test', 
			host: 'hroch486.icpf.cas.cz', 
			port:80, 
			ping_interval: one_minute,
			retry_in: [1,30,120],
			enabled: true,
			notify_after_failed_ping: 1,
			urls : [
				{
					method: 'get',
					url : '/formpost.html', 
					expected: {statuscode: 200, contains: 'Test Form -- POST method'}
				},
				{
					method: 'post',
					input_data : 'your_name=Ivan&fruit=Banana', 
					content_type : 'application/x-www-form-urlencoded', // application/json
					url : '/cgi-bin/echo.pl', 
					expected: {statuscode: 200, contains: 'your_name = Ivan'}
				}
			]
		}
	]


exports.notifications = {
	Enabled: false, //if disabled, no email will be sent (just console messages)
	To: 'ivan@iloire.com',
	postmark : {
		From: 'ivan@iloire.com',
		Api_key : 'your-key-here'
	}
} 
