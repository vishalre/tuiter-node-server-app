import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.topic = "VishalNodeJs_A8"
    newTuit.username = "Vishal";
    newTuit.handle = "@vishal";
    newTuit.title = "NodeJS_A8";
    newTuit.time = "Just now";
    newTuit.image =
        "https://www.pngfind.com/pngs/m/299-2995596_nasa-logo-photo-nasa-logo-1-1-hd.png";
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}


const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params['tid'];
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
                    updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
