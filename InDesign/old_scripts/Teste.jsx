/*
2015 Yuri Niitsuma <ignitzhjfk@gmail.com>
*/


//~ $.writeln(app.activeDocument.paragraphStyles[1].name);
//~ var simba = app.selection[0].paragraphs[0].words.everyItem().contents;
// app.selection[0].parentStory.paragraphs[0];
// app.documents.add();
var simba = app.selection[0].parentStory.paragraphs;
simba[0].remove();
// app.activeDocument.textframe.add();