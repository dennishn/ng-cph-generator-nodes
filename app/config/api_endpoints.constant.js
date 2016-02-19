(function() {
	'use strict';

	/**
	 * @name API_ENDPOINTS
	 * @description
	 *
	 * Endpoint definitions.
	 *
	 * Example
	 * users: {
	 * 	create: 'users',
	 * 	update: 'users/:id',
	 * 	delete: 'users/:id',
	 * 	list: 'users',
	 * 	single: 'users/:id'
	 * }
	 */
	angular
		.module('API_ENDPOINTS', [])
		.constant('API_ENDPOINTS', {
			root: 'https://ngcphplusone.firebaseio.com/',
			plusOnes: {
				list: 'plusOnes',
				single: 'plusOnes/:id',
				create: 'plusOnes',
				update: 'plusOnes/:id',
				remove: 'plusOnes/:id'
			}
		});
})();
