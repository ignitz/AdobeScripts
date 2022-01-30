var myFolder = Folder("/c/Users/yuri.diego/Desktop/teste");
var subcoisa = prompt("Coloque String do nome do arquivo pra importar ","AQUI AQUI")

var myWordDocuments = myFolder.getFiles(subcoisa);

var newDoc = app.documents.add();

for (var i = 0; i < myWordDocuments.length; i++) {
	(function() {
		
		var myDoc = app.activeDocument;
		var myTextFrame = app.activeWindow.activePage.textFrames.add();
		myTextFrame.geometricBounds = [297 - 12.7, 0 + 12.7, 0 + 12.7, 210 - 12.7];
		myTextFrame.place(File(myWordDocuments[i]));
	})();

	(function() {
		var myDoc = app.activeDocument;
		var myFrames = myDoc.textFrames;
		for (var j = 0; j < myFrames.length; j++) {
			while (myFrames[j].overflows === true) {
				var newPage = myDoc.pages.add();
				var pageMargins = newPage.marginPreferences;
				var newPageMargins = [pageMargins.top, pageMargins.left, myDoc.documentPreferences.pageHeight - pageMargins.bottom, myDoc.documentPreferences.pageWidth - pageMargins.right];
				var oldRuler = myDoc.viewPreferences.rulerOrigin;
				myDoc.viewPreferences.rulerOrigin = RulerOrigin.pageOrigin;
				with (myDoc.pages[-1].textFrames.add()) {
					geometricBounds = newPageMargins;
					previousTexFrame = myDoc.pages[-2].textFrames[0];
				}
				myDoc.viewPreferences.rulerOrigin = oldRuler;
			}
		}
	})();

	(function() {
		// var fileExpression = new RegExp(":", "gi");
		// var fileName = myWordDocuments[i].name.replace(fileExpression, "_");
		// var newFileNameAndPath = myFolder.absoluteURI + "/" + fileName + ".indd";
		// var newFile = new File(newFileNameAndPath);
		// app.activeDocument.save(new File(newFile));
		// app.activeDocument.close();
	})();
}
// var myFolder = Folder("/c/Users/yuri.diego/Desktop/teste");
// var subcoisa = prompt("Coloque teste","YA")

// var myWordDocuments = myFolder.getFiles(subcoisa);

// for (var i = 0; i < myWordDocuments.length; i++) {
// 	(function() {
// 		var newDoc = app.documents.add();
// 		var myDoc = app.activeDocument;
// 		var myTextFrame = app.activeWindow.activePage.textFrames.add();
// 		myTextFrame.geometricBounds = [297 - 12.7, 0 + 12.7, 0 + 12.7, 210 - 12.7];
// 		myTextFrame.place(File(myWordDocuments[i]));
// 	})();

// 	(function() {
// 		var myDoc = app.activeDocument;
// 		var myFrames = myDoc.textFrames;
// 		for (var j = 0; j < myFrames.length; j++) {
// 			while (myFrames[j].overflows === true) {
// 				var newPage = myDoc.pages.add();
// 				var pageMargins = newPage.marginPreferences;
// 				var newPageMargins = [pageMargins.top, pageMargins.left, myDoc.documentPreferences.pageHeight - pageMargins.bottom, myDoc.documentPreferences.pageWidth - pageMargins.right];
// 				var oldRuler = myDoc.viewPreferences.rulerOrigin;
// 				myDoc.viewPreferences.rulerOrigin = RulerOrigin.pageOrigin;
// 				with (myDoc.pages[-1].textFrames.add()) {
// 					geometricBounds = newPageMargins;
// 					previousTexFrame = myDoc.pages[-2].textFrames[0];
// 				}
// 				myDoc.viewPreferences.rulerOrigin = oldRuler;
// 			}
// 		}
// 	})();

// 	(function() {
// 		var fileExpression = new RegExp(":", "gi");
// 		var fileName = myWordDocuments[i].name.replace(fileExpression, "_");
// 		var newFileNameAndPath = myFolder.absoluteURI + "/" + fileName + ".indd";
// 		var newFile = new File(newFileNameAndPath);
// 		app.activeDocument.save(new File(newFile));
// 		app.activeDocument.close();
// 	})();
// }