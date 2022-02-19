const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
try{

const categoryFind = await Category.findAll({
  include: [
    Product
  ]})
res.json(categoryFind);
}catch (err) {
  console.log(err);
}
});

  // be sure to include its associated Products


router.get('/:id', async (req, res) => {
  try{

    const categoryFind = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        Product
      ]})
    res.json(categoryFind);
    }catch (err) {
      console.log(err);
    }
    
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(response => res.json (response))
  .catch (err => res.json (err))
  // create a new category
});

router.put('/:id', async (req, res) => {
  try{
    const updateCategory = await Category.update(req.body,
      {where: {
        id: req.params.id
      }})
      res.json(updateCategory)
    }catch (err) {
      console.log(err);
    }
  })
  // update a category by its `id` value

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteCategory = await Category.destroy(req.body,
      {where: {
        id: req.params.id
      }})
      res.json(deleteCategory)
    }catch (err) {
      console.log(err);
    }
});

module.exports = router;
