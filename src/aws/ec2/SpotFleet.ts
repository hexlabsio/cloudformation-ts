import { SpotFleetRequestConfigDataProps } from './spotfleet/SpotFleetRequestConfigDataProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function spotFleet(spotFleetProps: SpotFleet & { logicalName?: string }): SpotFleet { return ({ ...spotFleetProps, _logicalType: 'AWS::EC2::SpotFleet' }) as unknown as SpotFleet }

export interface SpotFleet extends KloudResource {
    spotFleetRequestConfigData: SpotFleetRequestConfigDataProps;
}