var emails=document.querySelectorAll('table[aria-label=\"A tabela de redes e sistemas, que mostra as estatísticas de redes e sistemas dos participantes e dispositivos na reunião.\"] tbody tr');
var horaEntrada=document.querySelectorAll('table[aria-label=\"A tabela de redes e sistemas, que mostra as estatísticas de redes e sistemas dos participantes e dispositivos na reunião.\"] tbody tr td span div div');

//div[class=\"K0jotd]\"
//console.log(emails);
var botoes=document.querySelectorAll('.K0jotd');
var emaillist=document.querySelectorAll('span[jsname=\"GiSHmb\"]');

//emails.children[0].children[0].children[0].children[1];
var alunos=[];

emails.forEach(item => {
	var aluno={
		email: item.children[0].children[0].children[0].children[1].innerHTML,
		hora: item.children[2].children[0].innerHTML.substring(1,5),
		duracao: item.children[3].children[0].innerHTML
	};
	var index = alunos.findIndex(x => x.email == aluno.email);
	if (index === -1){
		alunos.push(aluno);
	}
//	let nome=item.children[0].children[0].children[0].children[1];
  //  console.log(nome.innerHTML);
});

console.log(alunos.length)
console.log(JSON.stringify(alunos));

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(JSON.stringify(alunos), 'json.json', 'application/json');
/*
emails.forEach(item => {
	let hora=item.children[0].children[0];
    console.log(hora.innerHTML);
});
emails.forEach(item => {
	let duracao=item.children[0].children[0];
    console.log(duracao.innerHTML);
});*/