import express from 'express';
import parser from 'body-parser';


const usuarios = [
  {
    nome: 'Sergio',
    sobrenome: 'Bernardi',
    partidas: [
      {
        id: '1',
        nome: 'partida de quinta',
        golsMarcados: 3
      },
      {
        id: '2',
        nome: 'partida de sexta',
        golsMarcados: 0
      },
      {
        id: '3',
        nome: 'partida de segunda',
        golsMarcados: 0
      }
    ]
  },
  {
    nome: 'Jhon',
    sobrenome: 'Doe',
    partidas: [
      {
        id: '1',
        nome: 'partida de quinta',
        golsMarcados: 2
      },
      {
        id: '2',
        nome: 'partida de sexta',
        golsMarcados: 0
      },
      {
        id: '3',
        nome: 'partida de segunda',
        golsMarcados: 6
      }
    ]
  }
];

const app = express();

app.use(parser.json({ type: "application/json" }));

app.get("/", (req, res) => {
  res.send("API running!");
});

// Criar rota para validar se pelo menos um dos jogadores marcou gol na partida
app.get("/marcou-gol/", (req, res) => {
  const { idPartida } = req.body;

  const marcou = usuarios.some((jogador) => {
    const partidaJogada = jogador.partidas.find((partida) => partida.id === idPartida);
    return partidaJogada.golsMarcados > 0;
  });

  res.send(marcou);
});

// Criar rota para calcula a quantidade de gols de uma determinada partida

app.listen(3000, () => console.log(`Server started at port 3000`));