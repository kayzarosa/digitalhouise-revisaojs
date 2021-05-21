var express = require('express');

var app = express();

app.use(express.json());

let alunos = [
  {
    matricula: 1,
    nome: "Weldo",
    curso: "Arquitetura",
    presenca: [
      {
        id: 1,
        dia: "2021-05-20",
        presente: true,
        materia: "Matematica"
      },
    ],
    nota: [
      {
        id: 1,
        materia: "Matematica",
        semestre: 1,
        nota: 8
      }
    ]
  },
  {
    matricula: 2,
    nome: "Vitor",
    curso: "Titerismo",
    presenca: [
      {
        id: 1,
        dia: "2021-05-20",
        presente: true,
        materia: "Manipulação dos personagens"
      },
      {
        id: 2,
        dia: "2021-05-20",
        presente: false,
        materia: "Corte Custura"
      },
    ],
    nota: [
      {
        id: 1,
        materia: "Manipulação dos personagens",
        semestre: 1,
        nota: 7
      }
    ]
  }
];

app.get('/', (request, response) => {
  response.json(alunos);
});

app.get('/:matricula', (request, response) => {
  const { matricula } = request.params;

  const aluno = alunos.find(
    alunoFind => alunoFind.matricula === Number(matricula)
  );

  const presenca = aluno.presenca.find(
    presencaFind => presencaFind.dia === '2021-05-20'
    && presencaFind.materia === "Matematica"
  );

  response.json({ nome: aluno.nome, presenca: presenca });
});

app.get('/busca/:nome', (request, response) => {
  const { nome } = request.params;

  // const aluno = alunos.filter(
  //   alunoFind => alunoFind.nome.toLowerCase().indexOf(nome.toLowerCase()) >= 0
  // );

  const aluno = alunos.map((aluno) => {
    if (aluno.nome.toLowerCase().indexOf(nome.toLowerCase()) >= 0) {
      return {
        nome: aluno.nome,
        curso: aluno.curso
      }
    }
  });

  response.json(aluno);
});

app.listen('3000', () => {
  console.log('Servidor iniciado!');
});
