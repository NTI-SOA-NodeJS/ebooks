function applyExtraSetup(sequelize) {
  const { Role, User, Book, Author } = sequelize.models;

  Role.hasMany(User);
  User.belongsTo(Role);
  Book.belongsToMany(Author, { through: "book_authors" });
  Author.belongsToMany(Book, { through: "book_authors" });
}

module.exports = { applyExtraSetup };
