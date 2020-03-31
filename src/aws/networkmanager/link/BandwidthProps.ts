import { Value } from '../../../kloudformation/Value';

export function bandwidthProps(bandwidthPropsProps: BandwidthProps): BandwidthProps { return (bandwidthPropsProps) }

export interface BandwidthProps {
    downloadSpeed?: Value<number>;
    uploadSpeed?: Value<number>;
}