const { validationResult } = require("express-validator");
const { create } = require("../model/artikel");
const Artikel = require('../model/artikel');
const Author = require('../model/author');

exports.getArtikel = async (req, res, next) => {
  try{
    const artikels = await Artikel.findAll()
    if(artikels.length > 0){
      console.log('is not empty')
      res.status(200).json(artikels)
    }else{
      const err = new Error('No Article Found')
      err.statusCode = 404
      next(err)
    }

  }catch(err){
    next(err)
  }
};

exports.findArtikelByID = async (req , res , next ) => {
  const id = req.params.id;
  console.log(id);
  try{
    const artikel = await Artikel.findByPk(id)
    if(artikel != null){
      res.status(200).json(
          {
            message : `Success get Artikel with`, 
            data : artikel
          }
        )
    }else{
      const err = new Error(`No artikel with id ${id} Found`)
      err.statusCode = 404
      next(err);
    }
  }catch(err){
      next(err);
  }
}

exports.deleteArtikelByID = async (req , res , next ) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    const err = new Error('You need to specify id to delete')
    err.statusCode = 422
    return next(err)
  }
  const id = req.body.id
  try{
    const artikel = await Artikel.findByPk(parseInt(id))
    if(artikel!= null){
      const destroy = await artikel.destroy()
      res.status(201).json(
          {
            message : `Success delete Artikel with id ${id}` 
          }
        )
    }else{
      const err = new Error(`No artikel with ${id} Found`)
      err.statusCode = 404
      next(err)
    }
  }catch(err){
    next(err)
  }
}

exports.updateArtikel = async (req , res ,next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    const err = new Error('Wrong Input')
    err.statusCode = 422
    return next(err)
  }
  const id = req.body.id;
  const title = req.body.title;
  const content = req.body.content;

  try{
    const oldArtikel = await Artikel.findByPk(id);
    if(oldArtikel!= null){
      const updatedArtikel = await oldArtikel.update(
        {
          title : title,
          content : content
        }
      )
      res.status(201).json(
          {
            message : `Success update Artikel with id ${id}` 
          }
        )
    }else{
      const err = new Error(`No artikel with id ${id} Found`)
      err.statusCode = 404
      next(err)
    }
  }catch(err){
    next(err)
  }
}

exports.createArtikel = async (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    const err = new Error('Wrong Input')
    err.statusCode = 422
    return next(err)
  }
  try{
    const username = req.body.username;
    const title = req.body.title;
    const content = req.body.content;
    let author = await Author.findByPk(username);
    if(!author){
      author = await Author.create(
        {
          username : username
        }
      )
    }
    const createArtikel = await author.createArtikel({
      title : title,
      content : content
    })
    res.status(201).json(
      {
        message : 'Success Insert New Article',
        data : createArtikel
      }
    )
  }catch(err){
    next(err)
  }

};
