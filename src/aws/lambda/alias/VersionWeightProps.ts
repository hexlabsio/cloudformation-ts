import { Value } from '../../../kloudformation/Value';

export function versionWeightProps(versionWeightPropsProps: VersionWeightProps): VersionWeightProps { return (versionWeightPropsProps) }

export interface VersionWeightProps {
    functionVersion: Value<string>;
    functionWeight: Value<number>;
}