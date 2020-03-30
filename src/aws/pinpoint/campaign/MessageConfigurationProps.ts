import { MessageProps } from './MessageProps';
import { CampaignEmailMessageProps } from './CampaignEmailMessageProps';
import { CampaignSmsMessageProps } from './CampaignSmsMessageProps';

export function messageConfigurationProps(messageConfigurationPropsProps: MessageConfigurationProps): MessageConfigurationProps { return (messageConfigurationPropsProps) as unknown as MessageConfigurationProps }

export interface MessageConfigurationProps {
    aPNSMessage?: MessageProps;
    baiduMessage?: MessageProps;
    defaultMessage?: MessageProps;
    emailMessage?: CampaignEmailMessageProps;
    gCMMessage?: MessageProps;
    sMSMessage?: CampaignSmsMessageProps;
    aDMMessage?: MessageProps;
}