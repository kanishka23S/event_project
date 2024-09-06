import express from 'express';
import authroutes from './routes/auth';
import eventroutes from './routes/eventroutes';

const app = express();
const PORT = 8080;
app.use(express.json());
app.use('/api/auth', authroutes);
app.use('/api/events',eventroutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

