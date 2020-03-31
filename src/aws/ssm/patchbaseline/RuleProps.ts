import { Value } from '../../../kloudformation/Value';
import { PatchFilterGroupProps } from './PatchFilterGroupProps';

export function ruleProps(rulePropsProps: RuleProps): RuleProps { return (rulePropsProps) }

export interface RuleProps {
    enableNonSecurity?: Value<boolean>;
    patchFilterGroup?: PatchFilterGroupProps;
    approveAfterDays?: Value<number>;
    complianceLevel?: Value<string>;
}