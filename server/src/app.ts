import express from 'express';
import sequelize from './db/config';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    res.status(500).json({ mesage: err.message });
});

sequelize.sync()
    .then(() => console.log('Database successfully synced...'))
    .catch(err => console.error(err));

app.listen(PORT, () => 
    console.log(`App listening on PORT: ${PORT}`));
