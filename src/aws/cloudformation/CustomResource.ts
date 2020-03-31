import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type CustomResourceAttributes = {  }
export function customResource(customResourceProps: CustomResource): CustomResource & { attributes: CustomResourceAttributes } { return ({ ...customResourceProps, _logicalType: 'AWS::CloudFormation::CustomResource', attributes: {  } }) }

export interface CustomResource extends KloudResource {
    serviceToken: Value<string>;
}