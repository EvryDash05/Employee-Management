const app = require("./app");
const sequelize = require("./database/db");

const PORT = 3000;

require("./models/userRole");

async function main() {
  try {
    await sequelize.sync({force: false});
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();