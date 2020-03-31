import { Value } from '../../../kloudformation/Value';

export function trackingOptionsProps(trackingOptionsPropsProps: TrackingOptionsProps): TrackingOptionsProps { return (trackingOptionsPropsProps) }

export interface TrackingOptionsProps {
    customRedirectDomain?: Value<string>;
}