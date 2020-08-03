import { RenderingEngineProps } from './simulationApplication/RenderingEngineProps';
import { SimulationSoftwareSuiteProps } from './simulationApplication/SimulationSoftwareSuiteProps';
import { Value } from '../../kloudformation/Value';
import { RobotSoftwareSuiteProps } from './simulationApplication/RobotSoftwareSuiteProps';
import { SourceConfigProps } from './simulationApplication/SourceConfigProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SimulationApplicationAttributes = { CurrentRevisionId: Attribute<string>;Arn: Attribute<string> }
export function simulationApplication(simulationApplicationProps: SimulationApplication): SimulationApplication & {attributes: SimulationApplicationAttributes} { return ({ ...simulationApplicationProps, _logicalType: 'AWS::RoboMaker::SimulationApplication', attributes: { CurrentRevisionId: 'CurrentRevisionId',Arn: 'Arn' } }) }
   
export interface SimulationApplication extends KloudResource {
  renderingEngine: RenderingEngineProps
  simulationSoftwareSuite: SimulationSoftwareSuiteProps
  currentRevisionId?: Value<string>
  robotSoftwareSuite: RobotSoftwareSuiteProps
  sources: SourceConfigProps[]
  tags?: Value<any>
  name?: Value<string>
}