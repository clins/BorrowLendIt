var args = arguments[0] || {};

function showDetails(e){
	var borrowedThing = Alloy.Collections.BorrowedLentThing.get(e.rowData.rowid);
	var ctl = Alloy.createController('borrowedDetails', borrowedThing);
	$.borrowedTab.open(ctl.getView());
}

function borrowedFilter(collection) {
	return collection.where({lentOrBorrowed:0});
}
