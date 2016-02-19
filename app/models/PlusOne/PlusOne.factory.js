(function () {
	'use strict';

	/**
	 * @name PlusOneFactory
	 * @author Dennis Haulund Nielsen
	 */
	angular
		.module('PlusOnes')
		.factory('PlusOneFactory', PlusOne);

	/* @ngInject */
	function PlusOne($firebaseArray, API_ENDPOINTS, PlusOnesService) {
		/*jshint validthis: true */

		/**
		 * Model constructor method. Used to create new PlusOnes with either default values or data provided.
		 * Currently contains no validation, but this is where we should do this.
		 * Methods such as beforeSave, afterSave, and caching should also go in here.
		 * @param data
		 * @constructor
		 */
		var Model = function(data) {
			angular.extend(this, data);

			// If we don't already have created/modified dates, we set these when we instantiate new models.
			if(!this.created) {
				this.created = Date.now();
			}

			if(!this.updated) {
				this.updated = this.created;
			}

			// A PlusOne is itself connected to a Firebase, but we also need to have real-time sync of the
			// suggestions in a PlusOne. Each new instance of PlusOnes gets a firebaseArray linked to it.
			// https://ngcphplusone.firebaseio.com/:PlusOne ID/suggestions
			var root = new Firebase([
				API_ENDPOINTS.root,
				API_ENDPOINTS.plusOnes.single.replace(':id', this.$id)
			].join(''));

			this.suggestions = $firebaseArray(root.child('suggestions'));

		};

		/**
		 * Updates the PlusOne updated key, and persists the PlusOne to Firebase.
		 * @returns {Promise}
		 */
		Model.prototype.save = function() {
			this.updated = Date.now();

			return PlusOnesService.create(this);
		};

		/**
		 * Persists a suggestion to Firebase with it's vote count set to 0.
		 * @param suggestion
		 * @returns {Promise}
		 */
		Model.prototype.addSuggestion = function(suggestion) {
			if(!suggestion.votes) {
				suggestion.votes = 0;
			}

			return this.suggestions.$add(suggestion);
		};

		/**
		 * Finds, increments and persists the vote count for a suggestion on Firebase.
		 * @param suggestionId
		 * @returns {Promise}
		 */
		Model.prototype.voteOnSuggestion = function(suggestionId) {

			var record = this.suggestions.$getRecord(suggestionId);

			record.votes++;

			return this.suggestions.$save(record);

		};

		return Model;
	}

})();







