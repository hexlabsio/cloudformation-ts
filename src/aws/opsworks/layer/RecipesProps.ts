import { Value } from '../../../kloudformation/Value';

export interface RecipesProps {
  configure?: Value<Value<string>[]>
  deploy?: Value<Value<string>[]>
  setup?: Value<Value<string>[]>
  shutdown?: Value<Value<string>[]>
  undeploy?: Value<Value<string>[]>
}