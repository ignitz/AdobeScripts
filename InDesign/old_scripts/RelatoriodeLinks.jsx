var filePath = "~/Desktop/" + app.activeDocument.name + "_ItemLinks.txt";
var codeFile = new File(filePath);
    codeFile.encoding = "UTF-8";
    codeFile.open("w");
var temp = '';
for (var i = 0; i < app.activeDocument.allGraphics.length; i++) {
	temp += app.activeDocument.allGraphics[i].itemLink.filePath + '\n';
};
codeFile.write(temp);
codeFile.close();