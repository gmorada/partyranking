angular.module('partyranking', ['ngCookies','facebook', 'event']).config(function ($facebookProvider) {
	'use strict';

    $facebookProvider.init({
        appId : '627209833972894',
        channelUrl : '//localhost:3000',
        status : true,
        cookie : true,
        xfbml : true
    });
}).run(function ($facebook, $cookies) {
	'use strict';

	$facebook.login(function (response) {
		$cookies['XSRF-TOKEN'] = response.authResponse.accessToken;
	});
});