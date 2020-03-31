import { Value } from '../../../kloudformation/Value';

export function lambdaConfigProps(lambdaConfigPropsProps: LambdaConfigProps): LambdaConfigProps { return (lambdaConfigPropsProps) }

export interface LambdaConfigProps {
    lambdaFunctionArn: Value<string>;
}