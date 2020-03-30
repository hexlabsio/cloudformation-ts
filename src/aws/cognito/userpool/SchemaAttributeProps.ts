import { Value } from '../../../kloudformation/Value';
import { StringAttributeConstraintsProps } from './StringAttributeConstraintsProps';
import { NumberAttributeConstraintsProps } from './NumberAttributeConstraintsProps';

export function schemaAttributeProps(schemaAttributePropsProps: SchemaAttributeProps): SchemaAttributeProps { return (schemaAttributePropsProps) as unknown as SchemaAttributeProps }

export interface SchemaAttributeProps {
    developerOnlyAttribute?: Value<boolean>;
    mutable?: Value<boolean>;
    attributeDataType?: Value<string>;
    stringAttributeConstraints?: StringAttributeConstraintsProps;
    required?: Value<boolean>;
    numberAttributeConstraints?: NumberAttributeConstraintsProps;
    name?: Value<string>;
}