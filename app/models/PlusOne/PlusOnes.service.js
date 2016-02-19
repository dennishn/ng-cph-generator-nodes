(function () {
	'use strict';

	/**
	 * @name PlusOneFactory
	 * @author Dennis Haulund Nielsen
	 */
	angular
		.module('PlusOnes')
		.service('PlusOnesService', PlusOnes);

	/* @ngInject */
	function PlusOnes(API_ENDPOINTS, $firebaseArray, $firebaseObject) {
		/*jshint validthis: true */

		// Set up a connection to Firebase for all our PlusOnes.
		var root = new Firebase([
			API_ENDPOINTS.root,
			API_ENDPOINTS.plusOnes.list
		].join(''));

		// Public API
		var service = {
			getList: getList,
			getSingle: getSingle,
			create: create
		};
		return service;

		/**
		 * Returns a promise resolving with a firebaseArray of all PlusOnes.
		 * @returns {Promise}
		 */
		function getList() {
			return $firebaseArray(root).$loaded();
		}

		/**
		 * Returns a promise resolving with a single PlusOne firebaseObject.
		 * @param id
		 * @returns {Promise}
		 */
		function getSingle(id) {
			return $firebaseObject(root.child(id)).$loaded();
		}

		/**
		 * Creates a single PlusOne and adds it to the firebaseArray of PlusOnes.
		 * @param data
		 * @returns {Promise}
		 */
		function create(data) {
			var items = $firebaseArray(root);
			return items.$add(data);
		}
	}

})();





