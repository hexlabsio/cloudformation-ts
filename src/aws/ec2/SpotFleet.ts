import { SpotFleetRequestConfigDataProps } from './spotFleet/SpotFleetRequestConfigDataProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function spotFleet(spotFleetProps: SpotFleet): SpotFleet { return ({ ...spotFleetProps, _logicalType: '' }) }
  
export interface SpotFleet extends KloudResource {
  spotFleetRequestConfigData: SpotFleetRequestConfigDataProps
}