﻿/*2015 Yuri Niitsuma <ignitzhjfk@gmail.com>*/var diretorio_exportacao = "~/Desktop/export/";// var diretorio_exportacao = "/Volumes/ZAZU/export/";function setOpacityBox(value){    function setTransparency(option) {            var links = app.selection[0].allPageItems;        switch(option)        {            case 0:                                for(var i = 0; i < links.length; i++)                {                    if(links[i].toString() == '[object TextFrame]')                        if(links[i].contentType == ContentType.TEXT_TYPE && (links[i].contents.substring(0, 6) == 'SECAO:'))                            links[i].transparencySettings.blendingSettings.opacity = value;                }                break;            case 1:                                for(var i = 0; i < links.length; i++)                {                    if(links[i].toString() == '[object TextFrame]')                        if(links[i].contentType == ContentType.TEXT_TYPE && (links[i].contents.substring(0, 9) == 'GABARITO:'))                            links[i].transparencySettings.blendingSettings.opacity = value;                }                break;            case 2:                                for(var i = 0; i < links.length; i++)                {                    if(links[i].toString() == '[object TextFrame]')                        if(links[i].contentType == ContentType.TEXT_TYPE && (links[i].contents.substring(0, 5) == 'INFO:'))                            links[i].transparencySettings.blendingSettings.opacity = value;                }                break;            case 3:                                for(var i = 0; i < links.length; i++)                {                    if(links[i].toString() == '[object TextFrame]')                        if(links[i].contentType == ContentType.TEXT_TYPE && (links[i].contents.substring(0, 9) == 'GABARITO:' || links[i].contents.substring(0, 6) == 'SECAO:' || links[i].contents.substring(0, 5) == 'INFO:'))                            links[i].transparencySettings.blendingSettings.opacity = value;                }                break;            case 4:                var temp = prompt("Insira o Header. OPACIDADE = " + value.toString() + "!", '');                if(temp != null)                {                    for(var i = 0; i < links.length; i++)                    {                        if(links[i].toString() == '[object TextFrame]')                            if(links[i].contentType == ContentType.TEXT_TYPE && links[i].contents.substring(0, temp.length + 1) == (temp + ':'))                                links[i].transparencySettings.blendingSettings.opacity = value;                    }                }                break;        }    }    var myDialog, myTabButtons;    with(myDialog = app.dialogs.add({name:"Qual tipo deseja aplicar?"})){        with(dialogColumns.add()){            with(borderPanels.add()){                  staticTexts.add({staticLabel:"Escolha a opção:"});                with(myTabButtons = radiobuttonGroups.add()){                    radiobuttonControls.add({staticLabel:"SECAO"});                    radiobuttonControls.add({staticLabel:"GABARITO"});                    radiobuttonControls.add({staticLabel:"INFO"});                    radiobuttonControls.add({staticLabel:"Tudo", checkedState:true});                    radiobuttonControls.add({staticLabel:"CUSTOM"});                }            }            //    staticTexts.add({staticLabel:"Eu amos vocês"});            //}        }    }    var myResult = myDialog.show();    if(myResult == true){        // var myTabType = myTabButtons.selectedButton;        setTransparency(myTabButtons.selectedButton);        myDialog.destroy();    }    else{        myDialog.destroy();    }}function splitAlternativa() {    var links = app.selection[0];    // $.writeln(links.paragraphs);    var abacate = prompt("Insira o número de colunas!","");    for(var i = 0; i < links.paragraphs.length; i++)    {        links.paragraphs[i].spanColumnType = SpanColumnTypeOptions.SPLIT_COLUMNS;        links.paragraphs[i].spanSplitColumnCount = parseInt(abacate);        links.paragraphs[i].splitColumnInsideGutter = 0.0;    }}function commentLetterEPS() {    var i;    var links = app.selection[0].allGraphics;    var confirmacao = confirm("Deseja aplicar?");    if (confirmacao)    {        for (i=0; i<links.length; i++)        {            links[i].parent.move([links[i].parent.gradientFillStart[0], links[i].parent.gradientFillStart[1] + (links[i].geometricBounds[2] - links[i].geometricBounds[0])*0.4 ]);            links[i].parent.parent.spaceAfter = (links[i].geometricBounds[2] - links[i].geometricBounds[0] - 17);        }            }    else        alert("Script cancelado!!!");}function doClearTransformation() {    var i;    var links = app.selection[0].allGraphics;      alert("Script para aplicar Clear Transformation e Fit Content To Window em todas as imagens em EPS!\n");    var confirmacao = confirm("Tem certeza que deseja executar isto? Tem certeza? Tem certeza realmente?");    if (confirmacao)    {        for (i=0; i<links.length; i++)          {              if(links[i].itemLink.name.substr(links[i].itemLink.name.lastIndexOf(".")) == ".eps"                ||                links[i].itemLink.name.substr(links[i].itemLink.name.lastIndexOf(".")) == ".EPS")            {                links[i].clearTransformations();                links[i].parent.fit(FitOptions.FRAME_TO_CONTENT);            }        }        alert("Todas as imagens aplicadas!");     }    else        alert("Cancelado!");}function gerarGabarito() {    var filePath = "~/Desktop/" + app.activeDocument.name + "_GABARITO.txt";    var gabFile = new File(filePath);    gabFile.encoding = "UTF-8";    gabFile.open("w");    var gabarito = '';    var countQuest = 1;    var links = app.selection[0].allPageItems;        for(var i = 0; i < links.length; i++)    {        if(links[i].toString() == '[object TextFrame]')            if(links[i].contentType == ContentType.TEXT_TYPE)            {                if (links[i].contents.substring(0, 9) == 'GABARITO:')                {                    if(countQuest < 10)                        gabarito = gabarito + '0' + (countQuest++) + '.\t' + links[i].contents.substring(10, links[i].contents.length) + '\n';                    else                        gabarito = gabarito + (countQuest++) + '.\t' + links[i].contents.substring(10, links[i].contents.length) + '\n';                }                else if (links[i].contents.substring(0, 6) == 'SECAO:')                {                     gabarito = gabarito + links[i].contents.substring(7, links[i].contents.length) + '\n';                     countQuest = 1;                };            }    }        gabFile.write(gabarito);    gabFile.close();    // alert (message, title, errorIcon)}function gerarImportGabarito() {    var filePath, filePathFIX;    filePathFIX = Folder.selectDialog("Escolha onde salvar o GABARITO!");    // filePathFIX = Folder.selectDlg("Escolha onde salvar o GABARITO!");    if (filePathFIX == null) {        return -1;    };    var gabFile = new File(filePath);    gabFile.encoding = "UTF-8";    gabFile.open("w");    var gabarito = '';    var secaoCount = 1;    var links = app.selection[0].allPageItems;        for(var i = 0; i < links.length; i++)    {        if(links[i].toString() == '[object TextFrame]')        {            if(links[i].contentType == ContentType.TEXT_TYPE)            {                if (links[i].contents.substring(0, 6) == 'SECAO:')                {                    if (secaoCount > 1)                    {                        gabarito = gabarito.substring(0, gabarito.length-1);                        gabFile.write(gabarito);                        gabFile.close();                        gabarito = '';                    }                    if (secaoCount < 10)                        filePath = filePathFIX + "/0";                    else                        filePath = filePathFIX + "/";                    filePath += secaoCount++ + " - " + links[i].contents.substring(7, links[i].contents.length) + ".txt";                    gabFile = new File(filePath);                    gabFile.encoding = "UTF-8";                    gabFile.open("w");                }                else if (links[i].contents.substring(0, 9) == 'GABARITO:')                {                    gabarito = gabarito + links[i].contents.substring(10, links[i].contents.length) + '\n';                }            }        }    }    gabarito = gabarito.substring(0, gabarito.length-1);    gabFile.write(gabarito);    gabFile.close();    // alert (message, title, errorIcon)}function deleteFrame() {    var links = app.selection[0].allPageItems;        for(var i = 0; i < links.length; i++)        if(links[i].toString() == '[object TextFrame]')            if(links[i].contentType == ContentType.TEXT_TYPE)                if(links[i].contentType == ContentType.TEXT_TYPE && (links[i].contents.substring(0, 9) == 'GABARITO:' || links[i].contents.substring(0, 6) == 'SECAO:' || links[i].contents.substring(0, 9) == 'ORIGINAL:'))                    links[i].remove();}function exportQuestions() {    var prefixo = "";    // var prefixo = prompt("Insira o capítulo.","")    function copyQuestion()    {        var numQuest;        app.copy();        app.documents.add().textFrames.add({geometricBounds : [12.7, 12.7, 271.6, 96.2]}); // Tem que ser em mm        app.activeDocument.allPageItems[0].parentStory.texts[0].select();        app.paste();        app.activeDocument.allPageItems[0].fit(FitOptions.FRAME_TO_CONTENT);                alladin = app.selection[0].paragraphs;        if(prefixo == '')            prefixo = "UNKNOW";        if(!(Folder(diretorio_exportacao + prefixo).exists))        {            Folder(diretorio_exportacao+ prefixo).create();        }        numQuest = Folder(diretorio_exportacao+ prefixo).getFiles().length + 1;                if(numQuest < 100)        {            if(numQuest < 10)                app.activeDocument.save(File(diretorio_exportacao+ prefixo + "/" + "00" + (numQuest) + ".indd"));            else                app.activeDocument.save(File(diretorio_exportacao+ prefixo + "/" + "0" + (numQuest) + ".indd"));        }        else        {            app.activeDocument.save(File(diretorio_exportacao+ prefixo + "/" + (numQuest) + ".indd"));        }        app.activeDocument.close();    }    var countQuest;    // app.selection[0].parentStory.texts[0].select();    var allParag = app.selection[0].paragraphs;    //~ $.writeln(allParag[0].contents);    app.findChangeGrepOptions.includeFootnotes = true;    app.findGrepPreferences = null;    app.findGrepPreferences.findWhat = "^XX.\\t";    var myFound = app.activeDocument.findGrep();    //~ $.writeln(countQuest = myFound.length);    var numQuest, checkNumberQuest = 0;        for(var i =0; i < allParag.length; i++)    {        if(allParag[i].contents.substring(0,3) == "XX.")        {            prefixo = allParag[i].contents.substring(allParag[i].contents.indexOf("(") + 1,allParag[i].contents.indexOf(")"));            if(checkNumberQuest > 0)            {                copyQuestion();                prefixo = '';            }            else                checkNumberQuest = 1;                        // $.writeln(allParag[i].contents); // DEBUG            allParag[i].select();        }        else            allParag[i].select(SelectionOptions.ADD_TO);    }    // Pra finalizar    copyQuestion();    alert("FINISH!");}function insereGabarito() {        var links = app.selection[0].allPageItems;    var temp, value_Temp;    for(var i = 0; i < links.length; i++)    {        if(links[i].toString() == '[object TextFrame]')        {            if(links[i].contentType == ContentType.TEXT_TYPE)            {                if (links[i].contents.substring(0, 9) == 'GABARITO:')                {                    temp = prompt(links[i].parent.paragraphs[0].contents.substring(0,3),  links[i].contents.substring(10, links[i].contents.length));                                        if(temp != null)                    {                        while(links[i].characters.length > 10)                            links[i].characters[10].remove();                        if(links[i].characters.length == 9)                             links[i].contents += ' ';                        links[i].contents += temp;                    }                    else                        alert('Erro na inserção.\n' + temp);                }                else if (links[i].contents.substring(0, 5) == 'INFO:')                {                    if(links[i].parent.paragraphs[0].contents[4] == '(')                    {                        valueTemp = links[i].parent.paragraphs[0].contents.lastIndexOf(")");                        temp = links[i].parent.paragraphs[0].contents.substring(5, valueTemp);                         if(temp != null)                        {                            while(links[i].paragraphs[0].contents.length > 7)                            {                                links[i].paragraphs[0].characters[6].remove();//~                                 $.writeln(links[i].paragraphs[0].contents);//~                                 $.writeln(links[i].paragraphs[0].characters.length);                            }                            links[i].paragraphs[0].characters[-2].contents += temp;                            // links[i].paragraphs[0].contents += temp;                        }                        else                            alert('Erro na inserção.' + temp);                    }                }            }                    } // end of if(links[i].toString() == '[object TextFrame]')                // end if    }}function doImport() {    var aFile = File.openDialog("Escolha a lista de arquivos *.txt");    var myList = new Array;    if (aFile != null)    {        aFile.open("r");        var count = 0;        while(!aFile.eof)        {            myList.push(aFile.readln());            count++;        }//~         $.writeln(myList);//~         $.writeln("TAMANHO: " + myList.length);    }    else        exit();//~     $.writeln(aFile.path);    for(var k = 0; k < myList.length; k++)      {        //~     app.selection[0].contents += (k+1).toString();        // if(app.open(File("~/Desktop/import/" + myList[k])))        if(app.open(File(aFile.path + '/' + myList[k] + '.indd')))        {            simba = app.activeDocument.allPageItems;            simba[0].parentStory.texts[0].select();            //~         insertBuffer = app.selection[0];            //~         alert(insertBuffer.parentStory.paragraphs.showText());            app.copy();            app.activeDocument.close();            app.paste();            app.selection[0].contents += '\r';        }        else        {            alert("Questão não está presente no banco de dados.");            exit();        }    }}function doQuestionNumber() {    app.findChangeGrepOptions.includeFootnotes = true;    app.findGrepPreferences = null;    app.findGrepPreferences.findWhat = "^XX.\t";    var myFound = app.selection[0].findGrep();    var iCount = prompt("Insira o primeira número da questão!",'');    iCount = parseInt(iCount);        for (var i = 0; i < myFound.length; i++)    {//~         $.writeln(myFound[i].contents);        if(i + iCount <= 9)            myFound[i].contents = "0" + (i + iCount).toString() + ".\t";        else            myFound[i].contents = (i + iCount).toString() + ".\t";        // myFound[i].contents = myFound[i].contents.toLowerCase();        // myFound[i].capitalization = Capitalization.smallCaps;    }//~     $.writeln(myFound);}function doXX() {    app.findChangeGrepOptions.includeFootnotes = true;    app.findGrepPreferences = null;    app.findGrepPreferences.findWhat = "^\\d\\d.\\t";    var myFound = app.selection[0].findGrep();    for (var i = 0; i < myFound.length; i++)    {//~         $.writeln(myFound[i].contents);        myFound[i].contents = "XX.\t";    }//~     $.writeln(myFound);}function myDisplayDialog(){    var myDialog, myTabButtons;    with(myDialog = app.dialogs.add({name:"Mano Menezes 20151002 - Yuri Niitsuma"})){        with(dialogColumns.add()){            with(borderPanels.add()){                  staticTexts.add({staticLabel:"Escolha a opção:"});                with(myTabButtons = radiobuttonGroups.add()){                    radiobuttonControls.add({staticLabel:"Importar questões"});                    radiobuttonControls.add({staticLabel:"Exportar questões modularizadas."});                }            }            // with(borderPanels.add()){            //    staticTexts.add({staticLabel:"Eu amos vocês"});            //}        }    }    var myResult = myDialog.show();    if(myResult == true){        // var myTabType = myTabButtons.selectedButton;        switch(myTabButtons.selectedButton)        {            case 0:                doImport();                break;            case 1:                exportQuestions();                break;            default:                alert("Opção inexistente!\nContate o desenvolvedor Yuri Niitsuma. <ignitzhjfk@gmail.com>");                break;        }        myDialog.destroy();    }    else{        myDialog.destroy();    }}// var pass = prompt("Script para utilização no Núcleo de Matemática, versão de testes.","Insira sua senha aqui");// if (pass == "121213")    myDisplayDialog();// else    //alert("Senha errada.");