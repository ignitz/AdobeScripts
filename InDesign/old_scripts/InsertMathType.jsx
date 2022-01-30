var filePath = "~/blank.eps";
app.place(File(filePath));

for (var i = 0; i < app.activeDocument.allGraphics.length; i++) {
    if(app.activeDocument.allGraphics[i].itemLink != null)
    if (app.activeDocument.allGraphics[i].itemLink.name == "blank.eps")
	{
		if (File('~/Desktop/links/Eqn' + (app.activeDocument.allGraphics.length + 1).toString() + '.eps').exists)
			app.activeDocument.allGraphics[i].itemLink.relink(File('~/Desktop/links/Eqn' + (app.activeDocument.allGraphics.length + 1).toString() + '.eps'));
		else
			app.activeDocument.allGraphics[i].itemLink.copyLink(File('~/Desktop/links/Eqn' + (app.activeDocument.allGraphics.length + 1).toString() + '.eps'));
		break;
	}
};
//app.place('~/blank.eps');
