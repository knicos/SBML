function Metabolite(id, kegg, name, formula, charge, external) {
	this.id = id;
	this.kegg = kegg;
	this.name = name;
	this.formula = formula;
	this.charge = charge;
	this.external = external;

	metabolite_index_id[id] = this;
	metabolite_index_kegg[kegg] = this;

	this.extra = null;
	this.reactions = [];
}

Metabolite.prototype.addAcronym = function(label) {
	this.acronym = label;
	metabolite_index_acr[label] = this;
}

Metabolite.prototype.addReaction = function(r) {
	this.reactions.push(r);
}

let metabolite_index_id = {};
let metabolite_index_kegg = {};
let metabolite_index_acr = {};

Metabolite.getByID = function(id) {
	return metabolite_index_id[id];
}

Metabolite.getByKEGG = function(kegg) {
	return metabolite_index_kegg[kegg];
}

Metabolite.getByAcronym = function(acr) {
	return metabolite_index_acr[acr];
}

module.exports = Metabolite;
