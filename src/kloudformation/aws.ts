import { routeTable as ec2RouteTable } from '../aws/ec2/RouteTable';
import { certificateAuthority as acmpcaCertificateAuthority } from '../aws/acmpca/CertificateAuthority';
import { portfolioShare as servicecatalogPortfolioShare } from '../aws/servicecatalog/PortfolioShare';
import { accelerator as globalacceleratorAccelerator } from '../aws/globalaccelerator/Accelerator';
import { analyzer as accessanalyzerAnalyzer } from '../aws/accessanalyzer/Analyzer';
import { iPSet as wafIPSet } from '../aws/waf/IPSet';
import { group as iamGroup } from '../aws/iam/Group';
import { backupPlan as backupBackupPlan } from '../aws/backup/BackupPlan';
import { rateBasedRule as wafregionalRateBasedRule } from '../aws/wafregional/RateBasedRule';
import { vPCPeeringConnection as ec2VPCPeeringConnection } from '../aws/ec2/VPCPeeringConnection';
import { domain as elasticsearchDomain } from '../aws/elasticsearch/Domain';
import { workspace as workspacesWorkspace } from '../aws/workspaces/Workspace';
import { instanceFleetConfig as emrInstanceFleetConfig } from '../aws/emr/InstanceFleetConfig';
import { sqlInjectionMatchSet as wafregionalSqlInjectionMatchSet } from '../aws/wafregional/SqlInjectionMatchSet';
import { route as apigatewayv2Route } from '../aws/apigatewayv2/Route';
import { workteam as sagemakerWorkteam } from '../aws/sagemaker/Workteam';
import { resourceShare as ramResourceShare } from '../aws/ram/ResourceShare';
import { stream as kinesisStream } from '../aws/kinesis/Stream';
import { launchConfiguration as autoscalingLaunchConfiguration } from '../aws/autoscaling/LaunchConfiguration';
import { queue as sqsQueue } from '../aws/sqs/Queue';
import { transitGateway as ec2TransitGateway } from '../aws/ec2/TransitGateway';
import { capacityReservation as ec2CapacityReservation } from '../aws/ec2/CapacityReservation';
import { resolver as appsyncResolver } from '../aws/appsync/Resolver';
import { vPCEndpointServicePermissions as ec2VPCEndpointServicePermissions } from '../aws/ec2/VPCEndpointServicePermissions';
import { recordSet as route53RecordSet } from '../aws/route53/RecordSet';
import { sizeConstraintSet as wafSizeConstraintSet } from '../aws/waf/SizeConstraintSet';
import { member as managedblockchainMember } from '../aws/managedblockchain/Member';
import { dashboard as cloudwatchDashboard } from '../aws/cloudwatch/Dashboard';
import { cluster as ecsCluster } from '../aws/ecs/Cluster';
import { policy as iamPolicy } from '../aws/iam/Policy';
import { link as networkmanagerLink } from '../aws/networkmanager/Link';
import { activity as stepfunctionsActivity } from '../aws/stepfunctions/Activity';
import { connection as codestarconnectionsConnection } from '../aws/codestarconnections/Connection';
import { applicationOutput as kinesisanalyticsApplicationOutput } from '../aws/kinesisanalytics/ApplicationOutput';
import { userPoolRiskConfigurationAttachment as cognitoUserPoolRiskConfigurationAttachment } from '../aws/cognito/UserPoolRiskConfigurationAttachment';
import { transitGatewayRouteTableAssociation as ec2TransitGatewayRouteTableAssociation } from '../aws/ec2/TransitGatewayRouteTableAssociation';
import { graphQLSchema as appsyncGraphQLSchema } from '../aws/appsync/GraphQLSchema';
import { volume as ec2Volume } from '../aws/ec2/Volume';
import { config as groundstationConfig } from '../aws/groundstation/Config';
import { serviceLinkedRole as iamServiceLinkedRole } from '../aws/iam/ServiceLinkedRole';
import { resourceUpdateConstraint as servicecatalogResourceUpdateConstraint } from '../aws/servicecatalog/ResourceUpdateConstraint';
import { connectorDefinitionVersion as greengrassConnectorDefinitionVersion } from '../aws/greengrass/ConnectorDefinitionVersion';
import { streamingDistribution as cloudfrontStreamingDistribution } from '../aws/cloudfront/StreamingDistribution';
import { graphQLApi as appsyncGraphQLApi } from '../aws/appsync/GraphQLApi';
import { userPoolIdentityProvider as cognitoUserPoolIdentityProvider } from '../aws/cognito/UserPoolIdentityProvider';
import { certificateAuthorityActivation as acmpcaCertificateAuthorityActivation } from '../aws/acmpca/CertificateAuthorityActivation';
import { filter as guarddutyFilter } from '../aws/guardduty/Filter';
import { resource as lakeformationResource } from '../aws/lakeformation/Resource';
import { accessPoint as s3AccessPoint } from '../aws/s3/AccessPoint';
import { subscription as snsSubscription } from '../aws/sns/Subscription';
import { mountTarget as efsMountTarget } from '../aws/efs/MountTarget';
import { dataCatalogEncryptionSettings as glueDataCatalogEncryptionSettings } from '../aws/glue/DataCatalogEncryptionSettings';
import { topic as snsTopic } from '../aws/sns/Topic';
import { tagOption as servicecatalogTagOption } from '../aws/servicecatalog/TagOption';
import { notebookInstanceLifecycleConfig as sagemakerNotebookInstanceLifecycleConfig } from '../aws/sagemaker/NotebookInstanceLifecycleConfig';
import { deployment as apigatewayDeployment } from '../aws/apigateway/Deployment';
import { userPoolGroup as cognitoUserPoolGroup } from '../aws/cognito/UserPoolGroup';
import { permissions as lakeformationPermissions } from '../aws/lakeformation/Permissions';
import { key as kmsKey } from '../aws/kms/Key';
import { cluster as redshiftCluster } from '../aws/redshift/Cluster';
import { app as opsworksApp } from '../aws/opsworks/App';
import { nodegroup as eksNodegroup } from '../aws/eks/Nodegroup';
import { eventSourceMapping as lambdaEventSourceMapping } from '../aws/lambda/EventSourceMapping';
import { route as appmeshRoute } from '../aws/appmesh/Route';
import { deployment as appconfigDeployment } from '../aws/appconfig/Deployment';
import { authorizer as apigatewayAuthorizer } from '../aws/apigateway/Authorizer';
import { localGatewayRoute as ec2LocalGatewayRoute } from '../aws/ec2/LocalGatewayRoute';
import { project as iot1clickProject } from '../aws/iot1click/Project';
import { eIP as ec2EIP } from '../aws/ec2/EIP';
import { queue as mediaconvertQueue } from '../aws/mediaconvert/Queue';
import { domainName as apigatewayDomainName } from '../aws/apigateway/DomainName';
import { stream as qldbStream } from '../aws/qldb/Stream';
import { geoMatchSet as wafregionalGeoMatchSet } from '../aws/wafregional/GeoMatchSet';
import { regexPatternSet as wafv2RegexPatternSet } from '../aws/wafv2/RegexPatternSet';
import { jobDefinition as batchJobDefinition } from '../aws/batch/JobDefinition';
import { fleet as gameliftFleet } from '../aws/gamelift/Fleet';
import { layerVersion as lambdaLayerVersion } from '../aws/lambda/LayerVersion';
import { customerGatewayAssociation as networkmanagerCustomerGatewayAssociation } from '../aws/networkmanager/CustomerGatewayAssociation';
import { documentationPart as apigatewayDocumentationPart } from '../aws/apigateway/DocumentationPart';
import { gatewayRoute as appmeshGatewayRoute } from '../aws/appmesh/GatewayRoute';
import { dBSubnetGroup as rdsDBSubnetGroup } from '../aws/rds/DBSubnetGroup';
import { dataLakeSettings as lakeformationDataLakeSettings } from '../aws/lakeformation/DataLakeSettings';
import { loadBalancer as elasticloadbalancingLoadBalancer } from '../aws/elasticloadbalancing/LoadBalancer';
import { stage as apigatewayv2Stage } from '../aws/apigatewayv2/Stage';
import { model as apigatewayModel } from '../aws/apigateway/Model';
import { regexPatternSet as wafregionalRegexPatternSet } from '../aws/wafregional/RegexPatternSet';
import { threatIntelSet as guarddutyThreatIntelSet } from '../aws/guardduty/ThreatIntelSet';
import { metricFilter as logsMetricFilter } from '../aws/logs/MetricFilter';
import { session as macieSession } from '../aws/macie/Session';
import { dataflowEndpointGroup as groundstationDataflowEndpointGroup } from '../aws/groundstation/DataflowEndpointGroup';
import { workflow as glueWorkflow } from '../aws/glue/Workflow';
import { remediationConfiguration as configRemediationConfiguration } from '../aws/config/RemediationConfiguration';
import { rotationSchedule as secretsmanagerRotationSchedule } from '../aws/secretsmanager/RotationSchedule';
import { flowLog as ec2FlowLog } from '../aws/ec2/FlowLog';
import { resourceDefinition as greengrassResourceDefinition } from '../aws/greengrass/ResourceDefinition';
import { identityPool as cognitoIdentityPool } from '../aws/cognito/IdentityPool';
import { loadBalancer as elasticloadbalancingv2LoadBalancer } from '../aws/elasticloadbalancingv2/LoadBalancer';
import { accessKey as iamAccessKey } from '../aws/iam/AccessKey';
import { matchmakingConfiguration as gameliftMatchmakingConfiguration } from '../aws/gamelift/MatchmakingConfiguration';
import { sourceCredential as codebuildSourceCredential } from '../aws/codebuild/SourceCredential';
import { configurationAssociation as amazonmqConfigurationAssociation } from '../aws/amazonmq/ConfigurationAssociation';
import { replicationSubnetGroup as dmsReplicationSubnetGroup } from '../aws/dms/ReplicationSubnetGroup';
import { capacityProvider as ecsCapacityProvider } from '../aws/ecs/CapacityProvider';
import { project as codebuildProject } from '../aws/codebuild/Project';
import { iPSet as wafv2IPSet } from '../aws/wafv2/IPSet';
import { budget as budgetsBudget } from '../aws/budgets/Budget';
import { topicPolicy as snsTopicPolicy } from '../aws/sns/TopicPolicy';
import { alias as lambdaAlias } from '../aws/lambda/Alias';
import { listener as elasticloadbalancingv2Listener } from '../aws/elasticloadbalancingv2/Listener';
import { securityGroupEgress as ec2SecurityGroupEgress } from '../aws/ec2/SecurityGroupEgress';
import { layerVersionPermission as lambdaLayerVersionPermission } from '../aws/lambda/LayerVersionPermission';
import { endpointConfig as sagemakerEndpointConfig } from '../aws/sagemaker/EndpointConfig';
import { deviceDefinition as greengrassDeviceDefinition } from '../aws/greengrass/DeviceDefinition';
import { stateMachine as stepfunctionsStateMachine } from '../aws/stepfunctions/StateMachine';
import { deploymentConfig as codedeployDeploymentConfig } from '../aws/codedeploy/DeploymentConfig';
import { eventSubscription as dmsEventSubscription } from '../aws/dms/EventSubscription';
import { transitGatewayAttachment as ec2TransitGatewayAttachment } from '../aws/ec2/TransitGatewayAttachment';
import { configurationAggregator as configConfigurationAggregator } from '../aws/config/ConfigurationAggregator';
import { distribution as cloudfrontDistribution } from '../aws/cloudfront/Distribution';
import { clusterParameterGroup as redshiftClusterParameterGroup } from '../aws/redshift/ClusterParameterGroup';
import { trail as cloudtrailTrail } from '../aws/cloudtrail/Trail';
import { instanceGroupConfig as emrInstanceGroupConfig } from '../aws/emr/InstanceGroupConfig';
import { dBClusterParameterGroup as neptuneDBClusterParameterGroup } from '../aws/neptune/DBClusterParameterGroup';
import { listenerRule as elasticloadbalancingv2ListenerRule } from '../aws/elasticloadbalancingv2/ListenerRule';
import { pipeline as codepipelinePipeline } from '../aws/codepipeline/Pipeline';
import { topicRule as iotTopicRule } from '../aws/iot/TopicRule';
import { dBInstance as docdbDBInstance } from '../aws/docdb/DBInstance';
import { elasticLoadBalancerAttachment as opsworksElasticLoadBalancerAttachment } from '../aws/opsworks/ElasticLoadBalancerAttachment';
import { webACLAssociation as wafregionalWebACLAssociation } from '../aws/wafregional/WebACLAssociation';
import { cloudFormationProduct as servicecatalogCloudFormationProduct } from '../aws/servicecatalog/CloudFormationProduct';
import { simulationApplication as robomakerSimulationApplication } from '../aws/robomaker/SimulationApplication';
import { channel as iotanalyticsChannel } from '../aws/iotanalytics/Channel';
import { app as amplifyApp } from '../aws/amplify/App';
import { discoverer as eventschemasDiscoverer } from '../aws/eventschemas/Discoverer';
import { anomalyDetector as cloudwatchAnomalyDetector } from '../aws/cloudwatch/AnomalyDetector';
import { environmentEC2 as cloud9EnvironmentEC2 } from '../aws/cloud9/EnvironmentEC2';
import { webACL as wafregionalWebACL } from '../aws/wafregional/WebACL';
import { cloudFrontOriginAccessIdentity as cloudfrontCloudFrontOriginAccessIdentity } from '../aws/cloudfront/CloudFrontOriginAccessIdentity';
import { endpoint as sagemakerEndpoint } from '../aws/sagemaker/Endpoint';
import { apiKey as appsyncApiKey } from '../aws/appsync/ApiKey';
import { hostedZone as route53HostedZone } from '../aws/route53/HostedZone';
import { subnet as ec2Subnet } from '../aws/ec2/Subnet';
import { application as codedeployApplication } from '../aws/codedeploy/Application';
import { portfolioProductAssociation as servicecatalogPortfolioProductAssociation } from '../aws/servicecatalog/PortfolioProductAssociation';
import { instance as servicediscoveryInstance } from '../aws/servicediscovery/Instance';
import { hostedConfigurationVersion as appconfigHostedConfigurationVersion } from '../aws/appconfig/HostedConfigurationVersion';
import { jobTemplate as mediaconvertJobTemplate } from '../aws/mediaconvert/JobTemplate';
import { instance as ec2Instance } from '../aws/ec2/Instance';
import { eventBusPolicy as eventsEventBusPolicy } from '../aws/events/EventBusPolicy';
import { cluster as eksCluster } from '../aws/eks/Cluster';
import { stack as cloudformationStack } from '../aws/cloudformation/Stack';
import { aggregationAuthorization as configAggregationAuthorization } from '../aws/config/AggregationAuthorization';
import { byteMatchSet as wafByteMatchSet } from '../aws/waf/ByteMatchSet';
import { dBCluster as docdbDBCluster } from '../aws/docdb/DBCluster';
import { compositeAlarm as cloudwatchCompositeAlarm } from '../aws/cloudwatch/CompositeAlarm';
import { patchBaseline as ssmPatchBaseline } from '../aws/ssm/PatchBaseline';
import { applicationCloudWatchLoggingOption as kinesisanalyticsv2ApplicationCloudWatchLoggingOption } from '../aws/kinesisanalyticsv2/ApplicationCloudWatchLoggingOption';
import { virtualGateway as appmeshVirtualGateway } from '../aws/appmesh/VirtualGateway';
import { member as guarddutyMember } from '../aws/guardduty/Member';
import { service as servicediscoveryService } from '../aws/servicediscovery/Service';
import { acceptedPortfolioShare as servicecatalogAcceptedPortfolioShare } from '../aws/servicecatalog/AcceptedPortfolioShare';
import { resourcePolicy as secretsmanagerResourcePolicy } from '../aws/secretsmanager/ResourcePolicy';
import { simulationApplicationVersion as robomakerSimulationApplicationVersion } from '../aws/robomaker/SimulationApplicationVersion';
import { scalingPolicy as autoscalingScalingPolicy } from '../aws/autoscaling/ScalingPolicy';
import { backupVault as backupBackupVault } from '../aws/backup/BackupVault';
import { step as emrStep } from '../aws/emr/Step';
import { configurationRecorder as configConfigurationRecorder } from '../aws/config/ConfigurationRecorder';
import { configurationProfile as appconfigConfigurationProfile } from '../aws/appconfig/ConfigurationProfile';
import { placement as iot1clickPlacement } from '../aws/iot1click/Placement';
import { maintenanceWindowTarget as ssmMaintenanceWindowTarget } from '../aws/ssm/MaintenanceWindowTarget';
import { dHCPOptions as ec2DHCPOptions } from '../aws/ec2/DHCPOptions';
import { usagePlan as apigatewayUsagePlan } from '../aws/apigateway/UsagePlan';
import { user as iamUser } from '../aws/iam/User';
import { instance as opsworksInstance } from '../aws/opsworks/Instance';
import { userPoolResourceServer as cognitoUserPoolResourceServer } from '../aws/cognito/UserPoolResourceServer';
import { insightRule as cloudwatchInsightRule } from '../aws/cloudwatch/InsightRule';
import { node as managedblockchainNode } from '../aws/managedblockchain/Node';
import { memberInvitation as detectiveMemberInvitation } from '../aws/detective/MemberInvitation';
import { datastore as iotanalyticsDatastore } from '../aws/iotanalytics/Datastore';
import { job as glueJob } from '../aws/glue/Job';
import { bucket as s3Bucket } from '../aws/s3/Bucket';
import { version as lambdaVersion } from '../aws/lambda/Version';
import { canary as syntheticsCanary } from '../aws/synthetics/Canary';
import { notebookInstance as sagemakerNotebookInstance } from '../aws/sagemaker/NotebookInstance';
import { webACLAssociation as wafv2WebACLAssociation } from '../aws/wafv2/WebACLAssociation';
import { basePathMapping as apigatewayBasePathMapping } from '../aws/apigateway/BasePathMapping';
import { userPool as cognitoUserPool } from '../aws/cognito/UserPool';
import { egressOnlyInternetGateway as ec2EgressOnlyInternetGateway } from '../aws/ec2/EgressOnlyInternetGateway';
import { lifecyclePolicy as dlmLifecyclePolicy } from '../aws/dlm/LifecyclePolicy';
import { api as apigatewayv2Api } from '../aws/apigatewayv2/Api';
import { iPSet as wafregionalIPSet } from '../aws/wafregional/IPSet';
import { networkInterfaceAttachment as ec2NetworkInterfaceAttachment } from '../aws/ec2/NetworkInterfaceAttachment';
import { dBInstance as rdsDBInstance } from '../aws/rds/DBInstance';
import { robotApplication as robomakerRobotApplication } from '../aws/robomaker/RobotApplication';
import { customerGateway as ec2CustomerGateway } from '../aws/ec2/CustomerGateway';
import { httpNamespace as servicediscoveryHttpNamespace } from '../aws/servicediscovery/HttpNamespace';
import { codeRepository as sagemakerCodeRepository } from '../aws/sagemaker/CodeRepository';
import { stage as apigatewayStage } from '../aws/apigateway/Stage';
import { domain as sdbDomain } from '../aws/sdb/Domain';
import { userPoolClient as cognitoUserPoolClient } from '../aws/cognito/UserPoolClient';
import { input as ioteventsInput } from '../aws/iotevents/Input';
import { repository as ecrRepository } from '../aws/ecr/Repository';
import { gatewayResponse as apigatewayGatewayResponse } from '../aws/apigateway/GatewayResponse';
import { database as glueDatabase } from '../aws/glue/Database';
import { routeResponse as apigatewayv2RouteResponse } from '../aws/apigatewayv2/RouteResponse';
import { clientCertificate as apigatewayClientCertificate } from '../aws/apigateway/ClientCertificate';
import { loggerDefinitionVersion as greengrassLoggerDefinitionVersion } from '../aws/greengrass/LoggerDefinitionVersion';
import { dBSecurityGroup as rdsDBSecurityGroup } from '../aws/rds/DBSecurityGroup';
import { alias as kmsAlias } from '../aws/kms/Alias';
import { clusterSubnetGroup as redshiftClusterSubnetGroup } from '../aws/redshift/ClusterSubnetGroup';
import { eIPAssociation as ec2EIPAssociation } from '../aws/ec2/EIPAssociation';
import { vPNGateway as ec2VPNGateway } from '../aws/ec2/VPNGateway';
import { detector as guarddutyDetector } from '../aws/guardduty/Detector';
import { privateDnsNamespace as servicediscoveryPrivateDnsNamespace } from '../aws/servicediscovery/PrivateDnsNamespace';
import { devEndpoint as glueDevEndpoint } from '../aws/glue/DevEndpoint';
import { reportGroup as codebuildReportGroup } from '../aws/codebuild/ReportGroup';
import { userProfile as opsworksUserProfile } from '../aws/opsworks/UserProfile';
import { dBSubnetGroup as neptuneDBSubnetGroup } from '../aws/neptune/DBSubnetGroup';
import { vPNConnection as ec2VPNConnection } from '../aws/ec2/VPNConnection';
import { application as kinesisanalyticsv2Application } from '../aws/kinesisanalyticsv2/Application';
import { listener as globalacceleratorListener } from '../aws/globalaccelerator/Listener';
import { subscriptionFilter as logsSubscriptionFilter } from '../aws/logs/SubscriptionFilter';
import { notificationChannel as fmsNotificationChannel } from '../aws/fms/NotificationChannel';
import { functionDefinitionVersion as greengrassFunctionDefinitionVersion } from '../aws/greengrass/FunctionDefinitionVersion';
import { registryPolicy as eventschemasRegistryPolicy } from '../aws/eventschemas/RegistryPolicy';
import { configuration as amazonmqConfiguration } from '../aws/amazonmq/Configuration';
import { clusterSecurityGroup as redshiftClusterSecurityGroup } from '../aws/redshift/ClusterSecurityGroup';
import { destination as logsDestination } from '../aws/logs/Destination';
import { transitGatewayRouteTable as ec2TransitGatewayRouteTable } from '../aws/ec2/TransitGatewayRouteTable';
import { xssMatchSet as wafXssMatchSet } from '../aws/waf/XssMatchSet';
import { healthCheck as route53HealthCheck } from '../aws/route53/HealthCheck';
import { device as networkmanagerDevice } from '../aws/networkmanager/Device';
import { dBClusterParameterGroup as rdsDBClusterParameterGroup } from '../aws/rds/DBClusterParameterGroup';
import { dBInstance as neptuneDBInstance } from '../aws/neptune/DBInstance';
import { vPCEndpointService as ec2VPCEndpointService } from '../aws/ec2/VPCEndpointService';
import { streamConsumer as kinesisStreamConsumer } from '../aws/kinesis/StreamConsumer';
import { master as guarddutyMaster } from '../aws/guardduty/Master';
import { bucketPolicy as s3BucketPolicy } from '../aws/s3/BucketPolicy';
import { customResource as cloudformationCustomResource } from '../aws/cloudformation/CustomResource';
import { stackSetConstraint as servicecatalogStackSetConstraint } from '../aws/servicecatalog/StackSetConstraint';
import { crawler as glueCrawler } from '../aws/glue/Crawler';
import { clientVpnRoute as ec2ClientVpnRoute } from '../aws/ec2/ClientVpnRoute';
import { documentationVersion as apigatewayDocumentationVersion } from '../aws/apigateway/DocumentationVersion';
import { maintenanceWindowTask as ssmMaintenanceWindowTask } from '../aws/ssm/MaintenanceWindowTask';
import { mLTransform as glueMLTransform } from '../aws/glue/MLTransform';
import { server as transferServer } from '../aws/transfer/Server';
import { usagePlanKey as apigatewayUsagePlanKey } from '../aws/apigateway/UsagePlanKey';
import { securityConfiguration as emrSecurityConfiguration } from '../aws/emr/SecurityConfiguration';
import { userPoolUserToGroupAttachment as cognitoUserPoolUserToGroupAttachment } from '../aws/cognito/UserPoolUserToGroupAttachment';
import { fleet as robomakerFleet } from '../aws/robomaker/Fleet';
import { classifier as glueClassifier } from '../aws/glue/Classifier';
import { configurationTemplate as elasticbeanstalkConfigurationTemplate } from '../aws/elasticbeanstalk/ConfigurationTemplate';
import { broker as amazonmqBroker } from '../aws/amazonmq/Broker';
import { dataSource as appsyncDataSource } from '../aws/appsync/DataSource';
import { primaryTaskSet as ecsPrimaryTaskSet } from '../aws/ecs/PrimaryTaskSet';
import { group as greengrassGroup } from '../aws/greengrass/Group';
import { identityPoolRoleAttachment as cognitoIdentityPoolRoleAttachment } from '../aws/cognito/IdentityPoolRoleAttachment';
import { rule as eventsRule } from '../aws/events/Rule';
import { component as imagebuilderComponent } from '../aws/imagebuilder/Component';
import { customActionType as codepipelineCustomActionType } from '../aws/codepipeline/CustomActionType';
import { virtualNode as appmeshVirtualNode } from '../aws/appmesh/VirtualNode';
import { virtualRouter as appmeshVirtualRouter } from '../aws/appmesh/VirtualRouter';
import { connectorDefinition as greengrassConnectorDefinition } from '../aws/greengrass/ConnectorDefinition';
import { placementGroup as ec2PlacementGroup } from '../aws/ec2/PlacementGroup';
import { requestValidator as apigatewayRequestValidator } from '../aws/apigateway/RequestValidator';
import { sizeConstraintSet as wafregionalSizeConstraintSet } from '../aws/wafregional/SizeConstraintSet';
import { virtualService as appmeshVirtualService } from '../aws/appmesh/VirtualService';
import { dBSecurityGroupIngress as rdsDBSecurityGroupIngress } from '../aws/rds/DBSecurityGroupIngress';
import { gatewayRouteTableAssociation as ec2GatewayRouteTableAssociation } from '../aws/ec2/GatewayRouteTableAssociation';
import { logGroup as logsLogGroup } from '../aws/logs/LogGroup';
import { webhook as codepipelineWebhook } from '../aws/codepipeline/Webhook';
import { scalingPlan as autoscalingplansScalingPlan } from '../aws/autoscalingplans/ScalingPlan';
import { infrastructureConfiguration as imagebuilderInfrastructureConfiguration } from '../aws/imagebuilder/InfrastructureConfiguration';
import { xssMatchSet as wafregionalXssMatchSet } from '../aws/wafregional/XssMatchSet';
import { networkAclEntry as ec2NetworkAclEntry } from '../aws/ec2/NetworkAclEntry';
import { internetGateway as ec2InternetGateway } from '../aws/ec2/InternetGateway';
import { listenerCertificate as elasticloadbalancingv2ListenerCertificate } from '../aws/elasticloadbalancingv2/ListenerCertificate';
import { role as iamRole } from '../aws/iam/Role';
import { dBParameterGroup as neptuneDBParameterGroup } from '../aws/neptune/DBParameterGroup';
import { findingsFilter as macieFindingsFilter } from '../aws/macie/FindingsFilter';
import { launchTemplate as ec2LaunchTemplate } from '../aws/ec2/LaunchTemplate';
import { volume as opsworksVolume } from '../aws/opsworks/Volume';
import { tagOptionAssociation as servicecatalogTagOptionAssociation } from '../aws/servicecatalog/TagOptionAssociation';
import { certificate as acmpcaCertificate } from '../aws/acmpca/Certificate';
import { launchTemplateConstraint as servicecatalogLaunchTemplateConstraint } from '../aws/servicecatalog/LaunchTemplateConstraint';
import { cluster as emrCluster } from '../aws/emr/Cluster';
import { spotFleet as ec2SpotFleet } from '../aws/ec2/SpotFleet';
import { alias as gameliftAlias } from '../aws/gamelift/Alias';
import { vPNConnectionRoute as ec2VPNConnectionRoute } from '../aws/ec2/VPNConnectionRoute';
import { rule as wafRule } from '../aws/waf/Rule';
import { microsoftAD as directoryserviceMicrosoftAD } from '../aws/directoryservice/MicrosoftAD';
import { domainName as apigatewayv2DomainName } from '../aws/apigatewayv2/DomainName';
import { functionDefinition as greengrassFunctionDefinition } from '../aws/greengrass/FunctionDefinition';
import { document as ssmDocument } from '../aws/ssm/Document';
import { networkInterfacePermission as ec2NetworkInterfacePermission } from '../aws/ec2/NetworkInterfacePermission';
import { model as sagemakerModel } from '../aws/sagemaker/Model';
import { deliveryChannel as configDeliveryChannel } from '../aws/config/DeliveryChannel';
import { build as gameliftBuild } from '../aws/gamelift/Build';
import { trafficMirrorFilter as ec2TrafficMirrorFilter } from '../aws/ec2/TrafficMirrorFilter';
import { organizationConfigRule as configOrganizationConfigRule } from '../aws/config/OrganizationConfigRule';
import { ledger as qldbLedger } from '../aws/qldb/Ledger';
import { integration as apigatewayv2Integration } from '../aws/apigatewayv2/Integration';
import { alarm as cloudwatchAlarm } from '../aws/cloudwatch/Alarm';
import { backupSelection as backupBackupSelection } from '../aws/backup/BackupSelection';
import { certificate as certificatemanagerCertificate } from '../aws/certificatemanager/Certificate';
import { subscriptionDefinitionVersion as greengrassSubscriptionDefinitionVersion } from '../aws/greengrass/SubscriptionDefinitionVersion';
import { coreDefinitionVersion as greengrassCoreDefinitionVersion } from '../aws/greengrass/CoreDefinitionVersion';
import { preset as mediaconvertPreset } from '../aws/mediaconvert/Preset';
import { notificationRule as codestarnotificationsNotificationRule } from '../aws/codestarnotifications/NotificationRule';
import { resourceGroup as inspectorResourceGroup } from '../aws/inspector/ResourceGroup';
import { dataset as iotanalyticsDataset } from '../aws/iotanalytics/Dataset';
import { provisioningTemplate as iotProvisioningTemplate } from '../aws/iot/ProvisioningTemplate';
import { dBSubnetGroup as docdbDBSubnetGroup } from '../aws/docdb/DBSubnetGroup';
import { portfolioPrincipalAssociation as servicecatalogPortfolioPrincipalAssociation } from '../aws/servicecatalog/PortfolioPrincipalAssociation';
import { matchmakingRuleSet as gameliftMatchmakingRuleSet } from '../aws/gamelift/MatchmakingRuleSet';
import { imagePipeline as imagebuilderImagePipeline } from '../aws/imagebuilder/ImagePipeline';
import { securityGroupIngress as ec2SecurityGroupIngress } from '../aws/ec2/SecurityGroupIngress';
import { dBCluster as rdsDBCluster } from '../aws/rds/DBCluster';
import { skill as askSkill } from '../alexa/ask/Skill';
import { clientVpnEndpoint as ec2ClientVpnEndpoint } from '../aws/ec2/ClientVpnEndpoint';
import { service as ecsService } from '../aws/ecs/Service';
import { userToGroupAddition as iamUserToGroupAddition } from '../aws/iam/UserToGroupAddition';
import { missionProfile as groundstationMissionProfile } from '../aws/groundstation/MissionProfile';
import { server as opsworkscmServer } from '../aws/opsworkscm/Server';
import { jobQueue as batchJobQueue } from '../aws/batch/JobQueue';
import { thing as iotThing } from '../aws/iot/Thing';
import { layer as opsworksLayer } from '../aws/opsworks/Layer';
import { certificate as dmsCertificate } from '../aws/dms/Certificate';
import { apiKey as apigatewayApiKey } from '../aws/apigateway/ApiKey';
import { subnetRouteTableAssociation as ec2SubnetRouteTableAssociation } from '../aws/ec2/SubnetRouteTableAssociation';
import { table as glueTable } from '../aws/glue/Table';
import { securityGroup as elasticacheSecurityGroup } from '../aws/elasticache/SecurityGroup';
import { instanceProfile as iamInstanceProfile } from '../aws/iam/InstanceProfile';
import { policy as iotPolicy } from '../aws/iot/Policy';
import { computeEnvironment as batchComputeEnvironment } from '../aws/batch/ComputeEnvironment';
import { deploymentGroup as codedeployDeploymentGroup } from '../aws/codedeploy/DeploymentGroup';
import { route as ec2Route } from '../aws/ec2/Route';
import { localGatewayRouteTableVPCAssociation as ec2LocalGatewayRouteTableVPCAssociation } from '../aws/ec2/LocalGatewayRouteTableVPCAssociation';
import { gameSessionQueue as gameliftGameSessionQueue } from '../aws/gamelift/GameSessionQueue';
import { resource as apigatewayResource } from '../aws/apigateway/Resource';
import { endpointGroup as globalacceleratorEndpointGroup } from '../aws/globalaccelerator/EndpointGroup';
import { hub as securityhubHub } from '../aws/securityhub/Hub';
import { device as iot1clickDevice } from '../aws/iot1click/Device';
import { connection as glueConnection } from '../aws/glue/Connection';
import { customDataIdentifier as macieCustomDataIdentifier } from '../aws/macie/CustomDataIdentifier';
import { taskSet as ecsTaskSet } from '../aws/ecs/TaskSet';
import { ruleGroup as wafv2RuleGroup } from '../aws/wafv2/RuleGroup';
import { application as elasticbeanstalkApplication } from '../aws/elasticbeanstalk/Application';
import { webACL as wafv2WebACL } from '../aws/wafv2/WebACL';
import { subnetGroup as elasticacheSubnetGroup } from '../aws/elasticache/SubnetGroup';
import { transitGatewayRouteTablePropagation as ec2TransitGatewayRouteTablePropagation } from '../aws/ec2/TransitGatewayRouteTablePropagation';
import { byteMatchSet as wafregionalByteMatchSet } from '../aws/wafregional/ByteMatchSet';
import { graph as detectiveGraph } from '../aws/detective/Graph';
import { networkInterface as ec2NetworkInterface } from '../aws/ec2/NetworkInterface';
import { deployment as apigatewayv2Deployment } from '../aws/apigatewayv2/Deployment';
import { environment as appconfigEnvironment } from '../aws/appconfig/Environment';
import { fileSystem as fsxFileSystem } from '../aws/fsx/FileSystem';
import { stack as opsworksStack } from '../aws/opsworks/Stack';
import { pipeline as datapipelinePipeline } from '../aws/datapipeline/Pipeline';
import { resolverRule as route53resolverResolverRule } from '../aws/route53resolver/ResolverRule';
import { linkAssociation as networkmanagerLinkAssociation } from '../aws/networkmanager/LinkAssociation';
import { clientVpnAuthorizationRule as ec2ClientVpnAuthorizationRule } from '../aws/ec2/ClientVpnAuthorizationRule';
import { subnetNetworkAclAssociation as ec2SubnetNetworkAclAssociation } from '../aws/ec2/SubnetNetworkAclAssociation';
import { script as gameliftScript } from '../aws/gamelift/Script';
import { account as apigatewayAccount } from '../aws/apigateway/Account';
import { trafficMirrorSession as ec2TrafficMirrorSession } from '../aws/ec2/TrafficMirrorSession';
import { branch as amplifyBranch } from '../aws/amplify/Branch';
import { loggerDefinition as greengrassLoggerDefinition } from '../aws/greengrass/LoggerDefinition';
import { launchRoleConstraint as servicecatalogLaunchRoleConstraint } from '../aws/servicecatalog/LaunchRoleConstraint';
import { cloudFormationProvisionedProduct as servicecatalogCloudFormationProvisionedProduct } from '../aws/servicecatalog/CloudFormationProvisionedProduct';
import { subnetCidrBlock as ec2SubnetCidrBlock } from '../aws/ec2/SubnetCidrBlock';
import { lifecycleHook as autoscalingLifecycleHook } from '../aws/autoscaling/LifecycleHook';
import { clusterSecurityGroupIngress as redshiftClusterSecurityGroupIngress } from '../aws/redshift/ClusterSecurityGroupIngress';
import { optionGroup as rdsOptionGroup } from '../aws/rds/OptionGroup';
import { natGateway as ec2NatGateway } from '../aws/ec2/NatGateway';
import { securityGroupIngress as elasticacheSecurityGroupIngress } from '../aws/elasticache/SecurityGroupIngress';
import { replicationGroup as elasticacheReplicationGroup } from '../aws/elasticache/ReplicationGroup';
import { userPoolUser as cognitoUserPoolUser } from '../aws/cognito/UserPoolUser';
import { model as apigatewayv2Model } from '../aws/apigatewayv2/Model';
import { functionConfiguration as appsyncFunctionConfiguration } from '../aws/appsync/FunctionConfiguration';
import { waitCondition as cloudformationWaitCondition } from '../aws/cloudformation/WaitCondition';
import { securityGroup as ec2SecurityGroup } from '../aws/ec2/SecurityGroup';
import { rule as wafregionalRule } from '../aws/wafregional/Rule';
import { trafficMirrorFilterRule as ec2TrafficMirrorFilterRule } from '../aws/ec2/TrafficMirrorFilterRule';
import { deploymentStrategy as appconfigDeploymentStrategy } from '../aws/appconfig/DeploymentStrategy';
import { restApi as apigatewayRestApi } from '../aws/apigateway/RestApi';
import { eventBus as eventsEventBus } from '../aws/events/EventBus';
import { eventInvokeConfig as lambdaEventInvokeConfig } from '../aws/lambda/EventInvokeConfig';
import { prefixList as ec2PrefixList } from '../aws/ec2/PrefixList';
import { vPC as ec2VPC } from '../aws/ec2/VPC';
import { profilingGroup as codeguruprofilerProfilingGroup } from '../aws/codeguruprofiler/ProfilingGroup';
import { dataCatalog as athenaDataCatalog } from '../aws/athena/DataCatalog';
import { applicationOutput as kinesisanalyticsv2ApplicationOutput } from '../aws/kinesisanalyticsv2/ApplicationOutput';
import { organizationConformancePack as configOrganizationConformancePack } from '../aws/config/OrganizationConformancePack';
import { parameterGroup as elasticacheParameterGroup } from '../aws/elasticache/ParameterGroup';
import { globalNetwork as networkmanagerGlobalNetwork } from '../aws/networkmanager/GlobalNetwork';
import { queuePolicy as sqsQueuePolicy } from '../aws/sqs/QueuePolicy';
import { transitGatewayRegistration as networkmanagerTransitGatewayRegistration } from '../aws/networkmanager/TransitGatewayRegistration';
import { fileSystem as efsFileSystem } from '../aws/efs/FileSystem';
import { scalingPolicy as applicationautoscalingScalingPolicy } from '../aws/applicationautoscaling/ScalingPolicy';
import { sqlInjectionMatchSet as wafSqlInjectionMatchSet } from '../aws/waf/SqlInjectionMatchSet';
import { repository as codecommitRepository } from '../aws/codecommit/Repository';
import { secret as secretsmanagerSecret } from '../aws/secretsmanager/Secret';
import { portfolio as servicecatalogPortfolio } from '../aws/servicecatalog/Portfolio';
import { coreDefinition as greengrassCoreDefinition } from '../aws/greengrass/CoreDefinition';
import { userPoolUICustomizationAttachment as cognitoUserPoolUICustomizationAttachment } from '../aws/cognito/UserPoolUICustomizationAttachment';
import { dBParameterGroup as rdsDBParameterGroup } from '../aws/rds/DBParameterGroup';
import { logStream as logsLogStream } from '../aws/logs/LogStream';
import { workGroup as athenaWorkGroup } from '../aws/athena/WorkGroup';
import { robotApplicationVersion as robomakerRobotApplicationVersion } from '../aws/robomaker/RobotApplicationVersion';
import { eventSubscription as rdsEventSubscription } from '../aws/rds/EventSubscription';
import { environment as elasticbeanstalkEnvironment } from '../aws/elasticbeanstalk/Environment';
import { group as resourcegroupsGroup } from '../aws/resourcegroups/Group';
import { pipeline as iotanalyticsPipeline } from '../aws/iotanalytics/Pipeline';
import { lambdaFunction } from '../aws/lambda/Function';
import { transitGatewayRoute as ec2TransitGatewayRoute } from '../aws/ec2/TransitGatewayRoute';
import { policy as fmsPolicy } from '../aws/fms/Policy';
import { user as transferUser } from '../aws/transfer/User';
import { schema as eventschemasSchema } from '../aws/eventschemas/Schema';
import { networkAcl as ec2NetworkAcl } from '../aws/ec2/NetworkAcl';
import { distributionConfiguration as imagebuilderDistributionConfiguration } from '../aws/imagebuilder/DistributionConfiguration';
import { dBProxy as rdsDBProxy } from '../aws/rds/DBProxy';
import { configRule as configConfigRule } from '../aws/config/ConfigRule';
import { partition as gluePartition } from '../aws/glue/Partition';
import { vPNGatewayRoutePropagation as ec2VPNGatewayRoutePropagation } from '../aws/ec2/VPNGatewayRoutePropagation';
import { clientVpnTargetNetworkAssociation as ec2ClientVpnTargetNetworkAssociation } from '../aws/ec2/ClientVpnTargetNetworkAssociation';
import { webACL as wafWebACL } from '../aws/waf/WebACL';
import { apiCache as appsyncApiCache } from '../aws/appsync/ApiCache';
import { dBCluster as neptuneDBCluster } from '../aws/neptune/DBCluster';
import { authorizer as apigatewayv2Authorizer } from '../aws/apigatewayv2/Authorizer';
import { waitConditionHandle as cloudformationWaitConditionHandle } from '../aws/cloudformation/WaitConditionHandle';
import { maintenanceWindow as ssmMaintenanceWindow } from '../aws/ssm/MaintenanceWindow';
import { macro as cloudformationMacro } from '../aws/cloudformation/Macro';
import { recordSetGroup as route53RecordSetGroup } from '../aws/route53/RecordSetGroup';
import { deliveryStream as kinesisfirehoseDeliveryStream } from '../aws/kinesisfirehose/DeliveryStream';
import { managedPolicy as iamManagedPolicy } from '../aws/iam/ManagedPolicy';
import { policyPrincipalAttachment as iotPolicyPrincipalAttachment } from '../aws/iot/PolicyPrincipalAttachment';
import { deviceDefinitionVersion as greengrassDeviceDefinitionVersion } from '../aws/greengrass/DeviceDefinitionVersion';
import { scalableTarget as applicationautoscalingScalableTarget } from '../aws/applicationautoscaling/ScalableTarget';
import { conformancePack as configConformancePack } from '../aws/config/ConformancePack';
import { domain as amplifyDomain } from '../aws/amplify/Domain';
import { resolverRuleAssociation as route53resolverResolverRuleAssociation } from '../aws/route53resolver/ResolverRuleAssociation';
import { subscriptionDefinition as greengrassSubscriptionDefinition } from '../aws/greengrass/SubscriptionDefinition';
import { vpcLink as apigatewayVpcLink } from '../aws/apigateway/VpcLink';
import { detectorModel as ioteventsDetectorModel } from '../aws/iotevents/DetectorModel';
import { applicationReferenceDataSource as kinesisanalyticsv2ApplicationReferenceDataSource } from '../aws/kinesisanalyticsv2/ApplicationReferenceDataSource';
import { method as apigatewayMethod } from '../aws/apigateway/Method';
import { endpoint as dmsEndpoint } from '../aws/dms/Endpoint';
import { launchNotificationConstraint as servicecatalogLaunchNotificationConstraint } from '../aws/servicecatalog/LaunchNotificationConstraint';
import { resourceDefinitionVersion as greengrassResourceDefinitionVersion } from '../aws/greengrass/ResourceDefinitionVersion';
import { simpleAD as directoryserviceSimpleAD } from '../aws/directoryservice/SimpleAD';
import { secretTargetAttachment as secretsmanagerSecretTargetAttachment } from '../aws/secretsmanager/SecretTargetAttachment';
import { volumeAttachment as ec2VolumeAttachment } from '../aws/ec2/VolumeAttachment';
import { host as ec2Host } from '../aws/ec2/Host';
import { taskDefinition as ecsTaskDefinition } from '../aws/ecs/TaskDefinition';
import { integrationResponse as apigatewayv2IntegrationResponse } from '../aws/apigatewayv2/IntegrationResponse';
import { site as networkmanagerSite } from '../aws/networkmanager/Site';
import { thingPrincipalAttachment as iotThingPrincipalAttachment } from '../aws/iot/ThingPrincipalAttachment';
import { cacheCluster as elasticacheCacheCluster } from '../aws/elasticache/CacheCluster';
import { userPoolDomain as cognitoUserPoolDomain } from '../aws/cognito/UserPoolDomain';
import { dBClusterParameterGroup as docdbDBClusterParameterGroup } from '../aws/docdb/DBClusterParameterGroup';
import { applicationVersion as elasticbeanstalkApplicationVersion } from '../aws/elasticbeanstalk/ApplicationVersion';
import { cluster as mskCluster } from '../aws/msk/Cluster';
import { vPCEndpoint as ec2VPCEndpoint } from '../aws/ec2/VPCEndpoint';
import { targetGroup as elasticloadbalancingv2TargetGroup } from '../aws/elasticloadbalancingv2/TargetGroup';
import { vPCGatewayAttachment as ec2VPCGatewayAttachment } from '../aws/ec2/VPCGatewayAttachment';
import { robot as robomakerRobot } from '../aws/robomaker/Robot';
import { trigger as glueTrigger } from '../aws/glue/Trigger';
import { accessPoint as efsAccessPoint } from '../aws/efs/AccessPoint';
import { vPCCidrBlock as ec2VPCCidrBlock } from '../aws/ec2/VPCCidrBlock';
import { parameter as ssmParameter } from '../aws/ssm/Parameter';
import { assessmentTemplate as inspectorAssessmentTemplate } from '../aws/inspector/AssessmentTemplate';
import { mesh as appmeshMesh } from '../aws/appmesh/Mesh';
import { dBProxyTargetGroup as rdsDBProxyTargetGroup } from '../aws/rds/DBProxyTargetGroup';
import { applicationReferenceDataSource as kinesisanalyticsApplicationReferenceDataSource } from '../aws/kinesisanalytics/ApplicationReferenceDataSource';
import { resourceDataSync as ssmResourceDataSync } from '../aws/ssm/ResourceDataSync';
import { application as appconfigApplication } from '../aws/appconfig/Application';
import { application as kinesisanalyticsApplication } from '../aws/kinesisanalytics/Application';
import { table as dynamodbTable } from '../aws/dynamodb/Table';
import { eC2Fleet as ec2EC2Fleet } from '../aws/ec2/EC2Fleet';
import { table as cassandraTable } from '../aws/cassandra/Table';
import { groupVersion as greengrassGroupVersion } from '../aws/greengrass/GroupVersion';
import { permission as lambdaPermission } from '../aws/lambda/Permission';
import { certificate as iotCertificate } from '../aws/iot/Certificate';
import { iPSet as guarddutyIPSet } from '../aws/guardduty/IPSet';
import { association as ssmAssociation } from '../aws/ssm/Association';
import { imageRecipe as imagebuilderImageRecipe } from '../aws/imagebuilder/ImageRecipe';
import { gitHubRepository as codestarGitHubRepository } from '../aws/codestar/GitHubRepository';
import { namedQuery as athenaNamedQuery } from '../aws/athena/NamedQuery';
import { slackChannelConfiguration as chatbotSlackChannelConfiguration } from '../aws/chatbot/SlackChannelConfiguration';
import { assessmentTarget as inspectorAssessmentTarget } from '../aws/inspector/AssessmentTarget';
import { registry as eventschemasRegistry } from '../aws/eventschemas/Registry';
import { autoScalingGroup as autoscalingAutoScalingGroup } from '../aws/autoscaling/AutoScalingGroup';
import { resolverEndpoint as route53resolverResolverEndpoint } from '../aws/route53resolver/ResolverEndpoint';
import { image as imagebuilderImage } from '../aws/imagebuilder/Image';
import { keyspace as cassandraKeyspace } from '../aws/cassandra/Keyspace';
import { vPCDHCPOptionsAssociation as ec2VPCDHCPOptionsAssociation } from '../aws/ec2/VPCDHCPOptionsAssociation';
import { replicationTask as dmsReplicationTask } from '../aws/dms/ReplicationTask';
import { publicDnsNamespace as servicediscoveryPublicDnsNamespace } from '../aws/servicediscovery/PublicDnsNamespace';
import { trafficMirrorTarget as ec2TrafficMirrorTarget } from '../aws/ec2/TrafficMirrorTarget';
import { replicationInstance as dmsReplicationInstance } from '../aws/dms/ReplicationInstance';
import { securityConfiguration as glueSecurityConfiguration } from '../aws/glue/SecurityConfiguration';
import { apiMapping as apigatewayv2ApiMapping } from '../aws/apigatewayv2/ApiMapping';
import { scheduledAction as autoscalingScheduledAction } from '../aws/autoscaling/ScheduledAction';

