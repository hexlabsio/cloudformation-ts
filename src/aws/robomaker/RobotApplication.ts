import { RobotSoftwareSuiteProps } from './robotapplication/RobotSoftwareSuiteProps';
import { SourceConfigProps } from './robotapplication/SourceConfigProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type RobotApplicationAttributes = { CurrentRevisionId: Attribute<string>; Arn: Attribute<string> }
export function robotApplication(robotApplicationProps: RobotApplication): RobotApplication & { attributes: RobotApplicationAttributes } { return ({ ...robotApplicationProps, _logicalType: 'AWS::RoboMaker::RobotApplication', attributes: { CurrentRevisionId: 'CurrentRevisionId', Arn: 'Arn' } }) }

export interface RobotApplication extends KloudResource {
    robotSoftwareSuite: RobotSoftwareSuiteProps;
    sources: SourceConfigProps[];
    currentRevisionId?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}