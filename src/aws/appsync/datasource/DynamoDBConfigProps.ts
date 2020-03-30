import { Value } from '../../../kloudformation/Value';
import { DeltaSyncConfigProps } from './DeltaSyncConfigProps';

export function dynamoDBConfigProps(dynamoDBConfigPropsProps: DynamoDBConfigProps): DynamoDBConfigProps { return (dynamoDBConfigPropsProps) as unknown as DynamoDBConfigProps }

export interface DynamoDBConfigProps {
    tableName: Value<string>;
    awsRegion: Value<string>;
    versioned?: Value<boolean>;
    deltaSyncConfig?: DeltaSyncConfigProps;
    useCallerCredentials?: Value<boolean>;
}