var args = arguments[0] || {};

function showDetails(e){
	var lentThing = Alloy.Collections.BorrowedLentThing.get(e.rowData.rowid);
	var ctrl = Alloy.createController('lentDetails', lentThing);
	$.lentTab.open(ctrl.getView());	
}

function lendThing(){
	var ctrl = Alloy.createController('newLentThing');
	if (OS_IOS) {
		// No IOS é preciso de um navigationWindow para mostrar o title bar no modal
		var navWin = Ti.UI.iOS.createNavigationWindow({
			modal: true,
			window: ctrl.getView()
		});
		// Passando a referência do NavigationWindow para poder dar um close
		ctrl.navWin = navWin;
		navWin.open();
	} else {
		crtl.getView().open();
	}
}

function lentFilter(collection) {
	return collection.where({lentOrBorrowed:1});
}
