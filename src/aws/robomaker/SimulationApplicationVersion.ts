import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function simulationApplicationVersion(simulationApplicationVersionProps: SimulationApplicationVersion & { logicalName?: string }): SimulationApplicationVersion { return ({ ...simulationApplicationVersionProps, _logicalType: 'AWS::RoboMaker::SimulationApplicationVersion' }) as unknown as SimulationApplicationVersion }

export interface SimulationApplicationVersion extends KloudResource {
    application: Value<string>;
    currentRevisionId?: Value<string>;
}