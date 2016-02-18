(function() {
	'use strict';

	/**
	 * @name index
	 * @description
	 *
	 * Index state configuration
	 */
	angular.module('index')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.index',
				url: '/',
				views: {
					'application@application': {
						templateUrl: 'modules/index/index.template.html',
						controller: 'Index',
						controllerAs: 'index'
					}
				}
			};

			$stateProvider.state(Index);
		});
})();
