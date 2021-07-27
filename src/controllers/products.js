const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const validationContract = require('../validators/fluent-validator');

exports.get = (req, res, next)=>{
  var cat = req.body.cat;
  if(cat != null){
    Product.find({cat: cat}).then(data=>{
      res.status(200).send(data);
    }).catch(e=>{
      res.status(400).send(e);
    });
  }else{
    Product.find({}).then(data=>{
      res.status(200).send(data);
    }).catch(e=>{
      res.status(400).send(e);
    });
  }
};

exports.getById = (req, res, next)=>{
  Product.findById(req.params.id).then(data=>{
    res.status(200).send(data);
  }).catch(e=>{
    res.status(400).send(e);
  });
};


exports.rm = (req, res, next)=>{
  Product.findByIdAndRemove(req.params.id).then(x=>{
    res.status(200).send({message: 'Produto removido'});
  }).catch(e=>{
    res.status(400).send({message: 'Falha ao remover produto', data: e});
  });
};

exports.att = (req, res, next)=>{
  Product.findByIdAndUpdate(req.params.id, {
    $set:{
      name: req.body.name,
      cat: req.body.cat,
      price: req.body.price,
      img: req.body.img,
      cuidados: req.body.cuidados,
      quant: req.body.quant
    }
  }).then(x=>{
    res.status(201).send({message: 'Produto atualizado'});
  }).catch(e=>{
    res.status(400).send({message: 'Falha ao atualizar produto', data: e});
  });
};

exports.sell = (req, res, next)=>{
  Product.findById(req.params.id).then(data=>{
    Product.findByIdAndUpdate(req.params.id, {
      $set:{
        quant: (parseInt(data.quant)-parseInt(req.body.quant)),
        sold: (parseInt(data.sold)+parseInt(req.body.quant))
      }
    }).then(x=>{
      res.status(201).send({message: 'Produto vendido'});
    }).catch(e=>{
      res.status(400).send({message: 'Falha ao vender', data: e});
    });
  }).catch(e=>{
    res.status(400).send(e);
  });
}

exports.put = (req, res, next)=>{

  let contract = new validationContract();
  contract.hasMinLen(req.body.name, 3, 'O nome do produto deve conter no minímo 3 caracteres.');
  contract.hasMinLen(req.body.cat, 3, 'A categoria do produto deve conter no minímo 3 caracteres.');
  contract.isRequired(req.body.name, 'É preciso inserir o nome do produto.');
  contract.isRequired(req.body.price, 'É preciso inserir o preço do produto.');
  contract.isRequired(req.body.quant, 'É preciso inserir a quantidade do produto em estoque.');

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  var product = new Product();
  product.name = req.body.name;
  product.cat = req.body.cat;
  product.price = req.body.price;
  product.img = req.body.img;
  product.cuidados = req.body.cuidados;
  product.quant = req.body.quant;
  product.sold = 0;
  product.save().then(x=>{
    res.status(201).send({message: 'Produto cadastrado'});
  }).catch(e=>{
    res.status(400).send({message: 'Falha ao cadastrar produto', data: e});
  });

};
