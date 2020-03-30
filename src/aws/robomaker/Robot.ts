import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function robot(robotProps: Robot & { logicalName?: string }): Robot { return ({ ...robotProps, _logicalType: 'AWS::RoboMaker::Robot' }) as unknown as Robot }

export interface Robot extends KloudResource {
    architecture: Value<string>;
    greengrassGroupId: Value<string>;
    fleet?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}