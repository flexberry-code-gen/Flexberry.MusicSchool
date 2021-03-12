import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-music-school-group', 'Unit | Model | i-i-s-music-school-group', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-music-school-group',
    'model:i-i-s-music-school-lesson',
    'model:i-i-s-music-school-pupil-in-group',
    'model:i-i-s-music-school-pupil',
    'model:i-i-s-music-school-teacher',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
