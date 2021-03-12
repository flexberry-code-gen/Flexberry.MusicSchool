import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Music school',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Music school',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Music school',
          title: 'Music school'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'music-school': {
          caption: 'MusicSchool',
          title: 'MusicSchool',
          'i-i-s-music-school-pupil-l': {
            caption: 'Pupil',
            title: ''
          },
          'i-i-s-music-school-lesson-l': {
            caption: 'Lesson',
            title: ''
          },
          'i-i-s-music-school-teacher-l': {
            caption: 'Teacher',
            title: ''
          },
          'i-i-s-music-school-group-l': {
            caption: 'Group',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
