import { KernelCapabilitiesProps } from './KernelCapabilitiesProps';
import { DeviceProps } from './DeviceProps';
import { Value } from '../../../kloudformation/Value';
import { TmpfsProps } from './TmpfsProps';

export interface LinuxParametersProps {
  capabilities?: KernelCapabilitiesProps
  devices?: DeviceProps[]
  initProcessEnabled?: Value<boolean>
  maxSwap?: Value<number>
  sharedMemorySize?: Value<number>
  swappiness?: Value<number>
  tmpfs?: TmpfsProps[]
}