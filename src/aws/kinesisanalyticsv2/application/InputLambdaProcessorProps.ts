import { Value } from '../../../kloudformation/Value';

export function inputLambdaProcessorProps(inputLambdaProcessorPropsProps: InputLambdaProcessorProps): InputLambdaProcessorProps { return (inputLambdaProcessorPropsProps) }

export interface InputLambdaProcessorProps {
    resourceARN: Value<string>;
}