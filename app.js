var company ={
	ageltan1 : {
		ner : "bat",
		nas : 22,
		utas : 88054554,
		mobicom : false,
		he : true,
		emeel : "Amjilt@999gmail.com"
	},
	ageltan2 : {
		ner : "suvd",
		nas : 26,
		utas : 88783578,
		mobicom : false,
		he : false,
		emeel : "oheroo3578@gmail.com"
	},
	ageltan3 : {
		ner : "ameena",
		nas : 21,
		utas : 86785665,
		mobicom : false,
		he : false,
		emeel : "m5665@gmail.com"
	},
	ageltan4 : {
		ner : "a.anar",
		nas : 25,
		utas : 88066876,
		mobicom : false,
		he : true,
		emeel : "A989@gmail.com"
	},
	ageltan5 : {
		ner : "b.anar",
		nas : 25,
		utas : 88078454,
		mobicom : false,
		he : true,
		emeel : "Amjilt@gmail.com"
	},
	ageltan6 : {
		ner : "aner",
		nas : 21,
		utas : 91194224,
		mobicom : true,
		he : false,
		emeel : "aner2@gmail.com"
	},
	ageltan7 : {
		ner : "a.nadea",
		nas : 25,
		utas : 87856378 ,
		mobicom : false,
		he : false,
		emeel : "w123gmail.com"
	},
	ageltan8 : {
		ner : "ba.nadea",
		nas : 25,
		utas : 96754567,
		mobicom : true,
		he : false,
		emeel : "ba123@gmail.com"
	},
	ageltan9 : {
		ner : "bo.nadea",
		nas : 26,
		utas : 94895342,
		mobicom : true,
		he : false,
		emeel : "bo3212gmail.com"
	},
	ageltan10 : {
		ner : "zoriogt",
		nas : 24,
		utas :89674523 ,
		mobicom : false,
		he : true,
		emeel : "z67@gmail.com"
	},
}
var er_tooloh = 0;
var em_tooloh = 0;
console.log(company); 
	for(key in company){
	console.log(company[key].ner);
	if(company[key].nas>25 && company[key].he==false){
		console.log("25aas deesh:"+company[key].nas)
	}
	if(company[key].utas>9 && company[key].mobicom==true){
		console.log(" mobicom:"+company[key].utas)
	}
	
	if(company[key].he==true){
		er_tooloh++;
	}else if(company[key].he==false){
		em_tooloh++;
	}
}
	console.log("Eregtei ajiltanii too: " + er_tooloh);
	console.log("Emegtei ajiltanii too: " + em_tooloh);