import { Value } from '../../../kloudformation/Value';

export function lambdaProps(lambdaPropsProps: LambdaProps): LambdaProps { return (lambdaPropsProps) as unknown as LambdaProps }

export interface LambdaProps {
    functionArn?: Value<string>;
}