import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function robotApplicationVersion(robotApplicationVersionProps: RobotApplicationVersion): RobotApplicationVersion { return ({ ...robotApplicationVersionProps, _logicalType: '' }) }
  
export interface RobotApplicationVersion extends KloudResource {
  currentRevisionId?: Value<string>
  application: Value<string>
}