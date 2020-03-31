import { Value } from '../../../kloudformation/Value';

export function scaleProps(scalePropsProps: ScaleProps): ScaleProps { return (scalePropsProps) }

export interface ScaleProps {
    unit?: Value<string>;
    value?: Value<number>;
}