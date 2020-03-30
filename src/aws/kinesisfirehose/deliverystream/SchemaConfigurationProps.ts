import { Value } from '../../../kloudformation/Value';

export function schemaConfigurationProps(schemaConfigurationPropsProps: SchemaConfigurationProps): SchemaConfigurationProps { return (schemaConfigurationPropsProps) as unknown as SchemaConfigurationProps }

export interface SchemaConfigurationProps {
    catalogId: Value<string>;
    databaseName: Value<string>;
    region: Value<string>;
    roleARN: Value<string>;
    tableName: Value<string>;
    versionId: Value<string>;
}