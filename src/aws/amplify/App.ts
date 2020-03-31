import { Value } from '../../kloudformation/Value';
import { AutoBranchCreationConfigProps } from './app/AutoBranchCreationConfigProps';
import { EnvironmentVariableProps } from './app/EnvironmentVariableProps';
import { CustomRuleProps } from './app/CustomRuleProps';
import { BasicAuthConfigProps } from './app/BasicAuthConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type AppAttributes = { AppId: Attribute<string>; Arn: Attribute<string>; DefaultDomain: Attribute<string>; AppName: Attribute<string> }
export function app(appProps: App): App & { attributes: AppAttributes } { return ({ ...appProps, _logicalType: 'AWS::Amplify::App', attributes: { AppId: 'AppId', Arn: 'Arn', DefaultDomain: 'DefaultDomain', AppName: 'AppName' } }) }

export interface App extends KloudResource {
    name: Value<string>;
    autoBranchCreationConfig?: AutoBranchCreationConfigProps;
    oauthToken?: Value<string>;
    repository?: Value<string>;
    description?: Value<string>;
    environmentVariables?: EnvironmentVariableProps[];
    accessToken?: Value<string>;
    buildSpec?: Value<string>;
    customRules?: CustomRuleProps[];
    basicAuthConfig?: BasicAuthConfigProps;
    tags?: Tag[];
    iAMServiceRole?: Value<string>;
}