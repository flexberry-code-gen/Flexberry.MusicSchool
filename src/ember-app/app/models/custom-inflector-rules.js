import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('teacher', 'Teachers');
inflector.irregular('lesson', 'Lessons');
inflector.irregular('group', 'Groups');
inflector.irregular('pupil', 'Pupils');

export default {};
