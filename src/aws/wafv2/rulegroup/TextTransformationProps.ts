import { Value } from '../../../kloudformation/Value';

export function textTransformationProps(textTransformationPropsProps: TextTransformationProps): TextTransformationProps { return (textTransformationPropsProps) as unknown as TextTransformationProps }

export interface TextTransformationProps {
    priority: Value<number>;
    type: Value<string>;
}