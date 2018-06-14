const express = require('express')
const router = express.Router()
const Customers = require('../../DataAccess/customerModel').Customers;
const Companies = require('../../DataAccess/companiesModel').Companies;

router.get('/about', (req, res) => {
  res.send('about');
})

router.get('/', (req, res) => {
  Customers.findAll({
    include: [{
      model: Companies,
      required: true
    }]
  }).then((data) => {
    res.send(JSON.stringify(data));
  }, (err) => {
    console.error(err)
  });
})

router.post('/', (req, res) => {
  Customers.create(req.body).then(anotherTask => {
    Customers.findAll({
      include: [{
        model: Companies,
        required: true
      }]
    }).then((data) => {
      console.log("customersall" + data)
      res.send(JSON.stringify(data));
    }, (err) => {
      console.error(err)
    })})
})

router.delete('/:email', (req, res) => {
  console.log(req.params.email)
  Customers.destroy({where: {email: req.params.email}}).then(anotherTask => {
    Customers.findAll({
      include: [{
        model: Companies,
        required: true
      }]
    }).then((data) => {
      res.send(JSON.stringify(data));
    }, (err) => {
      console.error(err)
    })})
})

module.exports = router