var express = require('express');
var router = express.Router();

router.get('/phenotypes', function(req, res, next) {
	const data =
		[
      {
        id: "autism",
        description: "autism",
        color: "#e35252"
      },
      {
        id: "congenital_heart_disease",
        description: "congenital heart disease",
				color: "#b8008a"
      },
      {
        id: "epilepsy",
        description: "epilepsy",
        color: "#e3d252"
      },
      {
        id: "intelectual_disability",
        description: "intelectual disability",
        color: "#99d8e8"
      },
      {
        id: "schizophrenia",
        description: "schizophrenia",
        color: "#98e352"
      },
      {
        id: "unaffected",
        description: "unaffected",
        color: "#ffffff"
      }
  	];

	res.json({
		success: true,
		data: data
	});
});

router.get('/child-gender', function(req, res, next){
	res.json({
		success: true,
		data: [
			{
				"id": "male",
				"name": "male"
			},
			{
				"id": "female",
				"name": "female"
			}
		]
	})
});

// router.get('/', function(req, res, next){});

module.exports = router;
