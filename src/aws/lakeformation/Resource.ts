import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ResourceAttributes = {  }
export function resource(resourceProps: Resource): Resource & { attributes: ResourceAttributes } { return ({ ...resourceProps, _logicalType: 'AWS::LakeFormation::Resource', attributes: {  } }) }

export interface Resource extends KloudResource {
    resourceArn: Value<string>;
    useServiceLinkedRole: Value<boolean>;
    roleArn?: Value<string>;
}