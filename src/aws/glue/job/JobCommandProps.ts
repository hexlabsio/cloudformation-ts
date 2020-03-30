import { Value } from '../../../kloudformation/Value';

export function jobCommandProps(jobCommandPropsProps: JobCommandProps): JobCommandProps { return (jobCommandPropsProps) as unknown as JobCommandProps }

export interface JobCommandProps {
    pythonVersion?: Value<string>;
    scriptLocation?: Value<string>;
    name?: Value<string>;
}