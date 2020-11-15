import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import ukraineRoutes from './routes/postsUA.js';

const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
    'mongodb+srv://Vogue:13524qetwrVogue@cluster0.kxggw.mongodb.net/mydata?retryWrites=true&w=majority';

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/ukraine', ukraineRoutes);

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    .then(() =>
        app.listen(process.env.PORT || 5000, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`)
        )
    )
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
