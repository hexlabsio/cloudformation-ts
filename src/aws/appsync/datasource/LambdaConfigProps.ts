import { Value } from '../../../kloudformation/Value';

export function lambdaConfigProps(lambdaConfigPropsProps: LambdaConfigProps): LambdaConfigProps { return (lambdaConfigPropsProps) as unknown as LambdaConfigProps }

export interface LambdaConfigProps {
    lambdaFunctionArn: Value<string>;
}