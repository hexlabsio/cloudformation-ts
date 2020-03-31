import { ContentProps } from './layerversion/ContentProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LayerVersionAttributes = {  }
export function layerVersion(layerVersionProps: LayerVersion): LayerVersion & { attributes: LayerVersionAttributes } { return ({ ...layerVersionProps, _logicalType: 'AWS::Lambda::LayerVersion', attributes: {  } }) }

export interface LayerVersion extends KloudResource {
    content: ContentProps;
    compatibleRuntimes?: Value<Value<string>[]>;
    licenseInfo?: Value<string>;
    description?: Value<string>;
    layerName?: Value<string>;
}