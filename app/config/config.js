(function() {
	'use strict';

	/**
	 * @name config
	 * @description
	 *
	 * Glboal Configuration Module
	 */
	var core = angular.module('config', [
		'DEBUG_ENV',
		'APPLICATION_SETTINGS',
		'angular-loading-bar',
		'cgBusy'
	]);

	core.value('cgBusyDefaults', {
		message:'Loading Stuff',
		backdrop: true,
		templateUrl: '../common/core/loadingindicator/loadingindicator.template.html'
	});

	core.config(configure);

	/* @ngInject */
	function configure(DEBUG_ENV,
					   $logProvider,
					   $stateProvider,
					   $urlRouterProvider,
					   $locationProvider,
					   cfpLoadingBarProvider,
					   $httpProvider) {

		// Set logging levels based on our DEBUG_ENV constant.
		// This is also where you would control logging to third-party services.
		if($logProvider.debugEnabled && DEBUG_ENV) {
			$logProvider.debugEnabled(true);
		} else {
			$logProvider.debugEnabled(false);
		}

		// We only want the loading bar and not the spinner.
		cfpLoadingBarProvider.includeSpinner = false;
		cfpLoadingBarProvider.latencyThreshold = 100;

		// We always run with html5Mode enabled.
		// A .htaccess with the necesarry configs for Apache is provided in our generator.
		$locationProvider.html5Mode(true);
		// We like having 404 pages!
		$urlRouterProvider.otherwise('/404');

		// Some catch-states we can redirect to if something bad happens.
		// The state "error" is not a child of "application" as we mostly use this state to deny people access etc.
		$stateProvider
			.state('application.notfound', {
				url: '/404',
				views: {
					'application@': {
						templateUrl: '404.html'
					}
				}
			})
			.state('error', {
				url: '/503',
				views: {
					'application@': {
						templateUrl: '503.html'
					}
				}
			});
	}

})();
