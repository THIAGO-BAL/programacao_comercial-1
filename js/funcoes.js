function minhaFuncao1()
{
  $('#area-01').css({
    color: '#ff0000',
    textTransform: 'uppercase',
    width: 600

  });
};

function minhaFuncao2() {
  $('#area-02').empty();
  var alunos =['Aluno 01', 'Aluno 02', 'Aluno 03', 'Aluno 04', 'Aluno 05'];

var i;
for(i=0;i<5;i++){

     $('#area-02').append(alunos[i]);
     $('#area-02').append(" ");

}

};


function minhaFuncao3() {
  $('#area-02').empty();
    var alunos=[
      {
        nome: 'aluno 01',
        idade: 22
      }

    ];

  for(i=0; i<alunos.length; i++)
  {
    console.log(alunos[i]);

  }

  var list = $('#area-02').append('<ul></ul>').find('ul');
  $.each(alunos,function(index, value){
    list.append('<li>'+value.nome+' - '+value.idade + '</li>');
  });

};


/*  $.each(alunos, function(index, value) {
    $('#area-02').append(value);
*/
