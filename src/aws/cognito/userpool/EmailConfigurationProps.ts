import { Value } from '../../../kloudformation/Value';

export function emailConfigurationProps(emailConfigurationPropsProps: EmailConfigurationProps): EmailConfigurationProps { return (emailConfigurationPropsProps) }

export interface EmailConfigurationProps {
    replyToEmailAddress?: Value<string>;
    configurationSet?: Value<string>;
    emailSendingAccount?: Value<string>;
    sourceArn?: Value<string>;
    from?: Value<string>;
}