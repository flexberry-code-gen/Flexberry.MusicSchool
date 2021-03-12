import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMusicSchoolGroupLForm from './forms/i-i-s-music-school-group-l';
import IISMusicSchoolLessonLForm from './forms/i-i-s-music-school-lesson-l';
import IISMusicSchoolPupilLForm from './forms/i-i-s-music-school-pupil-l';
import IISMusicSchoolTeacherLForm from './forms/i-i-s-music-school-teacher-l';
import IISMusicSchoolGroupEForm from './forms/i-i-s-music-school-group-e';
import IISMusicSchoolLessonEForm from './forms/i-i-s-music-school-lesson-e';
import IISMusicSchoolPupilEForm from './forms/i-i-s-music-school-pupil-e';
import IISMusicSchoolTeacherEForm from './forms/i-i-s-music-school-teacher-e';
import IISMusicSchoolGroupModel from './models/i-i-s-music-school-group';
import IISMusicSchoolLessonModel from './models/i-i-s-music-school-lesson';
import IISMusicSchoolPupilInGroupModel from './models/i-i-s-music-school-pupil-in-group';
import IISMusicSchoolPupilModel from './models/i-i-s-music-school-pupil';
import IISMusicSchoolTeacherModel from './models/i-i-s-music-school-teacher';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-music-school-group': IISMusicSchoolGroupModel,
    'i-i-s-music-school-lesson': IISMusicSchoolLessonModel,
    'i-i-s-music-school-pupil-in-group': IISMusicSchoolPupilInGroupModel,
    'i-i-s-music-school-pupil': IISMusicSchoolPupilModel,
    'i-i-s-music-school-teacher': IISMusicSchoolTeacherModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'music-school': {
          caption: 'music-school',
          title: 'music-school',
          'i-i-s-music-school-pupil-l': {
            caption: 'i-i-s-music-school-pupil-l',
            title: 'i-i-s-music-school-pupil-l'
          },
          'i-i-s-music-school-lesson-l': {
            caption: 'i-i-s-music-school-lesson-l',
            title: 'i-i-s-music-school-lesson-l'
          },
          'i-i-s-music-school-teacher-l': {
            caption: 'i-i-s-music-school-teacher-l',
            title: 'i-i-s-music-school-teacher-l'
          },
          'i-i-s-music-school-group-l': {
            caption: 'i-i-s-music-school-group-l',
            title: 'i-i-s-music-school-group-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-music-school-group-l': IISMusicSchoolGroupLForm,
    'i-i-s-music-school-lesson-l': IISMusicSchoolLessonLForm,
    'i-i-s-music-school-pupil-l': IISMusicSchoolPupilLForm,
    'i-i-s-music-school-teacher-l': IISMusicSchoolTeacherLForm,
    'i-i-s-music-school-group-e': IISMusicSchoolGroupEForm,
    'i-i-s-music-school-lesson-e': IISMusicSchoolLessonEForm,
    'i-i-s-music-school-pupil-e': IISMusicSchoolPupilEForm,
    'i-i-s-music-school-teacher-e': IISMusicSchoolTeacherEForm
  },

});

export default translations;
