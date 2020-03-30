import { Value } from '../../../kloudformation/Value';

export function inputLambdaProcessorProps(inputLambdaProcessorPropsProps: InputLambdaProcessorProps): InputLambdaProcessorProps { return (inputLambdaProcessorPropsProps) as unknown as InputLambdaProcessorProps }

export interface InputLambdaProcessorProps {
    resourceARN: Value<string>;
    roleARN: Value<string>;
}