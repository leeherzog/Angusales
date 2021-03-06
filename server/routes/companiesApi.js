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

router.post('/', (req, res) => {
  Companies.create(req.body).then(anotherTask => {
    Companies.findAll().then((data) => {
      res.send(JSON.stringify(data));
    }, (err) => {
      console.error(err)
    })})
})

router.delete('/:id', (req, res) => {
  Companies.destroy({where: {id: req.params.id}}).then(anotherTask => {
    Companies.findAll().then((data) => {
      res.send(JSON.stringify(data));
    }, (err) => {
      console.error(err)
    })})
})

module.exports = router