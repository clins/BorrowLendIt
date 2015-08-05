exports.definition = {
	config: {
		columns: {
		    "whatDescription": "text",
		    "whoName": "text",
		    "whereLocation": "text",
		    "lentOrBorrowed": "integer",
		    "photo":"text"
		},
		adapter: {
			type: "sql",
			collection_name: "borrowedLentThings"
		}
	}, 
	extendModel: function(Model) {
		_.extend(Model.prototype, {
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};
