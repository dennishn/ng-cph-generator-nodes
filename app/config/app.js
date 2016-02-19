(function() {
	'use strict';

	/**
	 * @name ng-demo
	 * @description
	 *
	 * Root Application Module
	 */
	angular
		.module('ng-demo', [
			'DEBUG_ENV',
			'API_ENDPOINTS',
			'APPLICATION_SETTINGS',
			'ui.router',
			'angular-loading-bar',
			'angulartics',
			'angulartics.google.analytics',
			'firebase',
			'nCore',
			'mm.foundation',
			'ngAnimate',
			'ngSanitize',
			'ngTouch',
			'ngStorage',
			'config',
			'application',
			'plusOnes',
			'PlusOnes',
			/* ---> Do not delete this comment (ngImports) <--- */
	]);
})();