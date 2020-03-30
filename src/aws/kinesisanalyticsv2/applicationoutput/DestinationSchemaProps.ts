import { Value } from '../../../kloudformation/Value';

export function destinationSchemaProps(destinationSchemaPropsProps: DestinationSchemaProps): DestinationSchemaProps { return (destinationSchemaPropsProps) as unknown as DestinationSchemaProps }

export interface DestinationSchemaProps {
    recordFormatType?: Value<string>;
}