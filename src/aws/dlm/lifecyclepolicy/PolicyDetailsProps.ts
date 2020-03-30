import { Value } from '../../../kloudformation/Value';
import { ScheduleProps } from './ScheduleProps';
import { Tag } from '../../Tag';
import { ParametersProps } from './ParametersProps';

export function policyDetailsProps(policyDetailsPropsProps: PolicyDetailsProps): PolicyDetailsProps { return (policyDetailsPropsProps) as unknown as PolicyDetailsProps }

export interface PolicyDetailsProps {
    resourceTypes: Value<Value<string>[]>;
    schedules: ScheduleProps[];
    targetTags: Tag[];
    policyType?: Value<string>;
    parameters?: ParametersProps;
}