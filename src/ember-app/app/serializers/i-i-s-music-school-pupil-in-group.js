import { Serializer as PupilInGroupSerializer } from
  '../mixins/regenerated/serializers/i-i-s-music-school-pupil-in-group';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PupilInGroupSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
