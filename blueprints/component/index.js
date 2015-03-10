module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  normalizeEntityName: function(entityName) {
    return this.lookupBlueprint('component').normalizeEntityName(entityName);
  },

  fileMapTokens: function() {
    return this.lookupBlueprint('component').fileMapTokens();
  },

  locals: function(options) {
    return this.lookupBlueprint('component').locals(options);
  }
};
