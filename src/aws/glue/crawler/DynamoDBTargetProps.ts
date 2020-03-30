import { Value } from '../../../kloudformation/Value';

export function dynamoDBTargetProps(dynamoDBTargetPropsProps: DynamoDBTargetProps): DynamoDBTargetProps { return (dynamoDBTargetPropsProps) as unknown as DynamoDBTargetProps }

export interface DynamoDBTargetProps {
    path?: Value<string>;
}