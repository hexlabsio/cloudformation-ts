import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RobotApplicationVersionAttributes = {  }
export function robotApplicationVersion(robotApplicationVersionProps: RobotApplicationVersion): RobotApplicationVersion & { attributes: RobotApplicationVersionAttributes } { return ({ ...robotApplicationVersionProps, _logicalType: 'AWS::RoboMaker::RobotApplicationVersion', attributes: {  } }) }

export interface RobotApplicationVersion extends KloudResource {
    application: Value<string>;
    currentRevisionId?: Value<string>;
}