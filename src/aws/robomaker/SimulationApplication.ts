import { RenderingEngineProps } from './simulationapplication/RenderingEngineProps';
import { SimulationSoftwareSuiteProps } from './simulationapplication/SimulationSoftwareSuiteProps';
import { RobotSoftwareSuiteProps } from './simulationapplication/RobotSoftwareSuiteProps';
import { SourceConfigProps } from './simulationapplication/SourceConfigProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function simulationApplication(simulationApplicationProps: SimulationApplication & { logicalName?: string }): SimulationApplication { return ({ ...simulationApplicationProps, _logicalType: 'AWS::RoboMaker::SimulationApplication' }) as unknown as SimulationApplication }

export interface SimulationApplication extends KloudResource {
    renderingEngine: RenderingEngineProps;
    simulationSoftwareSuite: SimulationSoftwareSuiteProps;
    robotSoftwareSuite: RobotSoftwareSuiteProps;
    sources: SourceConfigProps[];
    currentRevisionId?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}