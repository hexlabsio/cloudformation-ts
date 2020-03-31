import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RobotAttributes = {  }
export function robot(robotProps: Robot): Robot & { attributes: RobotAttributes } { return ({ ...robotProps, _logicalType: 'AWS::RoboMaker::Robot', attributes: {  } }) }

export interface Robot extends KloudResource {
    architecture: Value<string>;
    greengrassGroupId: Value<string>;
    fleet?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}