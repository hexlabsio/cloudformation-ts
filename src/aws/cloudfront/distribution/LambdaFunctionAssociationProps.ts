import { Value } from '../../../kloudformation/Value';

export function lambdaFunctionAssociationProps(lambdaFunctionAssociationPropsProps: LambdaFunctionAssociationProps): LambdaFunctionAssociationProps { return (lambdaFunctionAssociationPropsProps) as unknown as LambdaFunctionAssociationProps }

export interface LambdaFunctionAssociationProps {
    includeBody?: Value<boolean>;
    eventType?: Value<string>;
    lambdaFunctionARN?: Value<string>;
}