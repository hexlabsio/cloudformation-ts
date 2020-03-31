import { Value } from '../../../kloudformation/Value';
import { RdsHttpEndpointConfigProps } from './RdsHttpEndpointConfigProps';

export function relationalDatabaseConfigProps(relationalDatabaseConfigPropsProps: RelationalDatabaseConfigProps): RelationalDatabaseConfigProps { return (relationalDatabaseConfigPropsProps) }

export interface RelationalDatabaseConfigProps {
    relationalDatabaseSourceType: Value<string>;
    rdsHttpEndpointConfig?: RdsHttpEndpointConfigProps;
}