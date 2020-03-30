import { ContentProps } from './layerversion/ContentProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function layerVersion(layerVersionProps: LayerVersion & { logicalName?: string }): LayerVersion { return ({ ...layerVersionProps, _logicalType: 'AWS::Lambda::LayerVersion' }) as unknown as LayerVersion }

export interface LayerVersion extends KloudResource {
    content: ContentProps;
    compatibleRuntimes?: Value<Value<string>[]>;
    licenseInfo?: Value<string>;
    description?: Value<string>;
    layerName?: Value<string>;
}