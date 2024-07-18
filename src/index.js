const express = require('express');
const sequelize = require('./config/database');
const Article = require('./models/Article');
const Author = require('./models/Author');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/populate', async (req, res) => {
    try {
        const author = await Author.create({
            authorname: 'John Doe',
            address: '123 Main St',
        });

        const articles = await Article.bulkCreate([
            { title: 'First Article', authorId: author.id },
            { title: 'Second Article', authorId: author.id },
        ]);

        res.json({ author, articles });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: true });
        console.log('Database synchronized successfully.');
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
};

startServer();
