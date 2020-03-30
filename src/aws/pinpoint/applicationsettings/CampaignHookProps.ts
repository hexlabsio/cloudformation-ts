import { Value } from '../../../kloudformation/Value';

export function campaignHookProps(campaignHookPropsProps: CampaignHookProps): CampaignHookProps { return (campaignHookPropsProps) as unknown as CampaignHookProps }

export interface CampaignHookProps {
    mode?: Value<string>;
    webUrl?: Value<string>;
    lambdaFunctionName?: Value<string>;
}