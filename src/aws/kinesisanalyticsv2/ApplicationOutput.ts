import { Value } from '../../kloudformation/Value';
import { OutputProps } from './applicationOutput/OutputProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function applicationOutput(applicationOutputProps: ApplicationOutput): ApplicationOutput { return ({ ...applicationOutputProps, _logicalType: '' }) }
  
export interface ApplicationOutput extends KloudResource {
  applicationName: Value<string>
  output: OutputProps
}