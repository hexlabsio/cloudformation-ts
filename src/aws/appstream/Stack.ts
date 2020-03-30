import { Value } from '../../kloudformation/Value';
import { StorageConnectorProps } from './stack/StorageConnectorProps';
import { UserSettingProps } from './stack/UserSettingProps';
import { ApplicationSettingsProps } from './stack/ApplicationSettingsProps';
import { Tag } from '../Tag';
import { AccessEndpointProps } from './stack/AccessEndpointProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function stack(stackProps: Stack & { logicalName?: string }): Stack { return ({ ...stackProps, _logicalType: 'AWS::AppStream::Stack' }) as unknown as Stack }

export interface Stack extends KloudResource {
    description?: Value<string>;
    storageConnectors?: StorageConnectorProps[];
    deleteStorageConnectors?: Value<boolean>;
    embedHostDomains?: Value<Value<string>[]>;
    userSettings?: UserSettingProps[];
    attributesToDelete?: Value<Value<string>[]>;
    redirectURL?: Value<string>;
    name?: Value<string>;
    feedbackURL?: Value<string>;
    applicationSettings?: ApplicationSettingsProps;
    displayName?: Value<string>;
    tags?: Tag[];
    accessEndpoints?: AccessEndpointProps[];
}