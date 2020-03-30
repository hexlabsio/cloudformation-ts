import { Value } from '../../../kloudformation/Value';
import { ThrottleSettingsProps } from './ThrottleSettingsProps';

export function apiStageProps(apiStagePropsProps: ApiStageProps): ApiStageProps { return (apiStagePropsProps) as unknown as ApiStageProps }

export interface ApiStageProps {
    apiId?: Value<string>;
    stage?: Value<string>;
    throttle?: ThrottleSettingsProps[];
}