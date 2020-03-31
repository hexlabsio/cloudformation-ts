import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type HubAttributes = {  }
export function hub(hubProps: Hub): Hub & { attributes: HubAttributes } { return ({ ...hubProps, _logicalType: 'AWS::SecurityHub::Hub', attributes: {  } }) }

export interface Hub extends KloudResource {
    tags?: Value<any>;
}