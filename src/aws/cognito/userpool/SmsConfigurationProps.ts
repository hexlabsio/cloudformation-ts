import { Value } from '../../../kloudformation/Value';

export function smsConfigurationProps(smsConfigurationPropsProps: SmsConfigurationProps): SmsConfigurationProps { return (smsConfigurationPropsProps) as unknown as SmsConfigurationProps }

export interface SmsConfigurationProps {
    externalId?: Value<string>;
    snsCallerArn?: Value<string>;
}