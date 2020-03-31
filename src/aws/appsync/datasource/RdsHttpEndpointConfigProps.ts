import { Value } from '../../../kloudformation/Value';

export function rdsHttpEndpointConfigProps(rdsHttpEndpointConfigPropsProps: RdsHttpEndpointConfigProps): RdsHttpEndpointConfigProps { return (rdsHttpEndpointConfigPropsProps) }

export interface RdsHttpEndpointConfigProps {
    awsRegion: Value<string>;
    dbClusterIdentifier: Value<string>;
    awsSecretStoreArn: Value<string>;
    schema?: Value<string>;
    databaseName?: Value<string>;
}