import { Value } from '../../../kloudformation/Value';
import { EventDimensionsProps } from './EventDimensionsProps';

export function campaignEventFilterProps(campaignEventFilterPropsProps: CampaignEventFilterProps): CampaignEventFilterProps { return (campaignEventFilterPropsProps) }

export interface CampaignEventFilterProps {
    filterType?: Value<string>;
    dimensions?: EventDimensionsProps;
}