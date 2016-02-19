(function() {
	'use strict';

	/**
	 * @name plusOnes
	 * @author Dennis Haulund Nielsen
	 */
	angular.module('plusOnes')
		/* @ngInject */
		.config(function ($stateProvider) {

			/**
			 * The root state of the plusOnes modules.
			 * This route resolves with an array of PlusOnes from Firebase.
			 * example: http://www.xyz.com/
			 */
			var plusOnes = {
				name: 'application.plusOnes',
				url: '/',
				views: {
					'application@application': {
						templateUrl: 'modules/plusOnes/plusOnes.template.html',
						controller: 'plusOnesController',
						controllerAs: 'plusOnes'
					}
				},
				resolve: {
					list: function(PlusOnesService) {
						return PlusOnesService.getList();
					}
				}
			};

			/**
			 * The single view child-state of the plusOnes modules.
			 * This route resolves with a PlusOne object from Firebase based on the id from the url-parameter.
			 * example: http://www.xyz.com/item/-234hf374nz
			 */
			var plusOneSingle = {
				name: 'application.plusOnes.single',
				url: 'item/:id',
				views: {
					'application@application': {
						templateUrl: 'modules/plusOnes/single/plusOnesSingle.template.html',
						controller: 'PlusOnesSingleController',
						controllerAs: 'plusOneSingle'
					}
				},
				resolve: {
					single: function(PlusOnesService, $stateParams) {
						return PlusOnesService.getSingle($stateParams.id);
					}
				}
			};

			/**
			 * The create view child-state of the plusOnes modules.
			 * This route resolves no data.
			 * example: http://www.xyz.com/create
			 */
			var plusOneCreate = {
				name: 'application.plusOnes.create',
				url: 'create',
				views: {
					'application@application': {
						templateUrl: 'modules/plusOnes/create/plusOnesCreate.template.html',
						controller: 'PlusOnesCreateController',
						controllerAs: 'plusOneCreate'
					}
				}
			};

			$stateProvider.state(plusOnes);
			$stateProvider.state(plusOneSingle);
			$stateProvider.state(plusOneCreate);
		});
})();
