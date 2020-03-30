import { Value } from '../../../kloudformation/Value';

export function schemaChangePolicyProps(schemaChangePolicyPropsProps: SchemaChangePolicyProps): SchemaChangePolicyProps { return (schemaChangePolicyPropsProps) as unknown as SchemaChangePolicyProps }

export interface SchemaChangePolicyProps {
    updateBehavior?: Value<string>;
    deleteBehavior?: Value<string>;
}