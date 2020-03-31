import { Value } from '../../../kloudformation/Value';

export function destinationProps(destinationPropsProps: DestinationProps): DestinationProps { return (destinationPropsProps) }

export interface DestinationProps {
    destinationArn?: Value<string>;
}