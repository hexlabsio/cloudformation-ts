import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function hub(hubProps: Hub & { logicalName?: string }): Hub { return ({ ...hubProps, _logicalType: 'AWS::SecurityHub::Hub' }) as unknown as Hub }

export interface Hub extends KloudResource {
    tags?: Value<any>;
}