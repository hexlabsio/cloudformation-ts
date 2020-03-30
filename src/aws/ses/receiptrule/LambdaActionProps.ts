import { Value } from '../../../kloudformation/Value';

export function lambdaActionProps(lambdaActionPropsProps: LambdaActionProps): LambdaActionProps { return (lambdaActionPropsProps) as unknown as LambdaActionProps }

export interface LambdaActionProps {
    functionArn: Value<string>;
    topicArn?: Value<string>;
    invocationType?: Value<string>;
}