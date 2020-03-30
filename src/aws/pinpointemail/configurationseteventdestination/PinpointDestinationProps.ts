import { Value } from '../../../kloudformation/Value';

export function pinpointDestinationProps(pinpointDestinationPropsProps: PinpointDestinationProps): PinpointDestinationProps { return (pinpointDestinationPropsProps) as unknown as PinpointDestinationProps }

export interface PinpointDestinationProps {
    applicationArn?: Value<string>;
}