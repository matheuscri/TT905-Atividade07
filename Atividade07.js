console.log("Rodando");
const express = require("express");
const app = express();
app.use(express.json());

// Permissões
var cors = require('cors');
app.use(cors());

// Porta que eu estou ouvindo
app.listen(process.env.PORT || 3001);

app.get('/', 
    function (req, res){    
        res.send("Página Inicial");
        res.send("Para outras paginas digite '/' e o seguinte nome:")
    }
);

const soundtrackwaste = [
    ""
]

app.get('/americanwastelandmusic',
function (req, res){    
    res.send("Tony Hawk's: American Wasteland Soundtrack");
    }
)

const mensagens = [
    "Hot Chilli Peppers","Chorão","Charlie Brown Jr","Alexandre Magno Abrão","Rafa Moreira",
    "Ximbinha", "Supla","Guitarra Humana","Péricles","Dilma Roussef","Cleiton Rasta Dj","Alcides","Latino",
    "Mc Catra","Mc Carlos Funk Sumaré","Pabllo Vitar", 0 
];

app.get('/cantores',
    function(req, res){
        // res.send(mensagens);
        res.send("Cantores Aleatórios")
        res.send(mensagens.filter(Boolean));
    }
);

app.get('/mensagens/:id',
    function(req, res){
        const id = req.params.id - 1;
        const mensagem = mensagens[id];

        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
)

app.post('/mensagens', 
    (req, res) => {
        console.log(req.body.mensagem);
        const mensagem = req.body.mensagem;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/mensagens/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const mensagem = req.body.mensagem;
        mensagens[id] = mensagem;        
        res.send("Mensagem atualizada com sucesso.")
    }
)

app.delete('/mensagens/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete mensagens[id];

        res.send("Mensagem removida com sucesso");
    }
);