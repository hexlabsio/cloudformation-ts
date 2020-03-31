import { Value } from '../../../kloudformation/Value';

export function recipesProps(recipesPropsProps: RecipesProps): RecipesProps { return (recipesPropsProps) }

export interface RecipesProps {
    configure?: Value<Value<string>[]>;
    deploy?: Value<Value<string>[]>;
    setup?: Value<Value<string>[]>;
    shutdown?: Value<Value<string>[]>;
    undeploy?: Value<Value<string>[]>;
}