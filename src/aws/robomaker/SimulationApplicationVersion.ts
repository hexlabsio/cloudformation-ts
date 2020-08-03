import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function simulationApplicationVersion(simulationApplicationVersionProps: SimulationApplicationVersion): SimulationApplicationVersion { return ({ ...simulationApplicationVersionProps, _logicalType: '' }) }
  
export interface SimulationApplicationVersion extends KloudResource {
  currentRevisionId?: Value<string>
  application: Value<string>
}