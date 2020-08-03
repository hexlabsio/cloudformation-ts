import { Value } from '../../kloudformation/Value';
import { ContentProps } from './layerVersion/ContentProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function layerVersion(layerVersionProps: LayerVersion): LayerVersion { return ({ ...layerVersionProps, _logicalType: '' }) }
  
export interface LayerVersion extends KloudResource {
  compatibleRuntimes?: Value<Value<string>[]>
  licenseInfo?: Value<string>
  description?: Value<string>
  layerName?: Value<string>
  content: ContentProps
}