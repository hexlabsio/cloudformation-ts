import { OnSuccessProps } from './OnSuccessProps';
import { OnFailureProps } from './OnFailureProps';

export function destinationConfigProps(destinationConfigPropsProps: DestinationConfigProps): DestinationConfigProps { return (destinationConfigPropsProps) as unknown as DestinationConfigProps }

export interface DestinationConfigProps {
    onSuccess?: OnSuccessProps;
    onFailure?: OnFailureProps;
}