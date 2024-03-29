const db = require("./db");
const { DataTypes } = require("sequelize");
const Post = db.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the title for your post'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a post description'
      }
    },
    picture: {
			type: DataTypes.STRING,
			allowNull: {
				args: false,
				msg: 'Please upload post image'
			}
		},
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
        as: 'categoryId',
      }
    }
  },
  {
    tableName: "Posts",
  }
);
module.exports = Post;
