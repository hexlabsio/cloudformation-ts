import { Value } from '../../../kloudformation/Value';

export function lambdaProps(lambdaPropsProps: LambdaProps): LambdaProps { return (lambdaPropsProps) }

export interface LambdaProps {
    functionArn?: Value<string>;
}