import { DestinationSchemaProps } from '../../kinesisanalytics/applicationoutput/DestinationSchemaProps';
import { LambdaOutputProps } from '../../kinesisanalytics/applicationoutput/LambdaOutputProps';
import { KinesisFirehoseOutputProps } from '../../kinesisanalytics/applicationoutput/KinesisFirehoseOutputProps';
import { KinesisStreamsOutputProps } from '../../kinesisanalytics/applicationoutput/KinesisStreamsOutputProps';
import { Value } from '../../../kloudformation/Value';

export function outputProps(outputPropsProps: OutputProps): OutputProps { return (outputPropsProps) }

export interface OutputProps {
    destinationSchema: DestinationSchemaProps;
    lambdaOutput?: LambdaOutputProps;
    kinesisFirehoseOutput?: KinesisFirehoseOutputProps;
    kinesisStreamsOutput?: KinesisStreamsOutputProps;
    name?: Value<string>;
}