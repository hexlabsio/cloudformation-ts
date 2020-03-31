import { Value } from '../../kloudformation/Value';
import { OutputProps } from '../kinesisanalytics/applicationoutput/OutputProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationOutputAttributes = {  }
export function applicationOutput(applicationOutputProps: ApplicationOutput): ApplicationOutput & { attributes: ApplicationOutputAttributes } { return ({ ...applicationOutputProps, _logicalType: 'AWS::KinesisAnalyticsV2::ApplicationOutput', attributes: {  } }) }

export interface ApplicationOutput extends KloudResource {
    applicationName: Value<string>;
    output: OutputProps;
}