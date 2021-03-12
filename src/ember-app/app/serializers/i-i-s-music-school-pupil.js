import { Serializer as PupilSerializer } from
  '../mixins/regenerated/serializers/i-i-s-music-school-pupil';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PupilSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
