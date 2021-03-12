import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-music-school-pupil', 'Unit | Serializer | i-i-s-music-school-pupil', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-music-school-pupil',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
