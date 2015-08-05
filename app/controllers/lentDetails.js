var lentThing = arguments[0] || {};

$.lentDetails.title = lentThing.get('whatDescription');
$.lentThingLabel.text = L('still_lent') + ' ' + L('to') + ' ' + lentThing.get('whoName');
$.whereLentThingLabel.text = L('at') + ' ' + lentThing.get('whereLocation');
 
if (lentThing.get('photo')) {
	$.photoImageView.image = lentThing.get('photo');
}

function gaveMeBack() {
	remove();
	
	if(lentThing.get('photo')){
		var photoFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,
													lentThing.get('photo'));
		if(photoFile.exists())
			photoFile.deleteFile();
	}	
}

function remove() {
	lentThing.destroy();
	close();
}

function close() {
	Alloy.Collections.BorrowedLentThing.fetch();
	$.lentDetails.close();		
}

function showMap() {
	var ctrl = Alloy.createController('map', lentThing);
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
