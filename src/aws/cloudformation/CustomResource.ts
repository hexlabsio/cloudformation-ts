import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function customResource(customResourceProps: CustomResource & { logicalName?: string }): CustomResource { return ({ ...customResourceProps, _logicalType: 'AWS::CloudFormation::CustomResource' }) as unknown as CustomResource }

export interface CustomResource extends KloudResource {
    serviceToken: Value<string>;
}