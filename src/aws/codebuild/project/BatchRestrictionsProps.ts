import { Value } from '../../../kloudformation/Value';

export interface BatchRestrictionsProps {
  computeTypesAllowed?: Value<Value<string>[]>
  maximumBuildsAllowed?: Value<number>
}