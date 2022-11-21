module.exports = (connection: any, DataTypes: any) => {
  const user = connection.define('user', {
     id: {
      type: DataTypes.STRING,
      primaryKey: true,
},
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return user
};

