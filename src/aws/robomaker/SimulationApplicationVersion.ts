import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SimulationApplicationVersionAttributes = {  }
export function simulationApplicationVersion(simulationApplicationVersionProps: SimulationApplicationVersion): SimulationApplicationVersion & { attributes: SimulationApplicationVersionAttributes } { return ({ ...simulationApplicationVersionProps, _logicalType: 'AWS::RoboMaker::SimulationApplicationVersion', attributes: {  } }) }

export interface SimulationApplicationVersion extends KloudResource {
    application: Value<string>;
    currentRevisionId?: Value<string>;
}