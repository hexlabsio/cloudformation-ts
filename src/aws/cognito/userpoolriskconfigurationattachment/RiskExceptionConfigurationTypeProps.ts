import { Value } from '../../../kloudformation/Value';

export function riskExceptionConfigurationTypeProps(riskExceptionConfigurationTypePropsProps: RiskExceptionConfigurationTypeProps): RiskExceptionConfigurationTypeProps { return (riskExceptionConfigurationTypePropsProps) }

export interface RiskExceptionConfigurationTypeProps {
    blockedIPRangeList?: Value<Value<string>[]>;
    skippedIPRangeList?: Value<Value<string>[]>;
}