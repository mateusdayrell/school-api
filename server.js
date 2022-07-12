import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log('🚀 NodeJS server launched on http://localhost:3001/');
});
