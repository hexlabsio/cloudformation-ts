import { EC2TagFilterProps } from './EC2TagFilterProps';

export function eC2TagSetListObjectProps(eC2TagSetListObjectPropsProps: EC2TagSetListObjectProps): EC2TagSetListObjectProps { return (eC2TagSetListObjectPropsProps) as unknown as EC2TagSetListObjectProps }

export interface EC2TagSetListObjectProps {
    ec2TagGroup?: EC2TagFilterProps[];
}