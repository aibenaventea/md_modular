const { request } = require('express');
const Cat = require('../models/cat');


const getAllCats = (req, res) => {
    Cat.find()
    .then(
        cat => {
        res.render('index', {cat});
    })
    .catch(err => res.json(err));
};
//

const getNewCat = (req, res) => {
    res.render('new_cat', {error: ''});
}

const postNewCat = (req, res) => {

    console.log(req.body)
    const { breedCat, sizeCat, coatCat, colourCat } = req.body;
    
    const cat = new Cat();
    cat.breedCat = breedCat;
    cat.sizeCat = sizeCat;
    cat.coatCat = coatCat;
    cat.colourCat = colourCat;
    
    cat.save()
        .then(() => {
            console.log('save');
            res.redirect('/');
        })
        .catch(err => res.json(err));
}
// 

const getCat = (req,res) => {
    const { id } = req.params;
    Cat.findById(id)
        .then( cat => {
            res.render('info_cat', {cat});
        })
        .catch(err => res.json(err));
}

// 

const postDeletCat = (req, res) => {
    const { id } = req.params;
    let cat = Cat.findById(id)
    cat.remove()
    .then(data => { 
        if (data.length===0)
            {res.send("<h1>Registro no existe</h1>")}
        else
            {res.redirect("/")} 
    })
    .catch(err => res.json(err));
}

const getEditCat = (req, res) => {

    const { id } = req.params;
    Cat.findById(id)
        .then(cat => {
            res.render('edit', { cat, modificado: false });
        })
        .catch(err => res.json(err));
}

const postEditCat = (req, res) => {
    const { id } = req.params;
    let cat = Cat.findById(id)
    cat.updateOne({_id: req.params.id},req.body)
    .then(data => { 
        if (data.length===0)
            {res.send("<h1>Registro no existe</h1>")}
        else
            {res.redirect("/")} 
    })
    .catch(err => res.json(err));
}

module.exports = {
    getAllCats,
    getNewCat,
    postNewCat,
    getCat,
    postDeletCat,
    getEditCat,
    postEditCat
};


