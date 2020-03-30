import { Value } from '../../../kloudformation/Value';
import { EventDimensionsProps } from './EventDimensionsProps';

export function campaignEventFilterProps(campaignEventFilterPropsProps: CampaignEventFilterProps): CampaignEventFilterProps { return (campaignEventFilterPropsProps) as unknown as CampaignEventFilterProps }

export interface CampaignEventFilterProps {
    filterType?: Value<string>;
    dimensions?: EventDimensionsProps;
}