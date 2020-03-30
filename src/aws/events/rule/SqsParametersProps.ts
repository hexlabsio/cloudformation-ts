import { Value } from '../../../kloudformation/Value';

export function sqsParametersProps(sqsParametersPropsProps: SqsParametersProps): SqsParametersProps { return (sqsParametersPropsProps) as unknown as SqsParametersProps }

export interface SqsParametersProps {
    messageGroupId: Value<string>;
}