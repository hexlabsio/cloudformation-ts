import { RenderingEngineProps } from './simulationapplication/RenderingEngineProps';
import { SimulationSoftwareSuiteProps } from './simulationapplication/SimulationSoftwareSuiteProps';
import { RobotSoftwareSuiteProps } from './simulationapplication/RobotSoftwareSuiteProps';
import { SourceConfigProps } from './simulationapplication/SourceConfigProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type SimulationApplicationAttributes = { CurrentRevisionId: Attribute<string>; Arn: Attribute<string> }
export function simulationApplication(simulationApplicationProps: SimulationApplication): SimulationApplication & { attributes: SimulationApplicationAttributes } { return ({ ...simulationApplicationProps, _logicalType: 'AWS::RoboMaker::SimulationApplication', attributes: { CurrentRevisionId: 'CurrentRevisionId', Arn: 'Arn' } }) }

export interface SimulationApplication extends KloudResource {
    renderingEngine: RenderingEngineProps;
    simulationSoftwareSuite: SimulationSoftwareSuiteProps;
    robotSoftwareSuite: RobotSoftwareSuiteProps;
    sources: SourceConfigProps[];
    currentRevisionId?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}