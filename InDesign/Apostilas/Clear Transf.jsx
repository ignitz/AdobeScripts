/*
Script para aplicar Clear Transformation e Fit Content to Window em todas as imagens em EPS selecionadas no texto
2015 Yuri Niitsuma <ignitzhjfk@gmail.com>
*/

var i;
var links = app.selection[0].allGraphics;  
for (i=0; i<links.length; i++)  
{  
    if(links[i].itemLink.name.substr(links[i].itemLink.name.lastIndexOf(".")) == ".eps"
        ||
        links[i].itemLink.name.substr(links[i].itemLink.name.lastIndexOf(".")) == ".EPS")
    {
        links[i].clearTransformations();
        links[i].parent.fit(FitOptions.FRAME_TO_CONTENT);
    }
}

