import { Serializer as TeacherSerializer } from
  '../mixins/regenerated/serializers/i-i-s-music-school-teacher';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TeacherSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
