import { Value } from '../../../kloudformation/Value';

export interface ChefConfigurationProps {
  berkshelfVersion?: Value<string>
  manageBerkshelf?: Value<boolean>
}