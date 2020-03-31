import { SpotFleetRequestConfigDataProps } from './spotfleet/SpotFleetRequestConfigDataProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SpotFleetAttributes = {  }
export function spotFleet(spotFleetProps: SpotFleet): SpotFleet & { attributes: SpotFleetAttributes } { return ({ ...spotFleetProps, _logicalType: 'AWS::EC2::SpotFleet', attributes: {  } }) }

export interface SpotFleet extends KloudResource {
    spotFleetRequestConfigData: SpotFleetRequestConfigDataProps;
}