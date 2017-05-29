var express = require('express');
var router = express.Router();

router.get('/phenotypes', function(req, res, next) {
	const data = [
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

router.get('/variant-types', function(req, res, next){
	res.json({
		success: true,
		data: [
			{
				"id": "sub",
				"name": "sub"
			},
			{
				"id": "ins",
				"name": "ins"
			},
			{
				"id": "del",
				"name": "del"
			}
		]
	});
});

router.get('/study-types', function(req, res, next){
	res.json({
		success: true,
		data: [
			{
				"id": "WE",
				"name": "WE"
			},
			{
				"id": "TG",
				"name": "TG"
			}
		]
	});
});

router.get('/effect-types', function(req, res, next){
	const data = [
		{
			"column-name": "Coding",
			"data":
				[
					{
						"id": "nonsense",
						"description": "nonsense"
					},
					{
						"id": "frame-shift",
						"description": "frame-shift"
					},
					{
						"id": "splice-site",
						"description": "splice-site"
					},
					{
						"id": "missense",
						"description": "missense"
					},
					{
						"id": "non-frame-shift",
						"description": "non-frame-shift"
					},
					{
						"id": "no-start",
						"description": "no start"
					},
					{
						"id": "no-end",
						"description": "no end"
					},
					{
						"id": "synonymous",
						"description": "synonymous"
					}
				]
		},
		{
			"column-name": "Noncoding",
			"data":
				[
					{
						"id": "non-coding",
						"description": "non coding"
					},
					{
						"id": "intron",
						"description": "intron"
					},
					{
						"id": "intergenic",
						"description": "intergenic"
					},
					{
						"id": "3-UTR",
						"description": "3' UTR"
					},
					{
						"id": "5-UTR",
						"description": "5' UTR"
					}
				]
		},
		{
			"column-name": "CNV",
			"data":
				[
					{
						"id": "CNV+",
						"description": "CNV+"
					},
					{
						"id": "CNV-",
						"description": "CNV-"
					}
				]
		}
	]

	res.json({
		success: true,
		data: data
	});
});

// router.get('/', function(req, res, next){});

module.exports = router;
