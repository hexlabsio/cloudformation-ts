import { Value } from '../../../kloudformation/Value';

export function dynamoDbSettingsProps(dynamoDbSettingsPropsProps: DynamoDbSettingsProps): DynamoDbSettingsProps { return (dynamoDbSettingsPropsProps) as unknown as DynamoDbSettingsProps }

export interface DynamoDbSettingsProps {
    serviceAccessRoleArn?: Value<string>;
}