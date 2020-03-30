import { Value } from '../../../kloudformation/Value';

export function inputDestinationRequestProps(inputDestinationRequestPropsProps: InputDestinationRequestProps): InputDestinationRequestProps { return (inputDestinationRequestPropsProps) as unknown as InputDestinationRequestProps }

export interface InputDestinationRequestProps {
    streamName?: Value<string>;
}