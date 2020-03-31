import { Value } from '../../../kloudformation/Value';

export function sqsProps(sqsPropsProps: SqsProps): SqsProps { return (sqsPropsProps) }

export interface SqsProps {
    useBase64?: Value<boolean>;
    queueUrl?: Value<string>;
}