import { DestinationSchemaProps } from './DestinationSchemaProps';
import { LambdaOutputProps } from './LambdaOutputProps';
import { KinesisFirehoseOutputProps } from './KinesisFirehoseOutputProps';
import { KinesisStreamsOutputProps } from './KinesisStreamsOutputProps';
import { Value } from '../../../kloudformation/Value';

export interface OutputProps {
  destinationSchema: DestinationSchemaProps
  lambdaOutput?: LambdaOutputProps
  kinesisFirehoseOutput?: KinesisFirehoseOutputProps
  kinesisStreamsOutput?: KinesisStreamsOutputProps
  name?: Value<string>
}