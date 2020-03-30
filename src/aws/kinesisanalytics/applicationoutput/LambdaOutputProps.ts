import { Value } from '../../../kloudformation/Value';

export function lambdaOutputProps(lambdaOutputPropsProps: LambdaOutputProps): LambdaOutputProps { return (lambdaOutputPropsProps) as unknown as LambdaOutputProps }

export interface LambdaOutputProps {
    resourceARN: Value<string>;
    roleARN: Value<string>;
}