import { Value } from '../../../kloudformation/Value';

export interface JobCommandProps {
  pythonVersion?: Value<string>
  scriptLocation?: Value<string>
  name?: Value<string>
}