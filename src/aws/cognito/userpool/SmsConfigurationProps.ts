import { Value } from '../../../kloudformation/Value';

export function smsConfigurationProps(smsConfigurationPropsProps: SmsConfigurationProps): SmsConfigurationProps { return (smsConfigurationPropsProps) }

export interface SmsConfigurationProps {
    externalId?: Value<string>;
    snsCallerArn?: Value<string>;
}