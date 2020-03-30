import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resource(resourceProps: Resource & { logicalName?: string }): Resource { return ({ ...resourceProps, _logicalType: 'AWS::LakeFormation::Resource' }) as unknown as Resource }

export interface Resource extends KloudResource {
    resourceArn: Value<string>;
    useServiceLinkedRole: Value<boolean>;
    roleArn?: Value<string>;
}