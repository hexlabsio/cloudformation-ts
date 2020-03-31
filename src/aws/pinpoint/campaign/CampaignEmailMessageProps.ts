import { Value } from '../../../kloudformation/Value';

export function campaignEmailMessageProps(campaignEmailMessagePropsProps: CampaignEmailMessageProps): CampaignEmailMessageProps { return (campaignEmailMessagePropsProps) }

export interface CampaignEmailMessageProps {
    fromAddress?: Value<string>;
    htmlBody?: Value<string>;
    title?: Value<string>;
    body?: Value<string>;
}