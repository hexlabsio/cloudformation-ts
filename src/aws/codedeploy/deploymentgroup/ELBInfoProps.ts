import { Value } from '../../../kloudformation/Value';

export function eLBInfoProps(eLBInfoPropsProps: ELBInfoProps): ELBInfoProps { return (eLBInfoPropsProps) as unknown as ELBInfoProps }

export interface ELBInfoProps {
    name?: Value<string>;
}