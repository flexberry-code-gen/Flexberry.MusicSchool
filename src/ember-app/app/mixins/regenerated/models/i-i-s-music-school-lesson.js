import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  mark: DS.attr('string'),
  date: DS.attr('date'),
  comment: DS.attr('string'),
  teacher: DS.belongsTo('i-i-s-music-school-teacher', { inverse: null, async: false }),
  pupil: DS.belongsTo('i-i-s-music-school-pupil', { inverse: null, async: false })
});

export let ValidationRules = {
  mark: {
    descriptionKey: 'models.i-i-s-music-school-lesson.validations.mark.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  date: {
    descriptionKey: 'models.i-i-s-music-school-lesson.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  comment: {
    descriptionKey: 'models.i-i-s-music-school-lesson.validations.comment.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  teacher: {
    descriptionKey: 'models.i-i-s-music-school-lesson.validations.teacher.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  pupil: {
    descriptionKey: 'models.i-i-s-music-school-lesson.validations.pupil.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('LessonE', 'i-i-s-music-school-lesson', {
    mark: attr('Mark', { index: 0 }),
    date: attr('Date', { index: 1 }),
    comment: attr('Comment', { index: 2 }),
    teacher: belongsTo('i-i-s-music-school-teacher', 'Teacher', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    pupil: belongsTo('i-i-s-music-school-pupil', 'Pupil', {
      name: attr('Name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('LessonL', 'i-i-s-music-school-lesson', {
    mark: attr('Mark', { index: 0 }),
    date: attr('Date', { index: 1 }),
    comment: attr('Comment', { index: 2 }),
    teacher: belongsTo('i-i-s-music-school-teacher', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true }),
    pupil: belongsTo('i-i-s-music-school-pupil', 'Name', {
      name: attr('Name', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
