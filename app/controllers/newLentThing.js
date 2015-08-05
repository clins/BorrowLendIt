var args = arguments[0] || {};

var photoFile = null;

function close() {
	if (OS_IOS) {
		$.navWin.close();
	} else {
		$.newLentThingWindow.close();	
	}
}

function save() {
	
	var lentThing = Alloy.createModel('borrowedLentThing', {
		whatDescription:$.whatLendTextField.value, //'Lent Test',
		whoName:$.whoLendTextField.value, //'John',
		whereLocation:$.whereLendTextField.value, //'Recife',
		lentOrBorrowed:1
	});

	if(photoFile)
		lentThing.set('photo', photoFile.nativePath);
	
	lentThing.save();

	Alloy.Collections.BorrowedLentThing.fetch();

	close();
}

function takePhoto() {
	Ti.Media.showCamera({
		success:function(e) {
			var image = e.media;
			$.photoImageView.image = image;
			
			photoFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,
												"LENT_" + (new Date().getTime()) + ".jpg");
			photoFile.write(image);
		},
		mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
	});
}
