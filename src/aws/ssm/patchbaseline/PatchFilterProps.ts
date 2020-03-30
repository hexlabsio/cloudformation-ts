import { Value } from '../../../kloudformation/Value';

export function patchFilterProps(patchFilterPropsProps: PatchFilterProps): PatchFilterProps { return (patchFilterPropsProps) as unknown as PatchFilterProps }

export interface PatchFilterProps {
    values?: Value<Value<string>[]>;
    key?: Value<string>;
}