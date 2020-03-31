import { Value } from '../../../kloudformation/Value';

export function dynamoDBActionProps(dynamoDBActionPropsProps: DynamoDBActionProps): DynamoDBActionProps { return (dynamoDBActionPropsProps) }

export interface DynamoDBActionProps {
    hashKeyField: Value<string>;
    hashKeyValue: Value<string>;
    roleArn: Value<string>;
    tableName: Value<string>;
    hashKeyType?: Value<string>;
    payloadField?: Value<string>;
    rangeKeyField?: Value<string>;
    rangeKeyType?: Value<string>;
    rangeKeyValue?: Value<string>;
}