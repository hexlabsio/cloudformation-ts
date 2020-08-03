import { Value } from '../../kloudformation/Value';
import { DeploymentConfigurationProps } from './service/DeploymentConfigurationProps';
import { DeploymentControllerProps } from './service/DeploymentControllerProps';
import { LoadBalancerProps } from './service/LoadBalancerProps';
import { NetworkConfigurationProps } from './service/NetworkConfigurationProps';
import { PlacementConstraintProps } from './service/PlacementConstraintProps';
import { PlacementStrategyProps } from './service/PlacementStrategyProps';
import { ServiceRegistryProps } from './service/ServiceRegistryProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ServiceAttributes = { Name: Attribute<string> }
export function service(serviceProps: Service): Service & {attributes: ServiceAttributes} { return ({ ...serviceProps, _logicalType: 'AWS::ECS::Service', attributes: { Name: 'Name' } }) }
   
export interface Service extends KloudResource {
  cluster?: Value<string>
  deploymentConfiguration?: DeploymentConfigurationProps
  deploymentController?: DeploymentControllerProps
  desiredCount?: Value<number>
  enableECSManagedTags?: Value<boolean>
  healthCheckGracePeriodSeconds?: Value<number>
  launchType?: Value<string>
  loadBalancers?: LoadBalancerProps[]
  networkConfiguration?: NetworkConfigurationProps
  placementConstraints?: PlacementConstraintProps[]
  placementStrategies?: PlacementStrategyProps[]
  platformVersion?: Value<string>
  propagateTags?: Value<string>
  role?: Value<string>
  schedulingStrategy?: Value<string>
  serviceName?: Value<string>
  serviceRegistries?: ServiceRegistryProps[]
  tags?: Tag[]
  taskDefinition?: Value<string>
}