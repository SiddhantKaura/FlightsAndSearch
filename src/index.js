const {PORT} = require('./config/serverConfig');
const express = require("express");
const CityRepository = require("../src/repository/city-repository");
const ApiRoutes = require("../src/routes/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', ApiRoutes);

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
    // const repo = new CityRepository();
    // repo.createCity({name: "Siddhant"});
    // console.log(CityRepository);
});