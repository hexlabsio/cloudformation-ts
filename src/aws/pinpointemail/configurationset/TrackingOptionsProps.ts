import { Value } from '../../../kloudformation/Value';

export function trackingOptionsProps(trackingOptionsPropsProps: TrackingOptionsProps): TrackingOptionsProps { return (trackingOptionsPropsProps) as unknown as TrackingOptionsProps }

export interface TrackingOptionsProps {
    customRedirectDomain?: Value<string>;
}