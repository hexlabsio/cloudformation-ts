import { Value } from '../../kloudformation/Value';
import { SourceProps } from './app/SourceProps';
import { DataSourceProps } from './app/DataSourceProps';
import { EnvironmentVariableProps } from '../amplify/app/EnvironmentVariableProps';
import { SslConfigurationProps } from './app/SslConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function app(appProps: App & { logicalName?: string }): App { return ({ ...appProps, _logicalType: 'AWS::OpsWorks::App' }) as unknown as App }

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