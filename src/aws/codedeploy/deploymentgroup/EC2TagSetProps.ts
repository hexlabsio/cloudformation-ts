import { EC2TagSetListObjectProps } from './EC2TagSetListObjectProps';

export function eC2TagSetProps(eC2TagSetPropsProps: EC2TagSetProps): EC2TagSetProps { return (eC2TagSetPropsProps) as unknown as EC2TagSetProps }

export interface EC2TagSetProps {
    ec2TagSetList?: EC2TagSetListObjectProps[];
}