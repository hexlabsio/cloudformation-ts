import { Value } from '../../../kloudformation/Value';

export function robotSoftwareSuiteProps(robotSoftwareSuitePropsProps: RobotSoftwareSuiteProps): RobotSoftwareSuiteProps { return (robotSoftwareSuitePropsProps) }

export interface RobotSoftwareSuiteProps {
    version: Value<string>;
    name: Value<string>;
}