const db = require('./../models');
const Works = db.works

exports.findAll = async (req, res) =>  {
	const works = await Works.findAll({include: 'category'});
	return res.status(200).json(works);
}

exports.create = async (req, res) => {
	const host = req.get('host');
	const title = req.body.title;
	const categoryId = req.body.category;
	const userId = req.auth.userId;
	console.log('on est dans create');
	const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}`;
	try{
		const work = await Works.create({
			title,
			imageUrl,
			categoryId,
			userId
		})
		return res.status(201).json(work)
	}catch (err) {
		return res.status(500).json({ error: new Error('Something went wrong') })
	}
}

exports.delete = async (req, res) => {
	console.log("on est dans delete");
	console.log(Works);
	console.log(req.params);
	try{
		await Works.destroy({where:{id: req.params.id}})
		return res.status(204).json({message: 'Work Deleted Successfully'})
	}catch(e){
		return res.status(500).json({error: new Error('Something went wrong')})
	}

}
