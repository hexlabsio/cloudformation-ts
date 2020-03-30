import { Value } from '../../../kloudformation/Value';

export function bandwidthProps(bandwidthPropsProps: BandwidthProps): BandwidthProps { return (bandwidthPropsProps) as unknown as BandwidthProps }

export interface BandwidthProps {
    downloadSpeed?: Value<number>;
    uploadSpeed?: Value<number>;
}