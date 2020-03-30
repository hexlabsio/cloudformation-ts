import { Value } from '../../kloudformation/Value';
import { OutputProps } from '../kinesisanalytics/applicationoutput/OutputProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function applicationOutput(applicationOutputProps: ApplicationOutput & { logicalName?: string }): ApplicationOutput { return ({ ...applicationOutputProps, _logicalType: 'AWS::KinesisAnalyticsV2::ApplicationOutput' }) as unknown as ApplicationOutput }

export interface ApplicationOutput extends KloudResource {
    applicationName: Value<string>;
    output: OutputProps;
}