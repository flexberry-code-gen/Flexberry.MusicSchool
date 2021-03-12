import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  pupilCount: DS.attr('number'),
  pupilInGroup: DS.hasMany('i-i-s-music-school-pupil-in-group', { inverse: 'group', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-music-school-group.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  pupilCount: {
    descriptionKey: 'models.i-i-s-music-school-group.validations.pupilCount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  pupilInGroup: {
    descriptionKey: 'models.i-i-s-music-school-group.validations.pupilInGroup.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('GroupE', 'i-i-s-music-school-group', {
    name: attr('Name', { index: 0 }),
    pupilCount: attr('Pupil count', { index: 1 }),
    pupilInGroup: hasMany('i-i-s-music-school-pupil-in-group', 'Pupil in group', {
      active: attr('Active', { index: 0 }),
      pupil: belongsTo('i-i-s-music-school-pupil', 'Pupil', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('GroupL', 'i-i-s-music-school-group', {
    name: attr('Name', { index: 0 }),
    pupilCount: attr('Pupil count', { index: 1 })
  });
};