export type AWS = typeof aws;

export const aws = {
    ec2RouteTable,
    acmpcaCertificateAuthority,
    servicecatalogPortfolioShare,
    globalacceleratorAccelerator,
    accessanalyzerAnalyzer,
    wafIPSet,
    iamGroup,
    backupBackupPlan,
    wafregionalRateBasedRule,
    ec2VPCPeeringConnection,
    elasticsearchDomain,
    workspacesWorkspace,
    emrInstanceFleetConfig,
    wafregionalSqlInjectionMatchSet,
    apigatewayv2Route,
    sagemakerWorkteam,
    ramResourceShare,
    kinesisStream,
    autoscalingLaunchConfiguration,
    sqsQueue,
    ec2TransitGateway,
    ec2CapacityReservation,
    appsyncResolver,
    ec2VPCEndpointServicePermissions,
    route53RecordSet,
    wafSizeConstraintSet,
    managedblockchainMember,
    cloudwatchDashboard,
    ecsCluster,
    iamPolicy,
    networkmanagerLink,
    stepfunctionsActivity,
    codestarconnectionsConnection,
    kinesisanalyticsApplicationOutput,
    cognitoUserPoolRiskConfigurationAttachment,
    ec2TransitGatewayRouteTableAssociation,
    appsyncGraphQLSchema,
    ec2Volume,
    groundstationConfig,
    iamServiceLinkedRole,
    servicecatalogResourceUpdateConstraint,
    greengrassConnectorDefinitionVersion,
    cloudfrontStreamingDistribution,
    appsyncGraphQLApi,
    cognitoUserPoolIdentityProvider,
    acmpcaCertificateAuthorityActivation,
    guarddutyFilter,
    lakeformationResource,
    s3AccessPoint,
    snsSubscription,
    efsMountTarget,
    glueDataCatalogEncryptionSettings,
    snsTopic,
    servicecatalogTagOption,
    sagemakerNotebookInstanceLifecycleConfig,
    apigatewayDeployment,
    cognitoUserPoolGroup,
    lakeformationPermissions,
    kmsKey,
    redshiftCluster,
    opsworksApp,
    eksNodegroup,
    lambdaEventSourceMapping,
    appmeshRoute,
    appconfigDeployment,
    apigatewayAuthorizer,
    ec2LocalGatewayRoute,
    iot1clickProject,
    ec2EIP,
    mediaconvertQueue,
    apigatewayDomainName,
    qldbStream,
    wafregionalGeoMatchSet,
    wafv2RegexPatternSet,
    batchJobDefinition,
    gameliftFleet,
    lambdaLayerVersion,
    networkmanagerCustomerGatewayAssociation,
    apigatewayDocumentationPart,
    appmeshGatewayRoute,
    rdsDBSubnetGroup,
    lakeformationDataLakeSettings,
    elasticloadbalancingLoadBalancer,
    apigatewayv2Stage,
    apigatewayModel,
    wafregionalRegexPatternSet,
    guarddutyThreatIntelSet,
    logsMetricFilter,
    macieSession,
    groundstationDataflowEndpointGroup,
    glueWorkflow,
    configRemediationConfiguration,
    secretsmanagerRotationSchedule,
    ec2FlowLog,
    greengrassResourceDefinition,
    cognitoIdentityPool,
    elasticloadbalancingv2LoadBalancer,
    iamAccessKey,
    gameliftMatchmakingConfiguration,
    codebuildSourceCredential,
    amazonmqConfigurationAssociation,
    dmsReplicationSubnetGroup,
    ecsCapacityProvider,
    codebuildProject,
    wafv2IPSet,
    budgetsBudget,
    snsTopicPolicy,
    lambdaAlias,
    elasticloadbalancingv2Listener,
    ec2SecurityGroupEgress,
    lambdaLayerVersionPermission,
    sagemakerEndpointConfig,
    greengrassDeviceDefinition,
    stepfunctionsStateMachine,
    codedeployDeploymentConfig,
    dmsEventSubscription,
    ec2TransitGatewayAttachment,
    configConfigurationAggregator,
    cloudfrontDistribution,
    redshiftClusterParameterGroup,
    cloudtrailTrail,
    emrInstanceGroupConfig,
    neptuneDBClusterParameterGroup,
    elasticloadbalancingv2ListenerRule,
    codepipelinePipeline,
    iotTopicRule,
    docdbDBInstance,
    opsworksElasticLoadBalancerAttachment,
    wafregionalWebACLAssociation,
    servicecatalogCloudFormationProduct,
    robomakerSimulationApplication,
    iotanalyticsChannel,
    amplifyApp,
    eventschemasDiscoverer,
    cloudwatchAnomalyDetector,
    cloud9EnvironmentEC2,
    wafregionalWebACL,
    cloudfrontCloudFrontOriginAccessIdentity,
    sagemakerEndpoint,
    appsyncApiKey,
    route53HostedZone,
    ec2Subnet,
    codedeployApplication,
    servicecatalogPortfolioProductAssociation,
    servicediscoveryInstance,
    appconfigHostedConfigurationVersion,
    mediaconvertJobTemplate,
    ec2Instance,
    eventsEventBusPolicy,
    eksCluster,
    cloudformationStack,
    configAggregationAuthorization,
    wafByteMatchSet,
    docdbDBCluster,
    cloudwatchCompositeAlarm,
    ssmPatchBaseline,
    kinesisanalyticsv2ApplicationCloudWatchLoggingOption,
    appmeshVirtualGateway,
    guarddutyMember,
    servicediscoveryService,
    servicecatalogAcceptedPortfolioShare,
    secretsmanagerResourcePolicy,
    robomakerSimulationApplicationVersion,
    autoscalingScalingPolicy,
    backupBackupVault,
    emrStep,
    configConfigurationRecorder,
    appconfigConfigurationProfile,
    iot1clickPlacement,
    ssmMaintenanceWindowTarget,
    ec2DHCPOptions,
    apigatewayUsagePlan,
    iamUser,
    opsworksInstance,
    cognitoUserPoolResourceServer,
    cloudwatchInsightRule,
    managedblockchainNode,
    detectiveMemberInvitation,
    iotanalyticsDatastore,
    glueJob,
    s3Bucket,
    lambdaVersion,
    syntheticsCanary,
    sagemakerNotebookInstance,
    wafv2WebACLAssociation,
    apigatewayBasePathMapping,
    cognitoUserPool,
    ec2EgressOnlyInternetGateway,
    dlmLifecyclePolicy,
    apigatewayv2Api,
    wafregionalIPSet,
    ec2NetworkInterfaceAttachment,
    rdsDBInstance,
    robomakerRobotApplication,
    ec2CustomerGateway,
    servicediscoveryHttpNamespace,
    sagemakerCodeRepository,
    apigatewayStage,
    sdbDomain,
    cognitoUserPoolClient,
    ioteventsInput,
    ecrRepository,
    apigatewayGatewayResponse,
    glueDatabase,
    apigatewayv2RouteResponse,
    apigatewayClientCertificate,
    greengrassLoggerDefinitionVersion,
    rdsDBSecurityGroup,
    kmsAlias,
    redshiftClusterSubnetGroup,
    ec2EIPAssociation,
    ec2VPNGateway,
    guarddutyDetector,
    servicediscoveryPrivateDnsNamespace,
    glueDevEndpoint,
    codebuildReportGroup,
    opsworksUserProfile,
    neptuneDBSubnetGroup,
    ec2VPNConnection,
    kinesisanalyticsv2Application,
    globalacceleratorListener,
    logsSubscriptionFilter,
    fmsNotificationChannel,
    greengrassFunctionDefinitionVersion,
    eventschemasRegistryPolicy,
    amazonmqConfiguration,
    redshiftClusterSecurityGroup,
    logsDestination,
    ec2TransitGatewayRouteTable,
    wafXssMatchSet,
    route53HealthCheck,
    networkmanagerDevice,
    rdsDBClusterParameterGroup,
    neptuneDBInstance,
    ec2VPCEndpointService,
    kinesisStreamConsumer,
    guarddutyMaster,
    s3BucketPolicy,
    cloudformationCustomResource,
    servicecatalogStackSetConstraint,
    glueCrawler,
    ec2ClientVpnRoute,
    apigatewayDocumentationVersion,
    ssmMaintenanceWindowTask,
    glueMLTransform,
    transferServer,
    apigatewayUsagePlanKey,
    emrSecurityConfiguration,
    cognitoUserPoolUserToGroupAttachment,
    robomakerFleet,
    glueClassifier,
    elasticbeanstalkConfigurationTemplate,
    amazonmqBroker,
    appsyncDataSource,
    ecsPrimaryTaskSet,
    greengrassGroup,
    cognitoIdentityPoolRoleAttachment,
    eventsRule,
    imagebuilderComponent,
    codepipelineCustomActionType,
    appmeshVirtualNode,
    appmeshVirtualRouter,
    greengrassConnectorDefinition,
    ec2PlacementGroup,
    apigatewayRequestValidator,
    wafregionalSizeConstraintSet,
    appmeshVirtualService,
    rdsDBSecurityGroupIngress,
    ec2GatewayRouteTableAssociation,
    logsLogGroup,
    codepipelineWebhook,
    autoscalingplansScalingPlan,
    imagebuilderInfrastructureConfiguration,
    wafregionalXssMatchSet,
    ec2NetworkAclEntry,
    ec2InternetGateway,
    elasticloadbalancingv2ListenerCertificate,
    iamRole,
    neptuneDBParameterGroup,
    macieFindingsFilter,
    ec2LaunchTemplate,
    opsworksVolume,
    servicecatalogTagOptionAssociation,
    acmpcaCertificate,
    servicecatalogLaunchTemplateConstraint,
    emrCluster,
    ec2SpotFleet,
    gameliftAlias,
    ec2VPNConnectionRoute,
    wafRule,
    directoryserviceMicrosoftAD,
    apigatewayv2DomainName,
    greengrassFunctionDefinition,
    ssmDocument,
    ec2NetworkInterfacePermission,
    sagemakerModel,
    configDeliveryChannel,
    gameliftBuild,
    ec2TrafficMirrorFilter,
    configOrganizationConfigRule,
    qldbLedger,
    apigatewayv2Integration,
    cloudwatchAlarm,
    backupBackupSelection,
    certificatemanagerCertificate,
    greengrassSubscriptionDefinitionVersion,
    greengrassCoreDefinitionVersion,
    mediaconvertPreset,
    codestarnotificationsNotificationRule,
    inspectorResourceGroup,
    iotanalyticsDataset,
    iotProvisioningTemplate,
    docdbDBSubnetGroup,
    servicecatalogPortfolioPrincipalAssociation,
    gameliftMatchmakingRuleSet,
    imagebuilderImagePipeline,
    ec2SecurityGroupIngress,
    rdsDBCluster,
    askSkill,
    ec2ClientVpnEndpoint,
    ecsService,
    iamUserToGroupAddition,
    groundstationMissionProfile,
    opsworkscmServer,
    batchJobQueue,
    iotThing,
    opsworksLayer,
    dmsCertificate,
    apigatewayApiKey,
    ec2SubnetRouteTableAssociation,
    glueTable,
    elasticacheSecurityGroup,
    iamInstanceProfile,
    iotPolicy,
    batchComputeEnvironment,
    codedeployDeploymentGroup,
    ec2Route,
    ec2LocalGatewayRouteTableVPCAssociation,
    gameliftGameSessionQueue,
    apigatewayResource,
    globalacceleratorEndpointGroup,
    securityhubHub,
    iot1clickDevice,
    glueConnection,
    macieCustomDataIdentifier,
    ecsTaskSet,
    wafv2RuleGroup,
    elasticbeanstalkApplication,
    wafv2WebACL,
    elasticacheSubnetGroup,
    ec2TransitGatewayRouteTablePropagation,
    wafregionalByteMatchSet,
    detectiveGraph,
    ec2NetworkInterface,
    apigatewayv2Deployment,
    appconfigEnvironment,
    fsxFileSystem,
    opsworksStack,
    datapipelinePipeline,
    route53resolverResolverRule,
    networkmanagerLinkAssociation,
    ec2ClientVpnAuthorizationRule,
    ec2SubnetNetworkAclAssociation,
    gameliftScript,
    apigatewayAccount,
    ec2TrafficMirrorSession,
    amplifyBranch,
    greengrassLoggerDefinition,
    servicecatalogLaunchRoleConstraint,
    servicecatalogCloudFormationProvisionedProduct,
    ec2SubnetCidrBlock,
    autoscalingLifecycleHook,
    redshiftClusterSecurityGroupIngress,
    rdsOptionGroup,
    ec2NatGateway,
    elasticacheSecurityGroupIngress,
    elasticacheReplicationGroup,
    cognitoUserPoolUser,
    apigatewayv2Model,
    appsyncFunctionConfiguration,
    cloudformationWaitCondition,
    ec2SecurityGroup,
    wafregionalRule,
    ec2TrafficMirrorFilterRule,
    appconfigDeploymentStrategy,
    apigatewayRestApi,
    eventsEventBus,
    lambdaEventInvokeConfig,
    ec2PrefixList,
    ec2VPC,
    codeguruprofilerProfilingGroup,
    athenaDataCatalog,
    kinesisanalyticsv2ApplicationOutput,
    configOrganizationConformancePack,
    elasticacheParameterGroup,
    networkmanagerGlobalNetwork,
    sqsQueuePolicy,
    networkmanagerTransitGatewayRegistration,
    efsFileSystem,
    applicationautoscalingScalingPolicy,
    wafSqlInjectionMatchSet,
    codecommitRepository,
    secretsmanagerSecret,
    servicecatalogPortfolio,
    greengrassCoreDefinition,
    cognitoUserPoolUICustomizationAttachment,
    rdsDBParameterGroup,
    logsLogStream,
    athenaWorkGroup,
    robomakerRobotApplicationVersion,
    rdsEventSubscription,
    elasticbeanstalkEnvironment,
    resourcegroupsGroup,
    iotanalyticsPipeline,
    lambdaFunction,
    ec2TransitGatewayRoute,
    fmsPolicy,
    transferUser,
    eventschemasSchema,
    ec2NetworkAcl,
    imagebuilderDistributionConfiguration,
    rdsDBProxy,
    configConfigRule,
    gluePartition,
    ec2VPNGatewayRoutePropagation,
    ec2ClientVpnTargetNetworkAssociation,
    wafWebACL,
    appsyncApiCache,
    neptuneDBCluster,
    apigatewayv2Authorizer,
    cloudformationWaitConditionHandle,
    ssmMaintenanceWindow,
    cloudformationMacro,
    route53RecordSetGroup,
    kinesisfirehoseDeliveryStream,
    iamManagedPolicy,
    iotPolicyPrincipalAttachment,
    greengrassDeviceDefinitionVersion,
    applicationautoscalingScalableTarget,
    configConformancePack,
    amplifyDomain,
    route53resolverResolverRuleAssociation,
    greengrassSubscriptionDefinition,
    apigatewayVpcLink,
    ioteventsDetectorModel,
    kinesisanalyticsv2ApplicationReferenceDataSource,
    apigatewayMethod,
    dmsEndpoint,
    servicecatalogLaunchNotificationConstraint,
    greengrassResourceDefinitionVersion,
    directoryserviceSimpleAD,
    secretsmanagerSecretTargetAttachment,
    ec2VolumeAttachment,
    ec2Host,
    ecsTaskDefinition,
    apigatewayv2IntegrationResponse,
    networkmanagerSite,
    iotThingPrincipalAttachment,
    elasticacheCacheCluster,
    cognitoUserPoolDomain,
    docdbDBClusterParameterGroup,
    elasticbeanstalkApplicationVersion,
    mskCluster,
    ec2VPCEndpoint,
    elasticloadbalancingv2TargetGroup,
    ec2VPCGatewayAttachment,
    robomakerRobot,
    glueTrigger,
    efsAccessPoint,
    ec2VPCCidrBlock,
    ssmParameter,
    inspectorAssessmentTemplate,
    appmeshMesh,
    rdsDBProxyTargetGroup,
    kinesisanalyticsApplicationReferenceDataSource,
    ssmResourceDataSync,
    appconfigApplication,
    kinesisanalyticsApplication,
    dynamodbTable,
    ec2EC2Fleet,
    cassandraTable,
    greengrassGroupVersion,
    lambdaPermission,
    iotCertificate,
    guarddutyIPSet,
    ssmAssociation,
    imagebuilderImageRecipe,
    codestarGitHubRepository,
    athenaNamedQuery,
    chatbotSlackChannelConfiguration,
    inspectorAssessmentTarget,
    eventschemasRegistry,
    autoscalingAutoScalingGroup,
    route53resolverResolverEndpoint,
    imagebuilderImage,
    cassandraKeyspace,
    ec2VPCDHCPOptionsAssociation,
    dmsReplicationTask,
    servicediscoveryPublicDnsNamespace,
    ec2TrafficMirrorTarget,
    dmsReplicationInstance,
    glueSecurityConfiguration,
    apigatewayv2ApiMapping,
    autoscalingScheduledAction
};