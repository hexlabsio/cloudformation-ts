import { Value } from '../../../kloudformation/Value';

export function inputTransformerProps(inputTransformerPropsProps: InputTransformerProps): InputTransformerProps { return (inputTransformerPropsProps) as unknown as InputTransformerProps }

export interface InputTransformerProps {
    inputTemplate: Value<string>;
    inputPathsMap?: { [key: string]: Value<string> };
}