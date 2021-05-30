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
const soundtrack = {"Tony_Hawk_American_Wasteland":[
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
   ],
    "Madden_NFL_10": ["2Pac- Can’t See Me","Airbourne- Heads are Gonna Roll",
        "Alice In Chains- Them Bones","B.oB.- Created A Monster",
        "Bang Camero- Revolution","Beastie Boys- Sabotage",
        "Black Sabath- Paraniod","Cypress Hill- Get ‘Em Up",
        "Helmet- Unsung","Iron Maiden- Aces High",
        "Judas Priest- Painkiller","Kid Rock- I Am The Bullgod",
        "Killswitch Engage- Reckoning","Korn- Blind",
        "Mastodon- Divinations","Nas Feat. Puff Daddy- Hate Me Now",
        "Nirvana- Breed","Pantera- Walk",
        "Public Enemy- Shut Em Down","Rage Against The Machine- Guerilla Radio",
        "Set Your Goals- Gaia Bleeds (Make Way For Man)","Slipknot- Duality",
        "System Of A Down- Sugar","The Vanity Plan- Before I Die",
        "Young Dre The Truth- Cheah Beah"],

        "Guitar_hero" : ["I Love Rock & Roll - Joan Jett & the Blackhearts",
        "I Wanna Be Sedated - The Ramones",
        "Thunder Kiss 65 - White Zombie",
        "Smoke On The Water - Deep Purple",
        "Infected - Bad Religion",
        "Iron Man - Black Sabbath",
        "More Than A Feeling - Boston",
        "You've Got Another Thing Comin' - Judas Priest",
        "Take Me Out - Franz Ferdinand",
        "Sharp Dressed Man - ZZ Top"]
        
}


app.get('/soundtrack',
function (req, res){   
    res.send(soundtrack);
    }
)
app.get('/soundtrack/Tony_Hawk_American_Wasteland',
function (req, res){   
    res.send(soundtrack.Tony_Hawk_American_Wasteland);
    }
)
app.get('/soundtrack/Madden_NFL_10',
function (req, res){   
    res.send(soundtrack.Madden_NFL_10);
    }
)
    
app.get('/soundtrack/Guitar_Hero',
function (req, res){   
    res.send(soundtrack.Guitar_hero);
    }
)
app.get('/soundtrack/Tony_Hawk_American_Wasteland/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = soundtrack.Tony_Hawk_American_Wasteland[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    }
)
//Get usar JSON {"Music": "o que queser"}
app.get('/soundtrack/Madden_NFL_10/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = soundtrack.Madden_NFL_10[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    }
)
//Get usar JSON {"Music": "o que queser"}
app.get('/soundtrack/Guitar_Hero/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = soundtrack.Guitar_hero[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    }
)
//Get usar JSON {"Music": "o que queser"}
app.post('/soundtrack/Tony_Hawk_American_Wasteland', 
    (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        soundtrack.Tony_Hawk_American_Wasteland.push(Music);
        res.send("Adicionado nova música")
    }
);
app.post('/soundtrack/Madden_NFL_10', 
    (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        soundtrack.Madden_NFL_10.push(Music);
        res.send("Adicionado nova música")
    }
);
app.post('/soundtrack/Guitar_Hero/', 
    (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        soundtrack.Guitar_hero.push(Music);
        res.send("Adicionado nova música")
    }
);
app.put('/soundtrack/Tony_Hawk_American_Wasteland/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Music = req.body.Music;
        soundtrack.Tony_Hawk_American_Wasteland[id] = Music;        
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.put('/soundtrack/Madden_NFL_10/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Music = req.body.Music;
        soundtrack.Madden_NFL_10[id] = Music;        
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.put('/soundtrack/Guitar_Hero/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Music = req.body.Music;
        soundtrack.Guitar_hero[id] = Music;        
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.delete('/soundtrack/Tony_Hawk_American_Wasteland/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete soundtrack.Tony_Hawk_American_Wasteland[id];

        res.send("Música removida da lista com sucesso");
    }
);
app.delete('/soundtrack/Madden_NFL_10/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete soundtrack.Madden_NFL_10[id];

        res.send("Música removida da lista com sucesso");
    }
);
app.delete('/soundtrack/Guitar_Hero/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete soundtrack.Guitar_hero[id];

        res.send("Música removida da lista com sucesso");
    }
);

const cantores = [
    "Hot Chilli Peppers","Chorão","Charlie Brown Jr","Alexandre Magno Abrão","Rafa Moreira",
    "Ximbinha", "Supla","Guitarra Humana","Péricles","Dilma Roussef","Cleiton Rasta Dj","Alcides","Latino",
    "Mc Catra","Mc Carlos Funk Sumaré","Pabllo Vitar", 0 
];

app.get('/cantores',
    function(req, res){
        // res.send(mensagens);
        //res.send("Cantores Aleatórios")
        res.send(cantores.filter(Boolean));
    }
);

app.get('/cantores/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Cantor = cantores[id];

        if (!Cantor){
            res.send("Cantor não encontrado, verifique se esse existe na lista");
        } else {
            res.send(Cantor);
        }
    }
)

app.post('/cantores', 
    (req, res) => {
        console.log(req.body.Cantor);
        const Cantor = req.body.Cantor;
        cantores.push(Cantor);
        res.send("Novo cantor.")
    }
);

app.put('/cantores/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Cantor = req.body.Cantor;
        cantores[id] = Cantor;        
        res.send("Nome do cantor corrigido com sucesso.")
    }
)

app.delete('/cantores/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete cantores[id];

        res.send("Cantor removido do corração com sucesso");
    }
);