(function() {
	'use strict';

	/**
	 * @name application
	 * @author Dennis Haulund Nielsen
	 * @description
	 *
	 * Root Application abstract state configuration
	 *
	 * This is an abstract state that all views must be children off.
	 * This helps immensely with topics such as security and sharing data between states.
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
