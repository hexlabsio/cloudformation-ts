import { Value } from '../../kloudformation/Value';
import { ComponentConfigurationProps } from './imageRecipe/ComponentConfigurationProps';
import { InstanceBlockDeviceMappingProps } from './imageRecipe/InstanceBlockDeviceMappingProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ImageRecipeAttributes = { Arn: Attribute<string> }
export function imageRecipe(imageRecipeProps: ImageRecipe): ImageRecipe & {attributes: ImageRecipeAttributes} { return ({ ...imageRecipeProps, _logicalType: 'AWS::ImageBuilder::ImageRecipe', attributes: { Arn: 'Arn' } }) }
   
export interface ImageRecipe extends KloudResource {
  name: Value<string>
  description?: Value<string>
  version: Value<string>
  components: ComponentConfigurationProps[]
  blockDeviceMappings?: InstanceBlockDeviceMappingProps[]
  parentImage: Value<string>
  workingDirectory?: Value<string>
  tags?: Value<Value<string>[]>
}