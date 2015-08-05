function addLent(){
	var activeTab = $.index.getActiveTab();
	var idx = $.index.tabs.indexOf(activeTab);
	var controllerName = 'newLentThing';
	
	if(idx == 1) { //Borrowed
		controllerName = 'newBorrowedThing';
	}
	
	var crtl = Alloy.createController(controllerName);
	var win = crtl.getView();
	win.open();
}

Alloy.Collections.BorrowedLentThing.fetch();

$.index.open();
