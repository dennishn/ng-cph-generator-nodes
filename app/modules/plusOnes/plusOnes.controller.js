(function () {
	'use strict';

	/**
	 * @name plusOnesController
	 * @author Dennis Haulund Nielsen
	 */
	angular
		.module('plusOnes')
		.controller('plusOnesController', plusOnesController);

	/* @ngInject */
	function plusOnesController($scope, list) {
		/*jshint validthis: true */
		var vm = this;

		vm.plusOnesList = list;
	}

})();
