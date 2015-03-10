module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  fileMapTokens: function() {
    return this.lookupBlueprint('component-addon').fileMapTokens();
  },

  normalizeEntityName: function(entityName) {
    return this.lookupBlueprint('component-addon').normalizeEntityName(entityName);
  },

  locals: function(options) {
    return this.lookupBlueprint('component-addon').locals(options);
  }
}
