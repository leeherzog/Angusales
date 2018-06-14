const express = require('express')
const router = express.Router()
const dataAccess = require('../../DataAccess/DataAccess').dataAccess;
const Companies = require('../../DataAccess/companiesModel').Companies;

router.get('/', (req, res) => {
  Companies.findAll().then((data) => {
    res.send(JSON.stringify(data));
 }, (err) => {
   console.error(err)
 });
})


module.exports = router