import { Value } from '../../kloudformation/Value';
import { SourceProps } from './app/SourceProps';
import { DataSourceProps } from './app/DataSourceProps';
import { EnvironmentVariableProps } from '../amplify/app/EnvironmentVariableProps';
import { SslConfigurationProps } from './app/SslConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AppAttributes = {  }
export function app(appProps: App): App & { attributes: AppAttributes } { return ({ ...appProps, _logicalType: 'AWS::OpsWorks::App', attributes: {  } }) }

export interface App extends KloudResource {
    name: Value<string>;
    stackId: Value<string>;
    type: Value<string>;
    appSource?: SourceProps;
    attributes?: { [key: string]: Value<string> };
    dataSources?: DataSourceProps[];
    description?: Value<string>;
    domains?: Value<Value<string>[]>;
    enableSsl?: Value<boolean>;
    environment?: EnvironmentVariableProps[];
    shortname?: Value<string>;
    sslConfiguration?: SslConfigurationProps;
}