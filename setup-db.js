import app from './lib/app.js';
import db from './lib/utils/db.js';

await db.sync({ force: true }).then(result => {
  console.log(result);
  app.listen(3000);
}).catch(err => {
  console.log(err);
});;
