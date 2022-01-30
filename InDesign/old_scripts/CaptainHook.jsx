/*
2015 Yuri Niitsuma <ignitzhjfk@gmail.com>
*/

app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;

var filePath = "~/Desktop/CodeExtract.txt";
var codeFile = new File(filePath);
	codeFile.encoding = "UTF-8";
    codeFile.open("w");

// Colocar as colunas
var code = 'ID\tVol\t\tArquivo INDD\tBernoulliTV CODE\tPágina\tEnunciado\n';


function execute_VideoCode(prefix){
	var DocumentOpen = app.activeDocument;

	var temp,
		questSize;
	for (var i = 0; i < DocumentOpen.allPageItems.length; i++) {
		if (DocumentOpen.allPageItems[i].toString() == '[object TextFrame]')
		{
			if (DocumentOpen.allPageItems[i].contents.length == 4)
			{
				questSize = 1; temp ='';
				temp = DocumentOpen.allPageItems[i].parent.paragraphs[0].contents;
				temp = temp.replace(/\t/g, ' ');
				temp = temp.replace(/\n/g, ' ');
				code += prefix + '\t' + DocumentOpen.name + '\t' +DocumentOpen.allPageItems[i].contents + '\t' + DocumentOpen.allPageItems[i].parentPage.name + '\t\"' + temp.substring(0,temp.length-1) + '\"\n';
			}
		}
	}
}

function doToAllFiles(prefix){
	while(app.documents.length > 0)
	{
		execute_VideoCode(prefix);
		app.activeDocument.close();
	}
}

function openAllFiles(caminho)
{
	var arquivos = Folder(caminho).getFiles("*.indd");
	for (var i = 0; i < arquivos.length; i++) {
		app.open(File(arquivos[i].toString()));
	};
}

// Aqui vem o roteiro de quais arquivos abrir

function justDoIt(){
		
	// Aqui vou colocar pra abrir todos os indd
	openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/4V/Principal/Vol.1/Matematica/Editoracao/Producao');
	doToAllFiles('4V\t1\t');
	openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/4V/Principal/Vol.2/Matematica/Editoracao/Producao');
	doToAllFiles('4V\t2\t');
	openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/4V/Principal/Vol.3/Matematica/Editoracao/Producao');
	doToAllFiles('4V\t3\t');
	openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/4V/Principal/Vol.4/Matematica/Editoracao/Producao');
	doToAllFiles('4V\t4\t');
	openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/6V/Principal/Vol.1/Matematica/Editoracao/Producao');
	doToAllFiles('6V\t1\t');
	openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/6V/Principal/Vol.2/Matematica/Editoracao/Producao');
	doToAllFiles('6V\t2\t');
	openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/6V/Principal/Vol.3/Matematica/Editoracao/Producao');
	doToAllFiles('6V\t3\t');
	openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/6V/Principal/Vol.4/Matematica/Editoracao/Producao');
	// doToAllFiles('6V\t4\t');
	// openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/6V/Principal/Vol.5/Matematica/Editoracao/Producao');
	// doToAllFiles('6V\t5\t');
	// openAllFiles('/Volumes/Editora/G.Producao/2016/Publicacoes/6V/Principal/Vol.6/Matematica/Editoracao/Producao');
	// doToAllFiles('6V\t6\t');
		


	// Pra finalizar
	codeFile.write(code);
	codeFile.close();
}


// Teste
justDoIt();

app.scriptPreferences.userInteractionLevel = UserInteractionLevels.INTERACT_WITH_ALL;

