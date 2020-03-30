import { Value } from '../../../kloudformation/Value';

export function patchSourceProps(patchSourcePropsProps: PatchSourceProps): PatchSourceProps { return (patchSourcePropsProps) as unknown as PatchSourceProps }

export interface PatchSourceProps {
    products?: Value<Value<string>[]>;
    configuration?: Value<string>;
    name?: Value<string>;
}