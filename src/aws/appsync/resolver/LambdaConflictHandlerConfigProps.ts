import { Value } from '../../../kloudformation/Value';

export function lambdaConflictHandlerConfigProps(lambdaConflictHandlerConfigPropsProps: LambdaConflictHandlerConfigProps): LambdaConflictHandlerConfigProps { return (lambdaConflictHandlerConfigPropsProps) as unknown as LambdaConflictHandlerConfigProps }

export interface LambdaConflictHandlerConfigProps {
    lambdaConflictHandlerArn?: Value<string>;
}