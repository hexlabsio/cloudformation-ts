import { SourceProps } from './app/SourceProps';
import { Value } from '../../kloudformation/Value';
import { DataSourceProps } from './app/DataSourceProps';
import { EnvironmentVariableProps } from './app/EnvironmentVariableProps';
import { SslConfigurationProps } from './app/SslConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function app(appProps: App): App { return ({ ...appProps, _logicalType: '' }) }
  
export interface App extends KloudResource {
  appSource?: SourceProps
  attributes?: Value<Value<string>[]>
  dataSources?: DataSourceProps[]
  description?: Value<string>
  domains?: Value<Value<string>[]>
  enableSsl?: Value<boolean>
  environment?: EnvironmentVariableProps[]
  name: Value<string>
  shortname?: Value<string>
  sslConfiguration?: SslConfigurationProps
  stackId: Value<string>
  type: Value<string>
}