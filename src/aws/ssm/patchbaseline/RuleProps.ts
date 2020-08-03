import { PatchStringDateProps } from './PatchStringDateProps';
import { Value } from '../../../kloudformation/Value';
import { PatchFilterGroupProps } from './PatchFilterGroupProps';

export interface RuleProps {
  approveUntilDate?: PatchStringDateProps
  enableNonSecurity?: Value<boolean>
  patchFilterGroup?: PatchFilterGroupProps
  approveAfterDays?: Value<number>
  complianceLevel?: Value<string>
}