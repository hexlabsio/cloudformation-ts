import { ResourceValueProps } from './ResourceValueProps';
import { StaticValueProps } from './StaticValueProps';

export function remediationParameterValueProps(remediationParameterValuePropsProps: RemediationParameterValueProps): RemediationParameterValueProps { return (remediationParameterValuePropsProps) as unknown as RemediationParameterValueProps }

export interface RemediationParameterValueProps {
    resourceValue?: ResourceValueProps;
    staticValue?: StaticValueProps;
}