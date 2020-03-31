import { Value } from '../../kloudformation/Value';
import { OutputProps } from './applicationoutput/OutputProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationOutputAttributes = {  }
export function applicationOutput(applicationOutputProps: ApplicationOutput): ApplicationOutput & { attributes: ApplicationOutputAttributes } { return ({ ...applicationOutputProps, _logicalType: 'AWS::KinesisAnalytics::ApplicationOutput', attributes: {  } }) }

export interface ApplicationOutput extends KloudResource {
    applicationName: Value<string>;
    output: OutputProps;
}