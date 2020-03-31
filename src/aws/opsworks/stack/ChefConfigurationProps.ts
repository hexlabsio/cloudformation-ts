import { Value } from '../../../kloudformation/Value';

export function chefConfigurationProps(chefConfigurationPropsProps: ChefConfigurationProps): ChefConfigurationProps { return (chefConfigurationPropsProps) }

export interface ChefConfigurationProps {
    berkshelfVersion?: Value<string>;
    manageBerkshelf?: Value<boolean>;
}