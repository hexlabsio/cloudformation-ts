import { Value } from '../../../kloudformation/Value';

export function campaignHookProps(campaignHookPropsProps: CampaignHookProps): CampaignHookProps { return (campaignHookPropsProps) }

export interface CampaignHookProps {
    mode?: Value<string>;
    webUrl?: Value<string>;
    lambdaFunctionName?: Value<string>;
}