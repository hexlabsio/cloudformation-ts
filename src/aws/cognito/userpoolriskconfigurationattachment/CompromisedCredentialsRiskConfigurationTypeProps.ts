import { CompromisedCredentialsActionsTypeProps } from './CompromisedCredentialsActionsTypeProps';
import { Value } from '../../../kloudformation/Value';

export interface CompromisedCredentialsRiskConfigurationTypeProps {
  actions: CompromisedCredentialsActionsTypeProps
  eventFilter?: Value<Value<string>[]>
}