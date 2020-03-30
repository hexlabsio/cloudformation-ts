import { Value } from '../../../kloudformation/Value';

export function chefConfigurationProps(chefConfigurationPropsProps: ChefConfigurationProps): ChefConfigurationProps { return (chefConfigurationPropsProps) as unknown as ChefConfigurationProps }

export interface ChefConfigurationProps {
    berkshelfVersion?: Value<string>;
    manageBerkshelf?: Value<boolean>;
}