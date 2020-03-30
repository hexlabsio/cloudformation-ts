import { Value } from '../../../kloudformation/Value';

export function mathProps(mathPropsProps: MathProps): MathProps { return (mathPropsProps) as unknown as MathProps }

export interface MathProps {
    attribute?: Value<string>;
    next?: Value<string>;
    math?: Value<string>;
    name?: Value<string>;
}