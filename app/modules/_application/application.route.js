(function() {
	'use strict';

	/**
	 * @name application
	 * @description
	 *
	 * Root Application state configuration
	 */
	angular.module('application')
		/* @ngInject */
		.config(function($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				views: {
					'root@': {
						templateUrl: 'modules/_application/application.template.html',
						controller: 'Application',
						controllerAs: 'application'
					}
				}
			};

			$stateProvider.state(Application);
		});
})();
