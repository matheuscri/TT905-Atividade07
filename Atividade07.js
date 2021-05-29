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
        res.send("Página Inicial ");
        //<br/>Para outras paginas digite '/' e o seguinte nome:\
        //soundtrackwaste\/cantores");
    }
);
const soundtrackwaste = [
    "7 Seconds - We're Gonna Fight","Alkaline Trio - Wash Away (Beneath the Shadows) (T.S.O.L.)",
    "Bad Religion - We're Only Gonna Die","Black Flag - Rise Above","Circle Jerks - Wild in the Streets",
    "Dead Kennedys - California Über Alles","Emanuel - Search & Destroy (The Stooges)",
    "Fall Out Boy - Start Today (Gorilla Biscuits)","From Autumn To Ashes - Let's Have a War (Fear)",
    "Green Day - Holiday","My Chemical Romance - Astro Zombies (The Misfits)",
    "Rise Against - Fix Me (Black Flag)","Senses Fail - Institutionalized (Suicidal Tendencies)",
    "Taking Back Sunday - Suburban Home / I Like Food (Descendents)","The God Awfuls - Watch It Fall",
    "The Network - Teenagers From Mars (The Misfits)","Thrice - Seeing Red / Screaming at a Wall (Minor Threat)",
    "An Endless Sporadic - Sun of Pearl","Frank Black - Los Angeles","Nassim - Rawhide","The Faint - I Disappear",
    "Thursday - Ever Fallen In Love (The Buzzcocks)","Public Enemy feat. Ice Cube and Big Daddy Kane - Burn Hollywood Burn"
    ,0
]

app.get('/americanwastelandmusic',
function (req, res){    
    //res.send("Tony Hawk's: American Wasteland Soundtrack");
    res.send(soundtrackwaste.filter(Boolean));
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
        //res.send("Cantores Aleatórios")
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