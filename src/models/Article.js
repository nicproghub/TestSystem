const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Author = require('./Author');

const Article = sequelize.define('Article', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Author,
            key: 'id',
        },
    },
});

Author.hasMany(Article, { foreignKey: 'authorId' });
Article.belongsTo(Author, { foreignKey: 'authorId' });

module.exports = Article;
