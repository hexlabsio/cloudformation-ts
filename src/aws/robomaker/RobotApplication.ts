import { Value } from '../../kloudformation/Value';
import { RobotSoftwareSuiteProps } from './robotApplication/RobotSoftwareSuiteProps';
import { SourceConfigProps } from './robotApplication/SourceConfigProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type RobotApplicationAttributes = { CurrentRevisionId: Attribute<string>;Arn: Attribute<string> }
export function robotApplication(robotApplicationProps: RobotApplication): RobotApplication & {attributes: RobotApplicationAttributes} { return ({ ...robotApplicationProps, _logicalType: 'AWS::RoboMaker::RobotApplication', attributes: { CurrentRevisionId: 'CurrentRevisionId',Arn: 'Arn' } }) }
   
export interface RobotApplication extends KloudResource {
  currentRevisionId?: Value<string>
  robotSoftwareSuite: RobotSoftwareSuiteProps
  sources: SourceConfigProps[]
  tags?: Value<any>
  name?: Value<string>
}