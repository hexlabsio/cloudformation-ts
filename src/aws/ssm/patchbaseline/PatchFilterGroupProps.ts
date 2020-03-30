import { PatchFilterProps } from './PatchFilterProps';

export function patchFilterGroupProps(patchFilterGroupPropsProps: PatchFilterGroupProps): PatchFilterGroupProps { return (patchFilterGroupPropsProps) as unknown as PatchFilterGroupProps }

export interface PatchFilterGroupProps {
    patchFilters?: PatchFilterProps[];
}