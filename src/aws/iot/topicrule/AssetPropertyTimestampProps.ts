import { Value } from '../../../kloudformation/Value';

export function assetPropertyTimestampProps(assetPropertyTimestampPropsProps: AssetPropertyTimestampProps): AssetPropertyTimestampProps { return (assetPropertyTimestampPropsProps) }

export interface AssetPropertyTimestampProps {
    timeInSeconds: Value<string>;
    offsetInNanos?: Value<string>;
}