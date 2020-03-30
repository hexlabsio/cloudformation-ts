import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function robotApplicationVersion(robotApplicationVersionProps: RobotApplicationVersion & { logicalName?: string }): RobotApplicationVersion { return ({ ...robotApplicationVersionProps, _logicalType: 'AWS::RoboMaker::RobotApplicationVersion' }) as unknown as RobotApplicationVersion }

export interface RobotApplicationVersion extends KloudResource {
    application: Value<string>;
    currentRevisionId?: Value<string>;
}