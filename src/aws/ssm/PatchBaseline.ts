import { Value } from '../../kloudformation/Value';
import { RuleGroupProps } from './patchBaseline/RuleGroupProps';
import { PatchSourceProps } from './patchBaseline/PatchSourceProps';
import { PatchFilterGroupProps } from './patchBaseline/PatchFilterGroupProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function patchBaseline(patchBaselineProps: PatchBaseline): PatchBaseline { return ({ ...patchBaselineProps, _logicalType: '' }) }
  
export interface PatchBaseline extends KloudResource {
  operatingSystem?: Value<string>
  description?: Value<string>
  approvalRules?: RuleGroupProps
  sources?: PatchSourceProps[]
  name: Value<string>
  rejectedPatches?: Value<Value<string>[]>
  approvedPatches?: Value<Value<string>[]>
  rejectedPatchesAction?: Value<string>
  patchGroups?: Value<Value<string>[]>
  approvedPatchesComplianceLevel?: Value<string>
  approvedPatchesEnableNonSecurity?: Value<boolean>
  globalFilters?: PatchFilterGroupProps
  tags?: Tag[]
}