const mongoose = require('mongoose');
const Product = mongoose.model('Product');

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
    res.status(200).send({message: 'Produto atualizado'});
  }).catch(e=>{
    res.status(400).send({message: 'Falha ao atualizar produto', data: e});
  });
};

exports.put = (req, res, next)=>{
  var product = new Product();
  product.name = req.body.name;
  product.cat = req.body.cat;
  product.price = req.body.price;
  product.img = req.body.img;
  product.cuidados = req.body.cuidados;
  product.quant = req.body.quant;
  product.save().then(x=>{
    res.status(201).send({message: 'Produto cadastrado'});
  }).catch(e=>{
    res.status(400).send({message: 'Falha ao cadatrar produto', data: e});
  });

};
