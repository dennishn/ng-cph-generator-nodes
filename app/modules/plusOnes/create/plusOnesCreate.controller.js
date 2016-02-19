(function () {
	'use strict';

	/**
	 * @name PlusOnesCreateController
	 * @author Dennis Haulund Nielsen
	 */
	angular
		.module('plusOnes')
		.controller('PlusOnesCreateController', PlusOnesCreate);

	/* @ngInject */
	function PlusOnesCreate(PlusOneFactory, PlusOnesService, $state) {
		/*jshint validthis: true */
		var vm = this;

		// Create an instance of the PlusOneFactory with default values.
		// PlusOneFactory has appropriate methods to manage persistance, this helps keep the controller DRY.
		vm.plusOne = new PlusOneFactory();

		// Methods we bind to be used in the view.
		vm.createPlusOne = createPlusOne;

		/**
		 * Saves the view model to a new PlusOne data source on Firebase.
		 * Redirects to the root plusOnes state on success.
		 */
		function createPlusOne() {
			vm.plusOne.save()
				.then(function() {
					$state.go('application.plusOnes');
				});
		}

	}

})();
