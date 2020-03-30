import { Value } from '../../../kloudformation/Value';

export function campaignSmsMessageProps(campaignSmsMessagePropsProps: CampaignSmsMessageProps): CampaignSmsMessageProps { return (campaignSmsMessagePropsProps) as unknown as CampaignSmsMessageProps }

export interface CampaignSmsMessageProps {
    senderId?: Value<string>;
    body?: Value<string>;
    messageType?: Value<string>;
}