import { Value } from '../../../kloudformation/Value';

export function dynamoDbSettingsProps(dynamoDbSettingsPropsProps: DynamoDbSettingsProps): DynamoDbSettingsProps { return (dynamoDbSettingsPropsProps) }

export interface DynamoDbSettingsProps {
    serviceAccessRoleArn?: Value<string>;
}