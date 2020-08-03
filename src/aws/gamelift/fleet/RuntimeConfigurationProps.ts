import { Value } from '../../../kloudformation/Value';
import { ServerProcessProps } from './ServerProcessProps';

export interface RuntimeConfigurationProps {
  gameSessionActivationTimeoutSeconds?: Value<number>
  maxConcurrentGameSessionActivations?: Value<number>
  serverProcesses?: ServerProcessProps[]
}