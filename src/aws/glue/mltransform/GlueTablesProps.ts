import { Value } from '../../../kloudformation/Value';

export function glueTablesProps(glueTablesPropsProps: GlueTablesProps): GlueTablesProps { return (glueTablesPropsProps) as unknown as GlueTablesProps }

export interface GlueTablesProps {
    tableName: Value<string>;
    databaseName: Value<string>;
    connectionName?: Value<string>;
    catalogId?: Value<string>;
}