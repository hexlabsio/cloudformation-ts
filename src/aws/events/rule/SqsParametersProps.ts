import { Value } from '../../../kloudformation/Value';

export function sqsParametersProps(sqsParametersPropsProps: SqsParametersProps): SqsParametersProps { return (sqsParametersPropsProps) }

export interface SqsParametersProps {
    messageGroupId: Value<string>;
}