import { FilterProps } from './FilterProps';
import { Value } from '../../../kloudformation/Value';

export function archiveRuleProps(archiveRulePropsProps: ArchiveRuleProps): ArchiveRuleProps { return (archiveRulePropsProps) as unknown as ArchiveRuleProps }

export interface ArchiveRuleProps {
    filter: FilterProps[];
    ruleName: Value<string>;
}