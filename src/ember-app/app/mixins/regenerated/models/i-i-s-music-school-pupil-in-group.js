import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  active: DS.attr('boolean', { defaultValue: true }),
  pupil: DS.belongsTo('i-i-s-music-school-pupil', { inverse: null, async: false }),
  group: DS.belongsTo('i-i-s-music-school-group', { inverse: 'pupilInGroup', async: false })
});

export let ValidationRules = {
  active: {
    descriptionKey: 'models.i-i-s-music-school-pupil-in-group.validations.active.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  pupil: {
    descriptionKey: 'models.i-i-s-music-school-pupil-in-group.validations.pupil.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  group: {
    descriptionKey: 'models.i-i-s-music-school-pupil-in-group.validations.group.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PupilInGroupE', 'i-i-s-music-school-pupil-in-group', {
    active: attr('Active', { index: 0 }),
    pupil: belongsTo('i-i-s-music-school-pupil', 'Pupil', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
