const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
try{
const categoryFind = await Category.findAll({
  include: [ {
    model: Product,
    attributes: ['id', 'product_name', 'price', 'stock'],
  },],
});
res.json(categoryFind);
}catch (err) {
  console.log(err);
}

});

// const categories = categoryFind.map((category) =>
//   category.get({ plain: true }));


router.get('/:id', async (req, res) => {
  try{

    const categoryFind = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        Product,
        // attributes: ['id', 'product_name', 'price', 'stock'],
      ]})
    res.json(categoryFind);
    }catch (err) {
      console.log(err);
    }
    
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(response => res.json (response))
  .catch (err => res.json (err))
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

router.delete('/:id', async (req, res) => {
  try{
    const deleteCategory = await Category.destroy(
      {where: {
        id: req.params.id
      }})
      res.json(deleteCategory)
    }catch (err) {
      console.log(err);
    }
});

module.exports = router;
