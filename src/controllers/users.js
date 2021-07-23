const mongoose = require('mongoose');
const User = mongoose.model('User');
const validationContract = require('../validators/fluent-validator');

exports.getLogin = (req, res, next) => {
  User.find({email: req.body.email, password: req.body.password}).then(data => {
    if(data.length > 0) {
      res.status(200).send({message: 'Usuário encontrado.', user:data[0]});
    } else {
      res.status(400).send({message: 'Email ou senha incorretos.', data: e, erro:1});  
    }
  }).catch(e=>{
    res.status(400).send({message: 'Falha ao buscar cadastro do usuário.', data: e, erro:2});
  })
};

exports.get = (req, res, next)=>{
  User.find({}).then(data=>{
    res.status(200).send(data);
  }).catch(e=>{
    res.status(400).send(e);
  });
};

exports.rm = (req, res, next)=>{
  User.findByIdAndRemove(req.params.id).then(x=>{
    res.status(200).send({message: 'Usuário removido'});
  }).catch(e=>{
    res.status(400).send({message: 'Falha ao remover usuário', data: e});
  });
};

exports.att = (req, res, next)=>{
  User.findByIdAndUpdate(req.params.id, {
    $set:{
      name: req.body.name,
      lastname: req.body.lastname,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      country: req.body.country,
      city: req.body.city,
      uf: req.body.uf,
      adress: req.body.adress,
      num: req.body.num,
      comp: req.body.comp,
      perm: req.body.perm
    }
  }).then(x=>{
    res.status(200).send({message: 'Usuário atualizado'});
  }).catch(e=>{
    res.status(400).send({message: 'Falha ao atualizar usuário', data: e});
  });
};


exports.put = (req, res, next)=>{
  
  let contract = new validationContract();
  contract.hasMinLen(req.body.name, 3, 'O nome do usuário deve conter no minímo 3 caracteres.');
  contract.hasMinLen(req.body.lastname, 3, 'O sobrenome do usuário deve conter no minímo 3 caracteres.');
  contract.isRequired(req.body.name, 'É preciso inserir o nome do usuário.');
  contract.isRequired(req.body.lastname, 'É preciso inserir o sobrenome do usuário.');
  contract.isRequired(req.body.email, 'É preciso inserir o email do usuário.');
  contract.isRequired(req.body.password, 'É preciso inserir a senha do usuário.');
  contract.isRequired(req.body.perm, 'É preciso inserir a permissão do usuário.');
  contract.isEmail(req.body.email, 'O email precisa ser válido.');
  
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  var user = new User();
  user.name = req.body.name;
  user.lastname = req.body.lastname;
  user.phone = req.body.phone;
  user.email = req.body.email;
  user.password = req.body.password;
  user.country = req.body.country;
  user.city = req.body.city;
  user.uf = req.body.uf;
  user.adress = req.body.adress;
  user.num = req.body.num;
  user.comp = req.body.comp;
  user.perm = req.body.perm;

  user.save().then(x=>{
    res.status(201).send({message: 'Usuário cadastrado'});
  }).catch(e=>{
    res.status(400).send({message: 'Falha ao cadatrar usuário', data: e});
  });

};
