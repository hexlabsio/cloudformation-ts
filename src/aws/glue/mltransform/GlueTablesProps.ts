import { Value } from '../../../kloudformation/Value';

export function glueTablesProps(glueTablesPropsProps: GlueTablesProps): GlueTablesProps { return (glueTablesPropsProps) }

export interface GlueTablesProps {
    tableName: Value<string>;
    databaseName: Value<string>;
    connectionName?: Value<string>;
    catalogId?: Value<string>;
}