`import Ember from 'ember'`
`import <%= classifiedModuleName %>Mixin from '../../../mixins/<%= dasherizedModuleName %>'`

QUnit.module '<%= classifiedModuleName %>Mixin'

# Replace this with your real tests.
QUnit.test 'it works', (assert) ->
  <%= classifiedModuleName %>Object = Ember.Object.extend <%= classifiedModuleName %>Mixin
  subject = <%= classifiedModuleName %>Object.create()
  assert.ok subject
