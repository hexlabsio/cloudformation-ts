import { Value } from '../../../kloudformation/Value';

export function robotSoftwareSuiteProps(robotSoftwareSuitePropsProps: RobotSoftwareSuiteProps): RobotSoftwareSuiteProps { return (robotSoftwareSuitePropsProps) as unknown as RobotSoftwareSuiteProps }

export interface RobotSoftwareSuiteProps {
    version: Value<string>;
    name: Value<string>;
}