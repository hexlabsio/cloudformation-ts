import { Value } from '../../../kloudformation/Value';

export function glueConfigurationProps(glueConfigurationPropsProps: GlueConfigurationProps): GlueConfigurationProps { return (glueConfigurationPropsProps) as unknown as GlueConfigurationProps }

export interface GlueConfigurationProps {
    tableName: Value<string>;
    databaseName: Value<string>;
}