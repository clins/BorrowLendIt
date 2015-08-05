var borrowedThing = arguments[0] || {};

$.borrowedDetails.title = borrowedThing.get('whatDescription');
$.borrowedThingLabel.text = L('still_borrowed') + ' ' + L('from') + ' ' + borrowedThing.get('whoName');
 
if (borrowedThing.get('photo')) {
	$.photoImageView.image = borrowedThing.get('photo');
}

function returnedToOwner() {
	remove();
	
	if(borrowedThing.get('photo')){
		var photoFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,
													borrowedThing.get('photo'));
		if(photoFile.exists())
			photoFile.deleteFile();	
	}
}

function remove() {
	borrowedThing.destroy();
	close();
}

function close() {
	Alloy.Collections.BorrowedLentThing.fetch();
	$.borrowedDetails.close();		
}

function showMap() {
	var ctrl = Alloy.createController('map', borrowedThing);
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
		ctrl.getView().open();	
	}
}
