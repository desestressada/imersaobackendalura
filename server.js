import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app  = express();

app.use(express.static("uploads"));
routes(app);

app.listen(3000,()  => {
    console.log("Servidor escutando...");
});

/*console.log(process.env.STRING_CONEXAO)
const posts = [ 
    {
        id:1,
        descricao: "Uma foto teste", 
        imagem: "https://placecats.com/bella/300/150"
    }, 
    {
        id:2,
        descricao: "Duas foto teste", 
        imagem: "https://placecats.com/millie/300/150"
    }
];

app.listen(3000,()  => {
    console.log("Servidor escutando...");
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    } )
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas a imersão");
});

app.get("/livro", (req, res) => {
    const livro = {"titulo": "x",
        "autor": "fulano"
    };
    res.status(200).send(livro);
});

function buscarKeyword(keyword) {
    return posts.filter(post => 
        post.descricao.includes(keyword)
    );
};

app.get("/posts/search/:keyword", (req, res) => {
    const keyword = buscarKeyword (req.params.keyword);

    res.status(200).json(keyword);

});
*/