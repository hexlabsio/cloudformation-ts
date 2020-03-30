import { Value } from '../../../kloudformation/Value';

export function versionWeightProps(versionWeightPropsProps: VersionWeightProps): VersionWeightProps { return (versionWeightPropsProps) as unknown as VersionWeightProps }

export interface VersionWeightProps {
    functionVersion: Value<string>;
    functionWeight: Value<number>;
}