import { CompromisedCredentialsActionsTypeProps } from './CompromisedCredentialsActionsTypeProps';
import { Value } from '../../../kloudformation/Value';

export function compromisedCredentialsRiskConfigurationTypeProps(compromisedCredentialsRiskConfigurationTypePropsProps: CompromisedCredentialsRiskConfigurationTypeProps): CompromisedCredentialsRiskConfigurationTypeProps { return (compromisedCredentialsRiskConfigurationTypePropsProps) }

export interface CompromisedCredentialsRiskConfigurationTypeProps {
    actions: CompromisedCredentialsActionsTypeProps;
    eventFilter?: Value<Value<string>[]>;
}