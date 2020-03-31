import { Value } from '../../../kloudformation/Value';

export function dynamoDBTargetProps(dynamoDBTargetPropsProps: DynamoDBTargetProps): DynamoDBTargetProps { return (dynamoDBTargetPropsProps) }

export interface DynamoDBTargetProps {
    path?: Value<string>;
}