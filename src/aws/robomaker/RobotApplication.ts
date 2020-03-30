import { RobotSoftwareSuiteProps } from './robotapplication/RobotSoftwareSuiteProps';
import { SourceConfigProps } from './robotapplication/SourceConfigProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function robotApplication(robotApplicationProps: RobotApplication & { logicalName?: string }): RobotApplication { return ({ ...robotApplicationProps, _logicalType: 'AWS::RoboMaker::RobotApplication' }) as unknown as RobotApplication }

export interface RobotApplication extends KloudResource {
    robotSoftwareSuite: RobotSoftwareSuiteProps;
    sources: SourceConfigProps[];
    currentRevisionId?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}