var args = arguments[0] || {};

var photoFile = null;

function close() {
	if (OS_IOS) {
		$.navWin.close();
	} else {
		$.newBorrowedThingWindow.close();	
	}
}

function save() {
	
	var borrowedThing = Alloy.createModel('borrowedLentThing', {
		whatDescription:$.whatBorrowTextField.value, //'Borrowed Test',
		whoName:$.whoBorrowTextField.value, //'John',
		lentOrBorrowed:0
	});
	
	if(photoFile)
		borrowedThing.set('photo', photoFile.nativePath);
		
	borrowedThing.save();
	
	Alloy.Collections.BorrowedLentThing.fetch();
	
	close();
}

function takePhoto() {
	Ti.Media.showCamera({
		success:function(e) {
			var image = e.media;
			$.photoImageView.image = image;
			
			photoFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,
												"BORROWED_" + (new Date().getTime()) + ".jpg");
			photoFile.write(image);
		},
		mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
	});
}
