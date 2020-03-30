import { Value } from '../../kloudformation/Value';
import { RuleGroupProps } from './patchbaseline/RuleGroupProps';
import { PatchSourceProps } from './patchbaseline/PatchSourceProps';
import { PatchFilterGroupProps } from './patchbaseline/PatchFilterGroupProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function patchBaseline(patchBaselineProps: PatchBaseline & { logicalName?: string }): PatchBaseline { return ({ ...patchBaselineProps, _logicalType: 'AWS::SSM::PatchBaseline' }) as unknown as PatchBaseline }

export interface PatchBaseline extends KloudResource {
    name: Value<string>;
    operatingSystem?: Value<string>;
    description?: Value<string>;
    approvalRules?: RuleGroupProps;
    sources?: PatchSourceProps[];
    rejectedPatches?: Value<Value<string>[]>;
    approvedPatches?: Value<Value<string>[]>;
    rejectedPatchesAction?: Value<string>;
    patchGroups?: Value<Value<string>[]>;
    approvedPatchesComplianceLevel?: Value<string>;
    approvedPatchesEnableNonSecurity?: Value<boolean>;
    globalFilters?: PatchFilterGroupProps;
    tags?: Tag[];
}