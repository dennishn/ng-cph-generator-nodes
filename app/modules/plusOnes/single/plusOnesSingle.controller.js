(function () {
	'use strict';

	/**
	 * @name PlusOnesSingleController
	 * @author Dennis Haulund Nielsen
	 */
	angular
		.module('plusOnes')
		.controller('PlusOnesSingleController', PlusOnesSingle);

	/* @ngInject */
	function PlusOnesSingle(single, PlusOneFactory) {
		/*jshint validthis: true */
		var vm = this;

		// Create an instance of the PlusOneFactory with data fetched from Firebase.
		// PlusOneFactory has appropriate methods to manage persistance, this helps keep the controller DRY.
		vm.plusOne = new PlusOneFactory(single);

		// Methods we bind to be used in the view.
		vm.createPlusOneSuggestion = createPlusOneSuggestion;
		vm.voteOnSuggestion = voteOnSuggestion;

		/**
		 * Adds a suggestion to the PlusOne data source on Firebase, and clears the form input.
		 * @param id
		 */
		function createPlusOneSuggestion(id) {
			vm.plusOne.addSuggestion(vm.plusOneSuggestion);
			vm.plusOneSuggestion.name = '';
		}

		/**
		 * Increments the suggestion in the PlusOne data source on Firebase.
		 * @param id
		 */
		function voteOnSuggestion(id) {
			vm.plusOne.voteOnSuggestion(id);
		}
	}

})();
