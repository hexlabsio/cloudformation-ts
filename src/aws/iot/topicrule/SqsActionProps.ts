import { Value } from '../../../kloudformation/Value';

export function sqsActionProps(sqsActionPropsProps: SqsActionProps): SqsActionProps { return (sqsActionPropsProps) }

export interface SqsActionProps {
    queueUrl: Value<string>;
    roleArn: Value<string>;
    useBase64?: Value<boolean>;
}