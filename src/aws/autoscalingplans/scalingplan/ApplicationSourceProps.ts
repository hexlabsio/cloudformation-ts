import { Value } from '../../../kloudformation/Value';
import { TagFilterProps } from './TagFilterProps';

export function applicationSourceProps(applicationSourcePropsProps: ApplicationSourceProps): ApplicationSourceProps { return (applicationSourcePropsProps) as unknown as ApplicationSourceProps }

export interface ApplicationSourceProps {
    cloudFormationStackARN?: Value<string>;
    tagFilters?: TagFilterProps[];
}