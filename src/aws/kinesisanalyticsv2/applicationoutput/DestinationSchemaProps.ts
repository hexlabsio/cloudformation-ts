import { Value } from '../../../kloudformation/Value';

export function destinationSchemaProps(destinationSchemaPropsProps: DestinationSchemaProps): DestinationSchemaProps { return (destinationSchemaPropsProps) }

export interface DestinationSchemaProps {
    recordFormatType?: Value<string>;
}