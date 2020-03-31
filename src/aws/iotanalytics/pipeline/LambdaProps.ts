import { Value } from '../../../kloudformation/Value';

export function lambdaProps(lambdaPropsProps: LambdaProps): LambdaProps { return (lambdaPropsProps) }

export interface LambdaProps {
    batchSize?: Value<number>;
    next?: Value<string>;
    lambdaName?: Value<string>;
    name?: Value<string>;
}