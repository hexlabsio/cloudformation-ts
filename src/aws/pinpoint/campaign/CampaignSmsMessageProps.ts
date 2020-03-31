import { Value } from '../../../kloudformation/Value';

export function campaignSmsMessageProps(campaignSmsMessagePropsProps: CampaignSmsMessageProps): CampaignSmsMessageProps { return (campaignSmsMessagePropsProps) }

export interface CampaignSmsMessageProps {
    senderId?: Value<string>;
    body?: Value<string>;
    messageType?: Value<string>;
}