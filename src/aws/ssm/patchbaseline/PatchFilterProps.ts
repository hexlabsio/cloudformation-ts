import { Value } from '../../../kloudformation/Value';

export function patchFilterProps(patchFilterPropsProps: PatchFilterProps): PatchFilterProps { return (patchFilterPropsProps) }

export interface PatchFilterProps {
    values?: Value<Value<string>[]>;
    key?: Value<string>;
}