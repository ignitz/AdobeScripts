﻿/*2015 Yuri Niitsuma <ignitzhjfk@gmail.com>*/function fix_box_gabarito(){    var links = app.selection[0].allPageItems;    for(var i = 0; i < links.length; i++)    {        if(links[i].toString() == '[object TextFrame]')            if(links[i].contentType == ContentType.TEXT_TYPE && (links[i].contents.substring(0, 9) == 'GABARITO:' || links[i].contents.substring(0, 6) == 'SECAO:'))                links[i].anchoredObjectSettings.pinPosition = false;    }}// function teste(){//     var links = app.selection[0].allPageItems;//     for(var i = 0; i < links.length; i++)//     {//         if(links[i].toString() == '[object TextFrame]')//             if(links[i].contentType == ContentType.TEXT_TYPE && (links[i].contents.substring(0, 9) == 'GABARITO:' || links[i].contents.substring(0, 6) == 'SECAO:'))//                 alert(links[i].anchoredObjectSettings.anchorPoint + '\n' +// links[i].anchoredObjectSettings.anchorSpaceAbove + '\n' +// links[i].anchoredObjectSettings.anchorXoffset + '\n' +// links[i].anchoredObjectSettings.anchorYoffset + '\n' +// links[i].anchoredObjectSettings.anchoredPosition + '\n' +// links[i].anchoredObjectSettings.eventListeners + '\n' +// links[i].anchoredObjectSettings.events + '\n' +// links[i].anchoredObjectSettings.horizontalAlignment + '\n' +// links[i].anchoredObjectSettings.horizontalReferencePoint + '\n' +// links[i].anchoredObjectSettings.isValid + '\n' +// links[i].anchoredObjectSettings.lockPosition + '\n' +// links[i].anchoredObjectSettings.parent + '\n' +// links[i].anchoredObjectSettings.pinPosition + '\n' +// links[i].anchoredObjectSettings.properties + '\n' +// links[i].anchoredObjectSettings.spineRelative + '\n' +// links[i].anchoredObjectSettings.verticalAlignment + '\n' +// links[i].anchoredObjectSettings.verticalReferencePoint);//     }// }fix_box_gabarito();