import { memberInvitation as detectiveMemberInvitation } from '../aws/detective/MemberInvitation';
import { graph as detectiveGraph } from '../aws/detective/Graph';
import { member as managedblockchainMember } from '../aws/managedblockchain/Member';
import { node as managedblockchainNode } from '../aws/managedblockchain/Node';
import { vPCEndpointConnectionNotification as ec2VPCEndpointConnectionNotification } from '../aws/ec2/VPCEndpointConnectionNotification';
import { receiptFilter as sesReceiptFilter } from '../aws/ses/ReceiptFilter';
import { configurationSetEventDestination as sesConfigurationSetEventDestination } from '../aws/ses/ConfigurationSetEventDestination';
import { template as sesTemplate } from '../aws/ses/Template';
import { receiptRule as sesReceiptRule } from '../aws/ses/ReceiptRule';
import { receiptRuleSet as sesReceiptRuleSet } from '../aws/ses/ReceiptRuleSet';
import { emailTemplate as pinpointEmailTemplate } from '../aws/pinpoint/EmailTemplate';
import { smsTemplate as pinpointSmsTemplate } from '../aws/pinpoint/SmsTemplate';
import { pushTemplate as pinpointPushTemplate } from '../aws/pinpoint/PushTemplate';
import { flowTemplate as iotthingsgraphFlowTemplate } from '../aws/iotthingsgraph/FlowTemplate';
import { sMSChannel as pinpointSMSChannel } from '../aws/pinpoint/SMSChannel';
import { voiceChannel as pinpointVoiceChannel } from '../aws/pinpoint/VoiceChannel';
import { eventStream as pinpointEventStream } from '../aws/pinpoint/EventStream';
import { configurationSetEventDestination as pinpointemailConfigurationSetEventDestination } from '../aws/pinpointemail/ConfigurationSetEventDestination';
import { configurationSet as sesConfigurationSet } from '../aws/ses/ConfigurationSet';
import { baiduChannel as pinpointBaiduChannel } from '../aws/pinpoint/BaiduChannel';
import { gCMChannel as pinpointGCMChannel } from '../aws/pinpoint/GCMChannel';
import { dedicatedIpPool as pinpointemailDedicatedIpPool } from '../aws/pinpointemail/DedicatedIpPool';
import { aPNSChannel as pinpointAPNSChannel } from '../aws/pinpoint/APNSChannel';
import { identity as pinpointemailIdentity } from '../aws/pinpointemail/Identity';
import { segment as pinpointSegment } from '../aws/pinpoint/Segment';
import { aPNSSandboxChannel as pinpointAPNSSandboxChannel } from '../aws/pinpoint/APNSSandboxChannel';
import { aDMChannel as pinpointADMChannel } from '../aws/pinpoint/ADMChannel';
import { configurationSet as pinpointemailConfigurationSet } from '../aws/pinpointemail/ConfigurationSet';
import { applicationSettings as pinpointApplicationSettings } from '../aws/pinpoint/ApplicationSettings';
import { campaign as pinpointCampaign } from '../aws/pinpoint/Campaign';
import { aPNSVoipSandboxChannel as pinpointAPNSVoipSandboxChannel } from '../aws/pinpoint/APNSVoipSandboxChannel';
import { aPNSVoipChannel as pinpointAPNSVoipChannel } from '../aws/pinpoint/APNSVoipChannel';
import { emailChannel as pinpointEmailChannel } from '../aws/pinpoint/EmailChannel';
import { app as pinpointApp } from '../aws/pinpoint/App';
import { user as appstreamUser } from '../aws/appstream/User';
import { stackUserAssociation as appstreamStackUserAssociation } from '../aws/appstream/StackUserAssociation';
import { container as mediastoreContainer } from '../aws/mediastore/Container';
import { stack as appstreamStack } from '../aws/appstream/Stack';
import { fleet as appstreamFleet } from '../aws/appstream/Fleet';
import { imageBuilder as appstreamImageBuilder } from '../aws/appstream/ImageBuilder';
import { directoryConfig as appstreamDirectoryConfig } from '../aws/appstream/DirectoryConfig';
import { stackFleetAssociation as appstreamStackFleetAssociation } from '../aws/appstream/StackFleetAssociation';
import { channel as medialiveChannel } from '../aws/medialive/Channel';
import { input as medialiveInput } from '../aws/medialive/Input';
import { inputSecurityGroup as medialiveInputSecurityGroup } from '../aws/medialive/InputSecurityGroup';
import { config as groundstationConfig } from '../aws/groundstation/Config';
import { dataflowEndpointGroup as groundstationDataflowEndpointGroup } from '../aws/groundstation/DataflowEndpointGroup';
import { missionProfile as groundstationMissionProfile } from '../aws/groundstation/MissionProfile';
import { deployment as appconfigDeployment } from '../aws/appconfig/Deployment';
import { configurationProfile as appconfigConfigurationProfile } from '../aws/appconfig/ConfigurationProfile';
import { environment as appconfigEnvironment } from '../aws/appconfig/Environment';
import { deploymentStrategy as appconfigDeploymentStrategy } from '../aws/appconfig/DeploymentStrategy';
import { application as appconfigApplication } from '../aws/appconfig/Application';
import { environmentEC2 as cloud9EnvironmentEC2 } from '../aws/cloud9/EnvironmentEC2';
import { profilingGroup as codeguruprofilerProfilingGroup } from '../aws/codeguruprofiler/ProfilingGroup';
import { resource as lakeformationResource } from '../aws/lakeformation/Resource';
import { notebookInstanceLifecycleConfig as sagemakerNotebookInstanceLifecycleConfig } from '../aws/sagemaker/NotebookInstanceLifecycleConfig';
import { permissions as lakeformationPermissions } from '../aws/lakeformation/Permissions';
import { dataLakeSettings as lakeformationDataLakeSettings } from '../aws/lakeformation/DataLakeSettings';
import { endpointConfig as sagemakerEndpointConfig } from '../aws/sagemaker/EndpointConfig';
import { discoverer as eventschemasDiscoverer } from '../aws/eventschemas/Discoverer';
import { endpoint as sagemakerEndpoint } from '../aws/sagemaker/Endpoint';
import { schema as eventschemasSchema } from '../aws/eventschemas/Schema';
import { registry as eventschemasRegistry } from '../aws/eventschemas/Registry';
import { workteam as sagemakerWorkteam } from '../aws/sagemaker/Workteam';
import { apiKey as appsyncApiKey } from '../aws/appsync/ApiKey';
import { activity as stepfunctionsActivity } from '../aws/stepfunctions/Activity';
import { stateMachine as stepfunctionsStateMachine } from '../aws/stepfunctions/StateMachine';
import { channel as iotanalyticsChannel } from '../aws/iotanalytics/Channel';
import { datastore as iotanalyticsDatastore } from '../aws/iotanalytics/Datastore';
import { dataset as iotanalyticsDataset } from '../aws/iotanalytics/Dataset';
import { pipeline as iotanalyticsPipeline } from '../aws/iotanalytics/Pipeline';
import { simulationApplication as robomakerSimulationApplication } from '../aws/robomaker/SimulationApplication';
import { simulationApplicationVersion as robomakerSimulationApplicationVersion } from '../aws/robomaker/SimulationApplicationVersion';
import { robotApplication as robomakerRobotApplication } from '../aws/robomaker/RobotApplication';
import { fleet as robomakerFleet } from '../aws/robomaker/Fleet';
import { robotApplicationVersion as robomakerRobotApplicationVersion } from '../aws/robomaker/RobotApplicationVersion';
import { robot as robomakerRobot } from '../aws/robomaker/Robot';
import { ledger as qldbLedger } from '../aws/qldb/Ledger';
import { database as glueDatabase } from '../aws/glue/Database';
import { table as glueTable } from '../aws/glue/Table';
import { connection as glueConnection } from '../aws/glue/Connection';
import { partition as gluePartition } from '../aws/glue/Partition';
import { graphQLSchema as appsyncGraphQLSchema } from '../aws/appsync/GraphQLSchema';
import { resolver as appsyncResolver } from '../aws/appsync/Resolver';
import { dataSource as appsyncDataSource } from '../aws/appsync/DataSource';
import { functionConfiguration as appsyncFunctionConfiguration } from '../aws/appsync/FunctionConfiguration';
import { applicationOutput as kinesisanalyticsApplicationOutput } from '../aws/kinesisanalytics/ApplicationOutput';
import { applicationReferenceDataSource as kinesisanalyticsApplicationReferenceDataSource } from '../aws/kinesisanalytics/ApplicationReferenceDataSource';
import { application as kinesisanalyticsApplication } from '../aws/kinesisanalytics/Application';
import { project as iot1clickProject } from '../aws/iot1click/Project';
import { placement as iot1clickPlacement } from '../aws/iot1click/Placement';
import { device as iot1clickDevice } from '../aws/iot1click/Device';
import { userPoolGroup as cognitoUserPoolGroup } from '../aws/cognito/UserPoolGroup';
import { identityPool as cognitoIdentityPool } from '../aws/cognito/IdentityPool';
import { userPoolUserToGroupAttachment as cognitoUserPoolUserToGroupAttachment } from '../aws/cognito/UserPoolUserToGroupAttachment';
import { userPoolUser as cognitoUserPoolUser } from '../aws/cognito/UserPoolUser';
import { dBInstance as docdbDBInstance } from '../aws/docdb/DBInstance';
import { dBCluster as docdbDBCluster } from '../aws/docdb/DBCluster';
import { dBSubnetGroup as docdbDBSubnetGroup } from '../aws/docdb/DBSubnetGroup';
import { dBClusterParameterGroup as docdbDBClusterParameterGroup } from '../aws/docdb/DBClusterParameterGroup';
import { applicationCloudWatchLoggingOption as kinesisanalyticsv2ApplicationCloudWatchLoggingOption } from '../aws/kinesisanalyticsv2/ApplicationCloudWatchLoggingOption';
import { input as ioteventsInput } from '../aws/iotevents/Input';
import { application as kinesisanalyticsv2Application } from '../aws/kinesisanalyticsv2/Application';
import { applicationOutput as kinesisanalyticsv2ApplicationOutput } from '../aws/kinesisanalyticsv2/ApplicationOutput';
import { detectorModel as ioteventsDetectorModel } from '../aws/iotevents/DetectorModel';
import { applicationReferenceDataSource as kinesisanalyticsv2ApplicationReferenceDataSource } from '../aws/kinesisanalyticsv2/ApplicationReferenceDataSource';
import { app as amplifyApp } from '../aws/amplify/App';
import { branch as amplifyBranch } from '../aws/amplify/Branch';
import { domain as amplifyDomain } from '../aws/amplify/Domain';
import { userPoolRiskConfigurationAttachment as cognitoUserPoolRiskConfigurationAttachment } from '../aws/cognito/UserPoolRiskConfigurationAttachment';
import { userPoolIdentityProvider as cognitoUserPoolIdentityProvider } from '../aws/cognito/UserPoolIdentityProvider';
import { userPoolResourceServer as cognitoUserPoolResourceServer } from '../aws/cognito/UserPoolResourceServer';
import { userPool as cognitoUserPool } from '../aws/cognito/UserPool';
import { userPoolClient as cognitoUserPoolClient } from '../aws/cognito/UserPoolClient';
import { identityPoolRoleAttachment as cognitoIdentityPoolRoleAttachment } from '../aws/cognito/IdentityPoolRoleAttachment';
import { model as sagemakerModel } from '../aws/sagemaker/Model';
import { userPoolUICustomizationAttachment as cognitoUserPoolUICustomizationAttachment } from '../aws/cognito/UserPoolUICustomizationAttachment';
import { userPoolDomain as cognitoUserPoolDomain } from '../aws/cognito/UserPoolDomain';
import { namedQuery as athenaNamedQuery } from '../aws/athena/NamedQuery';
import { graphQLApi as appsyncGraphQLApi } from '../aws/appsync/GraphQLApi';
import { apiCache as appsyncApiCache } from '../aws/appsync/ApiCache';
import { jobQueue as batchJobQueue } from '../aws/batch/JobQueue';
import { resourceUpdateConstraint as servicecatalogResourceUpdateConstraint } from '../aws/servicecatalog/ResourceUpdateConstraint';
import { repository as codecommitRepository } from '../aws/codecommit/Repository';
import { connectorDefinitionVersion as greengrassConnectorDefinitionVersion } from '../aws/greengrass/ConnectorDefinitionVersion';
import { resourceDefinition as greengrassResourceDefinition } from '../aws/greengrass/ResourceDefinition';
import { deviceDefinition as greengrassDeviceDefinition } from '../aws/greengrass/DeviceDefinition';
import { loggerDefinitionVersion as greengrassLoggerDefinitionVersion } from '../aws/greengrass/LoggerDefinitionVersion';
import { functionDefinitionVersion as greengrassFunctionDefinitionVersion } from '../aws/greengrass/FunctionDefinitionVersion';
import { group as greengrassGroup } from '../aws/greengrass/Group';
import { connectorDefinition as greengrassConnectorDefinition } from '../aws/greengrass/ConnectorDefinition';
import { functionDefinition as greengrassFunctionDefinition } from '../aws/greengrass/FunctionDefinition';
import { subscriptionDefinitionVersion as greengrassSubscriptionDefinitionVersion } from '../aws/greengrass/SubscriptionDefinitionVersion';
import { coreDefinitionVersion as greengrassCoreDefinitionVersion } from '../aws/greengrass/CoreDefinitionVersion';
import { loggerDefinition as greengrassLoggerDefinition } from '../aws/greengrass/LoggerDefinition';
import { coreDefinition as greengrassCoreDefinition } from '../aws/greengrass/CoreDefinition';
import { deviceDefinitionVersion as greengrassDeviceDefinitionVersion } from '../aws/greengrass/DeviceDefinitionVersion';
import { subscriptionDefinition as greengrassSubscriptionDefinition } from '../aws/greengrass/SubscriptionDefinition';
import { resourceDefinitionVersion as greengrassResourceDefinitionVersion } from '../aws/greengrass/ResourceDefinitionVersion';
import { groupVersion as greengrassGroupVersion } from '../aws/greengrass/GroupVersion';
import { dBParameterGroup as neptuneDBParameterGroup } from '../aws/neptune/DBParameterGroup';
import { dBClusterParameterGroup as neptuneDBClusterParameterGroup } from '../aws/neptune/DBClusterParameterGroup';
import { dBSubnetGroup as neptuneDBSubnetGroup } from '../aws/neptune/DBSubnetGroup';
import { dBInstance as neptuneDBInstance } from '../aws/neptune/DBInstance';
import { dBCluster as neptuneDBCluster } from '../aws/neptune/DBCluster';
import { resolverRule as route53resolverResolverRule } from '../aws/route53resolver/ResolverRule';
import { resolverEndpoint as route53resolverResolverEndpoint } from '../aws/route53resolver/ResolverEndpoint';
import { resolverRuleAssociation as route53resolverResolverRuleAssociation } from '../aws/route53resolver/ResolverRuleAssociation';
import { parameterGroup as daxParameterGroup } from '../aws/dax/ParameterGroup';
import { cluster as daxCluster } from '../aws/dax/Cluster';
import { subnetGroup as daxSubnetGroup } from '../aws/dax/SubnetGroup';
import { server as opsworkscmServer } from '../aws/opsworkscm/Server';
import { backupVault as backupBackupVault } from '../aws/backup/BackupVault';
import { backupSelection as backupBackupSelection } from '../aws/backup/BackupSelection';
import { route as appmeshRoute } from '../aws/appmesh/Route';
import { codeRepository as sagemakerCodeRepository } from '../aws/sagemaker/CodeRepository';
import { mLTransform as glueMLTransform } from '../aws/glue/MLTransform';
import { virtualNode as appmeshVirtualNode } from '../aws/appmesh/VirtualNode';
import { virtualRouter as appmeshVirtualRouter } from '../aws/appmesh/VirtualRouter';
import { virtualService as appmeshVirtualService } from '../aws/appmesh/VirtualService';
import { scalingPlan as autoscalingplansScalingPlan } from '../aws/autoscalingplans/ScalingPlan';
import { mesh as appmeshMesh } from '../aws/appmesh/Mesh';
import { backupPlan as backupBackupPlan } from '../aws/backup/BackupPlan';
import { configurationAssociation as amazonmqConfigurationAssociation } from '../aws/amazonmq/ConfigurationAssociation';
import { configuration as amazonmqConfiguration } from '../aws/amazonmq/Configuration';
import { broker as amazonmqBroker } from '../aws/amazonmq/Broker';
import { capacityReservation as ec2CapacityReservation } from '../aws/ec2/CapacityReservation';
import { dataCatalogEncryptionSettings as glueDataCatalogEncryptionSettings } from '../aws/glue/DataCatalogEncryptionSettings';
import { workflow as glueWorkflow } from '../aws/glue/Workflow';
import { devEndpoint as glueDevEndpoint } from '../aws/glue/DevEndpoint';
import { crawler as glueCrawler } from '../aws/glue/Crawler';
import { classifier as glueClassifier } from '../aws/glue/Classifier';
import { securityConfiguration as glueSecurityConfiguration } from '../aws/glue/SecurityConfiguration';
import { configurationAggregator as configConfigurationAggregator } from '../aws/config/ConfigurationAggregator';
import { aggregationAuthorization as configAggregationAuthorization } from '../aws/config/AggregationAuthorization';
import { fileSystem as fsxFileSystem } from '../aws/fsx/FileSystem';
import { rateBasedRule as wafregionalRateBasedRule } from '../aws/wafregional/RateBasedRule';
import { sqlInjectionMatchSet as wafregionalSqlInjectionMatchSet } from '../aws/wafregional/SqlInjectionMatchSet';
import { geoMatchSet as wafregionalGeoMatchSet } from '../aws/wafregional/GeoMatchSet';
import { regexPatternSet as wafregionalRegexPatternSet } from '../aws/wafregional/RegexPatternSet';
import { webACLAssociation as wafregionalWebACLAssociation } from '../aws/wafregional/WebACLAssociation';
import { webACL as wafregionalWebACL } from '../aws/wafregional/WebACL';
import { iPSet as wafregionalIPSet } from '../aws/wafregional/IPSet';
import { sizeConstraintSet as wafregionalSizeConstraintSet } from '../aws/wafregional/SizeConstraintSet';
import { xssMatchSet as wafregionalXssMatchSet } from '../aws/wafregional/XssMatchSet';
import { byteMatchSet as wafregionalByteMatchSet } from '../aws/wafregional/ByteMatchSet';
import { rule as wafregionalRule } from '../aws/wafregional/Rule';
import { clientVpnRoute as ec2ClientVpnRoute } from '../aws/ec2/ClientVpnRoute';
import { clientVpnEndpoint as ec2ClientVpnEndpoint } from '../aws/ec2/ClientVpnEndpoint';
import { clientVpnAuthorizationRule as ec2ClientVpnAuthorizationRule } from '../aws/ec2/ClientVpnAuthorizationRule';
import { clientVpnTargetNetworkAssociation as ec2ClientVpnTargetNetworkAssociation } from '../aws/ec2/ClientVpnTargetNetworkAssociation';
import { resourceShare as ramResourceShare } from '../aws/ram/ResourceShare';
import { job as glueJob } from '../aws/glue/Job';
import { trigger as glueTrigger } from '../aws/glue/Trigger';
import { notebookInstance as sagemakerNotebookInstance } from '../aws/sagemaker/NotebookInstance';
import { resourceGroup as inspectorResourceGroup } from '../aws/inspector/ResourceGroup';
import { assessmentTemplate as inspectorAssessmentTemplate } from '../aws/inspector/AssessmentTemplate';
import { assessmentTarget as inspectorAssessmentTarget } from '../aws/inspector/AssessmentTarget';
import { httpNamespace as servicediscoveryHttpNamespace } from '../aws/servicediscovery/HttpNamespace';
import { localGatewayRoute as ec2LocalGatewayRoute } from '../aws/ec2/LocalGatewayRoute';
import { localGatewayRouteTableVPCAssociation as ec2LocalGatewayRouteTableVPCAssociation } from '../aws/ec2/LocalGatewayRouteTableVPCAssociation';
import { instance as servicediscoveryInstance } from '../aws/servicediscovery/Instance';
import { service as servicediscoveryService } from '../aws/servicediscovery/Service';
import { privateDnsNamespace as servicediscoveryPrivateDnsNamespace } from '../aws/servicediscovery/PrivateDnsNamespace';
import { publicDnsNamespace as servicediscoveryPublicDnsNamespace } from '../aws/servicediscovery/PublicDnsNamespace';
import { filter as guarddutyFilter } from '../aws/guardduty/Filter';
import { threatIntelSet as guarddutyThreatIntelSet } from '../aws/guardduty/ThreatIntelSet';
import { budget as budgetsBudget } from '../aws/budgets/Budget';
import { patchBaseline as ssmPatchBaseline } from '../aws/ssm/PatchBaseline';
import { member as guarddutyMember } from '../aws/guardduty/Member';
import { lifecyclePolicy as dlmLifecyclePolicy } from '../aws/dlm/LifecyclePolicy';
import { master as guarddutyMaster } from '../aws/guardduty/Master';
import { iPSet as guarddutyIPSet } from '../aws/guardduty/IPSet';
import { matchmakingConfiguration as gameliftMatchmakingConfiguration } from '../aws/gamelift/MatchmakingConfiguration';
import { matchmakingRuleSet as gameliftMatchmakingRuleSet } from '../aws/gamelift/MatchmakingRuleSet';
import { gameSessionQueue as gameliftGameSessionQueue } from '../aws/gamelift/GameSessionQueue';
import { script as gameliftScript } from '../aws/gamelift/Script';
import { skill as askSkill } from '../alexa/ask/Skill';
import { portfolioShare as servicecatalogPortfolioShare } from '../aws/servicecatalog/PortfolioShare';
import { link as networkmanagerLink } from '../aws/networkmanager/Link';
import { streamingDistribution as cloudfrontStreamingDistribution } from '../aws/cloudfront/StreamingDistribution';
import { jobDefinition as batchJobDefinition } from '../aws/batch/JobDefinition';
import { customerGatewayAssociation as networkmanagerCustomerGatewayAssociation } from '../aws/networkmanager/CustomerGatewayAssociation';
import { cloudFrontOriginAccessIdentity as cloudfrontCloudFrontOriginAccessIdentity } from '../aws/cloudfront/CloudFrontOriginAccessIdentity';
import { portfolioProductAssociation as servicecatalogPortfolioProductAssociation } from '../aws/servicecatalog/PortfolioProductAssociation';
import { acceptedPortfolioShare as servicecatalogAcceptedPortfolioShare } from '../aws/servicecatalog/AcceptedPortfolioShare';
import { detector as guarddutyDetector } from '../aws/guardduty/Detector';
import { device as networkmanagerDevice } from '../aws/networkmanager/Device';
import { stackSetConstraint as servicecatalogStackSetConstraint } from '../aws/servicecatalog/StackSetConstraint';
import { webhook as codepipelineWebhook } from '../aws/codepipeline/Webhook';
import { linkAssociation as networkmanagerLinkAssociation } from '../aws/networkmanager/LinkAssociation';
import { globalNetwork as networkmanagerGlobalNetwork } from '../aws/networkmanager/GlobalNetwork';
import { transitGatewayRegistration as networkmanagerTransitGatewayRegistration } from '../aws/networkmanager/TransitGatewayRegistration';
import { site as networkmanagerSite } from '../aws/networkmanager/Site';
import { serviceLinkedRole as iamServiceLinkedRole } from '../aws/iam/ServiceLinkedRole';
import { maintenanceWindowTask as ssmMaintenanceWindowTask } from '../aws/ssm/MaintenanceWindowTask';
import { replicationSubnetGroup as dmsReplicationSubnetGroup } from '../aws/dms/ReplicationSubnetGroup';
import { eventSubscription as dmsEventSubscription } from '../aws/dms/EventSubscription';
import { certificate as dmsCertificate } from '../aws/dms/Certificate';
import { endpoint as dmsEndpoint } from '../aws/dms/Endpoint';
import { replicationTask as dmsReplicationTask } from '../aws/dms/ReplicationTask';
import { replicationInstance as dmsReplicationInstance } from '../aws/dms/ReplicationInstance';
import { connection as codestarconnectionsConnection } from '../aws/codestarconnections/Connection';
import { tagOption as servicecatalogTagOption } from '../aws/servicecatalog/TagOption';
import { queue as mediaconvertQueue } from '../aws/mediaconvert/Queue';
import { distribution as cloudfrontDistribution } from '../aws/cloudfront/Distribution';
import { cloudFormationProduct as servicecatalogCloudFormationProduct } from '../aws/servicecatalog/CloudFormationProduct';
import { jobTemplate as mediaconvertJobTemplate } from '../aws/mediaconvert/JobTemplate';
import { notificationChannel as fmsNotificationChannel } from '../aws/fms/NotificationChannel';
import { server as transferServer } from '../aws/transfer/Server';
import { tagOptionAssociation as servicecatalogTagOptionAssociation } from '../aws/servicecatalog/TagOptionAssociation';
import { launchTemplateConstraint as servicecatalogLaunchTemplateConstraint } from '../aws/servicecatalog/LaunchTemplateConstraint';
import { organizationConfigRule as configOrganizationConfigRule } from '../aws/config/OrganizationConfigRule';
import { preset as mediaconvertPreset } from '../aws/mediaconvert/Preset';
import { portfolioPrincipalAssociation as servicecatalogPortfolioPrincipalAssociation } from '../aws/servicecatalog/PortfolioPrincipalAssociation';
import { launchRoleConstraint as servicecatalogLaunchRoleConstraint } from '../aws/servicecatalog/LaunchRoleConstraint';
import { cloudFormationProvisionedProduct as servicecatalogCloudFormationProvisionedProduct } from '../aws/servicecatalog/CloudFormationProvisionedProduct';
import { organizationConformancePack as configOrganizationConformancePack } from '../aws/config/OrganizationConformancePack';
import { portfolio as servicecatalogPortfolio } from '../aws/servicecatalog/Portfolio';
import { policy as fmsPolicy } from '../aws/fms/Policy';
import { user as transferUser } from '../aws/transfer/User';
import { conformancePack as configConformancePack } from '../aws/config/ConformancePack';
import { launchNotificationConstraint as servicecatalogLaunchNotificationConstraint } from '../aws/servicecatalog/LaunchNotificationConstraint';
import { gitHubRepository as codestarGitHubRepository } from '../aws/codestar/GitHubRepository';
import { slackChannelConfiguration as chatbotSlackChannelConfiguration } from '../aws/chatbot/SlackChannelConfiguration';
import { eventBus as eventsEventBus } from '../aws/events/EventBus';
import { vPCEndpointServicePermissions as ec2VPCEndpointServicePermissions } from '../aws/ec2/VPCEndpointServicePermissions';
import { rotationSchedule as secretsmanagerRotationSchedule } from '../aws/secretsmanager/RotationSchedule';
import { resourcePolicy as secretsmanagerResourcePolicy } from '../aws/secretsmanager/ResourcePolicy';
import { secret as secretsmanagerSecret } from '../aws/secretsmanager/Secret';
import { secretTargetAttachment as secretsmanagerSecretTargetAttachment } from '../aws/secretsmanager/SecretTargetAttachment';
import { layerVersion as lambdaLayerVersion } from '../aws/lambda/LayerVersion';
import { maintenanceWindow as ssmMaintenanceWindow } from '../aws/ssm/MaintenanceWindow';
import { resourceDataSync as ssmResourceDataSync } from '../aws/ssm/ResourceDataSync';
import { vpcLink as apigatewayVpcLink } from '../aws/apigateway/VpcLink';
import { webACLAssociation as wafv2WebACLAssociation } from '../aws/wafv2/WebACLAssociation';
import { transitGateway as ec2TransitGateway } from '../aws/ec2/TransitGateway';
import { transitGatewayRouteTableAssociation as ec2TransitGatewayRouteTableAssociation } from '../aws/ec2/TransitGatewayRouteTableAssociation';
import { transitGatewayAttachment as ec2TransitGatewayAttachment } from '../aws/ec2/TransitGatewayAttachment';
import { transitGatewayRouteTable as ec2TransitGatewayRouteTable } from '../aws/ec2/TransitGatewayRouteTable';
import { transitGatewayRouteTablePropagation as ec2TransitGatewayRouteTablePropagation } from '../aws/ec2/TransitGatewayRouteTablePropagation';
import { transitGatewayRoute as ec2TransitGatewayRoute } from '../aws/ec2/TransitGatewayRoute';
import { parameter as ssmParameter } from '../aws/ssm/Parameter';
import { layerVersionPermission as lambdaLayerVersionPermission } from '../aws/lambda/LayerVersionPermission';
import { route as apigatewayv2Route } from '../aws/apigatewayv2/Route';
import { trafficMirrorFilter as ec2TrafficMirrorFilter } from '../aws/ec2/TrafficMirrorFilter';
import { integration as apigatewayv2Integration } from '../aws/apigatewayv2/Integration';
import { stage as apigatewayv2Stage } from '../aws/apigatewayv2/Stage';
import { remediationConfiguration as configRemediationConfiguration } from '../aws/config/RemediationConfiguration';
import { deployment as apigatewayv2Deployment } from '../aws/apigatewayv2/Deployment';
import { trafficMirrorSession as ec2TrafficMirrorSession } from '../aws/ec2/TrafficMirrorSession';
import { model as apigatewayv2Model } from '../aws/apigatewayv2/Model';
import { trafficMirrorFilterRule as ec2TrafficMirrorFilterRule } from '../aws/ec2/TrafficMirrorFilterRule';
import { authorizer as apigatewayv2Authorizer } from '../aws/apigatewayv2/Authorizer';
import { api as apigatewayv2Api } from '../aws/apigatewayv2/Api';
import { routeResponse as apigatewayv2RouteResponse } from '../aws/apigatewayv2/RouteResponse';
import { integrationResponse as apigatewayv2IntegrationResponse } from '../aws/apigatewayv2/IntegrationResponse';
import { trafficMirrorTarget as ec2TrafficMirrorTarget } from '../aws/ec2/TrafficMirrorTarget';
import { domainName as apigatewayv2DomainName } from '../aws/apigatewayv2/DomainName';
import { eventBusPolicy as eventsEventBusPolicy } from '../aws/events/EventBusPolicy';
import { apiMapping as apigatewayv2ApiMapping } from '../aws/apigatewayv2/ApiMapping';
import { streamConsumer as kinesisStreamConsumer } from '../aws/kinesis/StreamConsumer';
import { hub as securityhubHub } from '../aws/securityhub/Hub';
import { notificationRule as codestarnotificationsNotificationRule } from '../aws/codestarnotifications/NotificationRule';
import { cluster as mskCluster } from '../aws/msk/Cluster';
import { table as cassandraTable } from '../aws/cassandra/Table';
import { keyspace as cassandraKeyspace } from '../aws/cassandra/Keyspace';
import { nodegroup as eksNodegroup } from '../aws/eks/Nodegroup';
import { computeEnvironment as batchComputeEnvironment } from '../aws/batch/ComputeEnvironment';
import { sourceCredential as codebuildSourceCredential } from '../aws/codebuild/SourceCredential';
import { cluster as eksCluster } from '../aws/eks/Cluster';
import { compositeAlarm as cloudwatchCompositeAlarm } from '../aws/cloudwatch/CompositeAlarm';
import { reportGroup as codebuildReportGroup } from '../aws/codebuild/ReportGroup';
import { accessPoint as s3AccessPoint } from '../aws/s3/AccessPoint';
import { regexPatternSet as wafv2RegexPatternSet } from '../aws/wafv2/RegexPatternSet';
import { ruleGroup as wafv2RuleGroup } from '../aws/wafv2/RuleGroup';
import { webACL as wafv2WebACL } from '../aws/wafv2/WebACL';
import { iPSet as wafv2IPSet } from '../aws/wafv2/IPSet';
import { certificateAuthority as acmpcaCertificateAuthority } from '../aws/acmpca/CertificateAuthority';
import { analyzer as accessanalyzerAnalyzer } from '../aws/accessanalyzer/Analyzer';
import { certificate as acmpcaCertificate } from '../aws/acmpca/Certificate';
import { certificateAuthorityActivation as acmpcaCertificateAuthorityActivation } from '../aws/acmpca/CertificateAuthorityActivation';
import { group as resourcegroupsGroup } from '../aws/resourcegroups/Group';
import { workGroup as athenaWorkGroup } from '../aws/athena/WorkGroup';
import { insightRule as cloudwatchInsightRule } from '../aws/cloudwatch/InsightRule';
import { primaryTaskSet as ecsPrimaryTaskSet } from '../aws/ecs/PrimaryTaskSet';
import { taskSet as ecsTaskSet } from '../aws/ecs/TaskSet';
import { project as codebuildProject } from '../aws/codebuild/Project';
import { maintenanceWindowTarget as ssmMaintenanceWindowTarget } from '../aws/ssm/MaintenanceWindowTarget';
import { configurationTemplate as elasticbeanstalkConfigurationTemplate } from '../aws/elasticbeanstalk/ConfigurationTemplate';
import { routeTable as ec2RouteTable } from '../aws/ec2/RouteTable';
import { rule as eventsRule } from '../aws/events/Rule';
import { iPSet as wafIPSet } from '../aws/waf/IPSet';
import { group as iamGroup } from '../aws/iam/Group';
import { customActionType as codepipelineCustomActionType } from '../aws/codepipeline/CustomActionType';
import { placementGroup as ec2PlacementGroup } from '../aws/ec2/PlacementGroup';
import { vPCPeeringConnection as ec2VPCPeeringConnection } from '../aws/ec2/VPCPeeringConnection';
import { domain as elasticsearchDomain } from '../aws/elasticsearch/Domain';
import { requestValidator as apigatewayRequestValidator } from '../aws/apigateway/RequestValidator';
import { instanceFleetConfig as emrInstanceFleetConfig } from '../aws/emr/InstanceFleetConfig';
import { workspace as workspacesWorkspace } from '../aws/workspaces/Workspace';
import { dBSecurityGroupIngress as rdsDBSecurityGroupIngress } from '../aws/rds/DBSecurityGroupIngress';
import { gatewayRouteTableAssociation as ec2GatewayRouteTableAssociation } from '../aws/ec2/GatewayRouteTableAssociation';
import { logGroup as logsLogGroup } from '../aws/logs/LogGroup';
import { stream as kinesisStream } from '../aws/kinesis/Stream';
import { launchConfiguration as autoscalingLaunchConfiguration } from '../aws/autoscaling/LaunchConfiguration';
import { queue as sqsQueue } from '../aws/sqs/Queue';
import { recordSet as route53RecordSet } from '../aws/route53/RecordSet';
import { sizeConstraintSet as wafSizeConstraintSet } from '../aws/waf/SizeConstraintSet';
import { dashboard as cloudwatchDashboard } from '../aws/cloudwatch/Dashboard';
import { networkAclEntry as ec2NetworkAclEntry } from '../aws/ec2/NetworkAclEntry';
import { internetGateway as ec2InternetGateway } from '../aws/ec2/InternetGateway';
import { policy as iamPolicy } from '../aws/iam/Policy';
import { cluster as ecsCluster } from '../aws/ecs/Cluster';
import { listenerCertificate as elasticloadbalancingv2ListenerCertificate } from '../aws/elasticloadbalancingv2/ListenerCertificate';
import { role as iamRole } from '../aws/iam/Role';
import { launchTemplate as ec2LaunchTemplate } from '../aws/ec2/LaunchTemplate';
import { volume as opsworksVolume } from '../aws/opsworks/Volume';
import { volume as ec2Volume } from '../aws/ec2/Volume';
import { cluster as emrCluster } from '../aws/emr/Cluster';
import { spotFleet as ec2SpotFleet } from '../aws/ec2/SpotFleet';
import { alias as gameliftAlias } from '../aws/gamelift/Alias';
import { vPNConnectionRoute as ec2VPNConnectionRoute } from '../aws/ec2/VPNConnectionRoute';
import { microsoftAD as directoryserviceMicrosoftAD } from '../aws/directoryservice/MicrosoftAD';
import { rule as wafRule } from '../aws/waf/Rule';
import { subscription as snsSubscription } from '../aws/sns/Subscription';
import { mountTarget as efsMountTarget } from '../aws/efs/MountTarget';
import { document as ssmDocument } from '../aws/ssm/Document';
import { deliveryChannel as configDeliveryChannel } from '../aws/config/DeliveryChannel';
import { networkInterfacePermission as ec2NetworkInterfacePermission } from '../aws/ec2/NetworkInterfacePermission';
import { topic as snsTopic } from '../aws/sns/Topic';
import { build as gameliftBuild } from '../aws/gamelift/Build';
import { deployment as apigatewayDeployment } from '../aws/apigateway/Deployment';
import { key as kmsKey } from '../aws/kms/Key';
import { alarm as cloudwatchAlarm } from '../aws/cloudwatch/Alarm';
import { cluster as redshiftCluster } from '../aws/redshift/Cluster';
import { app as opsworksApp } from '../aws/opsworks/App';
import { eventSourceMapping as lambdaEventSourceMapping } from '../aws/lambda/EventSourceMapping';
import { certificate as certificatemanagerCertificate } from '../aws/certificatemanager/Certificate';
import { authorizer as apigatewayAuthorizer } from '../aws/apigateway/Authorizer';
import { eIP as ec2EIP } from '../aws/ec2/EIP';
import { domainName as apigatewayDomainName } from '../aws/apigateway/DomainName';
import { fleet as gameliftFleet } from '../aws/gamelift/Fleet';
import { securityGroupIngress as ec2SecurityGroupIngress } from '../aws/ec2/SecurityGroupIngress';
import { documentationPart as apigatewayDocumentationPart } from '../aws/apigateway/DocumentationPart';
import { dBCluster as rdsDBCluster } from '../aws/rds/DBCluster';
import { service as ecsService } from '../aws/ecs/Service';
import { userToGroupAddition as iamUserToGroupAddition } from '../aws/iam/UserToGroupAddition';
import { dBSubnetGroup as rdsDBSubnetGroup } from '../aws/rds/DBSubnetGroup';
import { thing as iotThing } from '../aws/iot/Thing';
import { loadBalancer as elasticloadbalancingLoadBalancer } from '../aws/elasticloadbalancing/LoadBalancer';
import { layer as opsworksLayer } from '../aws/opsworks/Layer';
import { apiKey as apigatewayApiKey } from '../aws/apigateway/ApiKey';
import { subnetRouteTableAssociation as ec2SubnetRouteTableAssociation } from '../aws/ec2/SubnetRouteTableAssociation';
import { policy as iotPolicy } from '../aws/iot/Policy';
import { securityGroup as elasticacheSecurityGroup } from '../aws/elasticache/SecurityGroup';
import { instanceProfile as iamInstanceProfile } from '../aws/iam/InstanceProfile';
import { deploymentGroup as codedeployDeploymentGroup } from '../aws/codedeploy/DeploymentGroup';
import { model as apigatewayModel } from '../aws/apigateway/Model';
import { route as ec2Route } from '../aws/ec2/Route';
import { metricFilter as logsMetricFilter } from '../aws/logs/MetricFilter';
import { resource as apigatewayResource } from '../aws/apigateway/Resource';
import { flowLog as ec2FlowLog } from '../aws/ec2/FlowLog';
import { loadBalancer as elasticloadbalancingv2LoadBalancer } from '../aws/elasticloadbalancingv2/LoadBalancer';
import { accessKey as iamAccessKey } from '../aws/iam/AccessKey';
import { application as elasticbeanstalkApplication } from '../aws/elasticbeanstalk/Application';
import { subnetGroup as elasticacheSubnetGroup } from '../aws/elasticache/SubnetGroup';
import { topicPolicy as snsTopicPolicy } from '../aws/sns/TopicPolicy';
import { alias as lambdaAlias } from '../aws/lambda/Alias';
import { securityGroupEgress as ec2SecurityGroupEgress } from '../aws/ec2/SecurityGroupEgress';
import { listener as elasticloadbalancingv2Listener } from '../aws/elasticloadbalancingv2/Listener';
import { networkInterface as ec2NetworkInterface } from '../aws/ec2/NetworkInterface';
import { stack as opsworksStack } from '../aws/opsworks/Stack';
import { pipeline as datapipelinePipeline } from '../aws/datapipeline/Pipeline';
import { deploymentConfig as codedeployDeploymentConfig } from '../aws/codedeploy/DeploymentConfig';
import { subnetNetworkAclAssociation as ec2SubnetNetworkAclAssociation } from '../aws/ec2/SubnetNetworkAclAssociation';
import { account as apigatewayAccount } from '../aws/apigateway/Account';
import { clusterParameterGroup as redshiftClusterParameterGroup } from '../aws/redshift/ClusterParameterGroup';
import { trail as cloudtrailTrail } from '../aws/cloudtrail/Trail';
import { subnetCidrBlock as ec2SubnetCidrBlock } from '../aws/ec2/SubnetCidrBlock';
import { instanceGroupConfig as emrInstanceGroupConfig } from '../aws/emr/InstanceGroupConfig';
import { lifecycleHook as autoscalingLifecycleHook } from '../aws/autoscaling/LifecycleHook';
import { listenerRule as elasticloadbalancingv2ListenerRule } from '../aws/elasticloadbalancingv2/ListenerRule';
import { pipeline as codepipelinePipeline } from '../aws/codepipeline/Pipeline';
import { clusterSecurityGroupIngress as redshiftClusterSecurityGroupIngress } from '../aws/redshift/ClusterSecurityGroupIngress';
import { optionGroup as rdsOptionGroup } from '../aws/rds/OptionGroup';
import { natGateway as ec2NatGateway } from '../aws/ec2/NatGateway';
import { securityGroupIngress as elasticacheSecurityGroupIngress } from '../aws/elasticache/SecurityGroupIngress';
import { topicRule as iotTopicRule } from '../aws/iot/TopicRule';
import { elasticLoadBalancerAttachment as opsworksElasticLoadBalancerAttachment } from '../aws/opsworks/ElasticLoadBalancerAttachment';
import { replicationGroup as elasticacheReplicationGroup } from '../aws/elasticache/ReplicationGroup';
import { waitCondition as cloudformationWaitCondition } from '../aws/cloudformation/WaitCondition';
import { securityGroup as ec2SecurityGroup } from '../aws/ec2/SecurityGroup';
import { anomalyDetector as cloudwatchAnomalyDetector } from '../aws/cloudwatch/AnomalyDetector';
import { hostedZone as route53HostedZone } from '../aws/route53/HostedZone';
import { restApi as apigatewayRestApi } from '../aws/apigateway/RestApi';
import { subnet as ec2Subnet } from '../aws/ec2/Subnet';
import { application as codedeployApplication } from '../aws/codedeploy/Application';
import { eventInvokeConfig as lambdaEventInvokeConfig } from '../aws/lambda/EventInvokeConfig';
import { vPC as ec2VPC } from '../aws/ec2/VPC';
import { instance as ec2Instance } from '../aws/ec2/Instance';
import { stack as cloudformationStack } from '../aws/cloudformation/Stack';
import { parameterGroup as elasticacheParameterGroup } from '../aws/elasticache/ParameterGroup';
import { byteMatchSet as wafByteMatchSet } from '../aws/waf/ByteMatchSet';
import { queuePolicy as sqsQueuePolicy } from '../aws/sqs/QueuePolicy';
import { sqlInjectionMatchSet as wafSqlInjectionMatchSet } from '../aws/waf/SqlInjectionMatchSet';
import { scalingPolicy as applicationautoscalingScalingPolicy } from '../aws/applicationautoscaling/ScalingPolicy';
import { fileSystem as efsFileSystem } from '../aws/efs/FileSystem';
import { dBParameterGroup as rdsDBParameterGroup } from '../aws/rds/DBParameterGroup';
import { logStream as logsLogStream } from '../aws/logs/LogStream';
import { scalingPolicy as autoscalingScalingPolicy } from '../aws/autoscaling/ScalingPolicy';
import { configurationRecorder as configConfigurationRecorder } from '../aws/config/ConfigurationRecorder';
import { step as emrStep } from '../aws/emr/Step';
import { eventSubscription as rdsEventSubscription } from '../aws/rds/EventSubscription';
import { environment as elasticbeanstalkEnvironment } from '../aws/elasticbeanstalk/Environment';
import { lambdaFunction } from '../aws/lambda/Function';
import { dHCPOptions as ec2DHCPOptions } from '../aws/ec2/DHCPOptions';
import { usagePlan as apigatewayUsagePlan } from '../aws/apigateway/UsagePlan';
import { user as iamUser } from '../aws/iam/User';
import { networkAcl as ec2NetworkAcl } from '../aws/ec2/NetworkAcl';
import { instance as opsworksInstance } from '../aws/opsworks/Instance';
import { configRule as configConfigRule } from '../aws/config/ConfigRule';
import { vPNGatewayRoutePropagation as ec2VPNGatewayRoutePropagation } from '../aws/ec2/VPNGatewayRoutePropagation';
import { webACL as wafWebACL } from '../aws/waf/WebACL';
import { bucket as s3Bucket } from '../aws/s3/Bucket';
import { waitConditionHandle as cloudformationWaitConditionHandle } from '../aws/cloudformation/WaitConditionHandle';
import { version as lambdaVersion } from '../aws/lambda/Version';
import { basePathMapping as apigatewayBasePathMapping } from '../aws/apigateway/BasePathMapping';
import { macro as cloudformationMacro } from '../aws/cloudformation/Macro';
import { egressOnlyInternetGateway as ec2EgressOnlyInternetGateway } from '../aws/ec2/EgressOnlyInternetGateway';
import { recordSetGroup as route53RecordSetGroup } from '../aws/route53/RecordSetGroup';
import { deliveryStream as kinesisfirehoseDeliveryStream } from '../aws/kinesisfirehose/DeliveryStream';
import { managedPolicy as iamManagedPolicy } from '../aws/iam/ManagedPolicy';
import { dBInstance as rdsDBInstance } from '../aws/rds/DBInstance';
import { networkInterfaceAttachment as ec2NetworkInterfaceAttachment } from '../aws/ec2/NetworkInterfaceAttachment';
import { policyPrincipalAttachment as iotPolicyPrincipalAttachment } from '../aws/iot/PolicyPrincipalAttachment';
import { customerGateway as ec2CustomerGateway } from '../aws/ec2/CustomerGateway';
import { scalableTarget as applicationautoscalingScalableTarget } from '../aws/applicationautoscaling/ScalableTarget';
import { stage as apigatewayStage } from '../aws/apigateway/Stage';
import { domain as sdbDomain } from '../aws/sdb/Domain';
import { repository as ecrRepository } from '../aws/ecr/Repository';
import { gatewayResponse as apigatewayGatewayResponse } from '../aws/apigateway/GatewayResponse';
import { clientCertificate as apigatewayClientCertificate } from '../aws/apigateway/ClientCertificate';
import { method as apigatewayMethod } from '../aws/apigateway/Method';
import { simpleAD as directoryserviceSimpleAD } from '../aws/directoryservice/SimpleAD';
import { volumeAttachment as ec2VolumeAttachment } from '../aws/ec2/VolumeAttachment';
import { host as ec2Host } from '../aws/ec2/Host';
import { dBSecurityGroup as rdsDBSecurityGroup } from '../aws/rds/DBSecurityGroup';
import { taskDefinition as ecsTaskDefinition } from '../aws/ecs/TaskDefinition';
import { alias as kmsAlias } from '../aws/kms/Alias';
import { clusterSubnetGroup as redshiftClusterSubnetGroup } from '../aws/redshift/ClusterSubnetGroup';
import { eIPAssociation as ec2EIPAssociation } from '../aws/ec2/EIPAssociation';
import { vPNGateway as ec2VPNGateway } from '../aws/ec2/VPNGateway';
import { thingPrincipalAttachment as iotThingPrincipalAttachment } from '../aws/iot/ThingPrincipalAttachment';
import { cacheCluster as elasticacheCacheCluster } from '../aws/elasticache/CacheCluster';
import { applicationVersion as elasticbeanstalkApplicationVersion } from '../aws/elasticbeanstalk/ApplicationVersion';
import { vPCEndpoint as ec2VPCEndpoint } from '../aws/ec2/VPCEndpoint';
import { userProfile as opsworksUserProfile } from '../aws/opsworks/UserProfile';
import { targetGroup as elasticloadbalancingv2TargetGroup } from '../aws/elasticloadbalancingv2/TargetGroup';
import { vPCGatewayAttachment as ec2VPCGatewayAttachment } from '../aws/ec2/VPCGatewayAttachment';
import { vPNConnection as ec2VPNConnection } from '../aws/ec2/VPNConnection';
import { vPCCidrBlock as ec2VPCCidrBlock } from '../aws/ec2/VPCCidrBlock';
import { subscriptionFilter as logsSubscriptionFilter } from '../aws/logs/SubscriptionFilter';
import { destination as logsDestination } from '../aws/logs/Destination';
import { clusterSecurityGroup as redshiftClusterSecurityGroup } from '../aws/redshift/ClusterSecurityGroup';
import { table as dynamodbTable } from '../aws/dynamodb/Table';
import { eC2Fleet as ec2EC2Fleet } from '../aws/ec2/EC2Fleet';
import { xssMatchSet as wafXssMatchSet } from '../aws/waf/XssMatchSet';
import { healthCheck as route53HealthCheck } from '../aws/route53/HealthCheck';
import { permission as lambdaPermission } from '../aws/lambda/Permission';
import { certificate as iotCertificate } from '../aws/iot/Certificate';
import { association as ssmAssociation } from '../aws/ssm/Association';
import { dBClusterParameterGroup as rdsDBClusterParameterGroup } from '../aws/rds/DBClusterParameterGroup';
import { vPCEndpointService as ec2VPCEndpointService } from '../aws/ec2/VPCEndpointService';
import { bucketPolicy as s3BucketPolicy } from '../aws/s3/BucketPolicy';
import { autoScalingGroup as autoscalingAutoScalingGroup } from '../aws/autoscaling/AutoScalingGroup';
import { customResource as cloudformationCustomResource } from '../aws/cloudformation/CustomResource';
import { documentationVersion as apigatewayDocumentationVersion } from '../aws/apigateway/DocumentationVersion';
import { vPCDHCPOptionsAssociation as ec2VPCDHCPOptionsAssociation } from '../aws/ec2/VPCDHCPOptionsAssociation';
import { usagePlanKey as apigatewayUsagePlanKey } from '../aws/apigateway/UsagePlanKey';
import { securityConfiguration as emrSecurityConfiguration } from '../aws/emr/SecurityConfiguration';
import { scheduledAction as autoscalingScheduledAction } from '../aws/autoscaling/ScheduledAction';

export type AWS = typeof aws;

export const aws = {
    detectiveMemberInvitation,
    detectiveGraph,
    managedblockchainMember,
    managedblockchainNode,
    ec2VPCEndpointConnectionNotification,
    sesReceiptFilter,
    sesConfigurationSetEventDestination,
    sesTemplate,
    sesReceiptRule,
    sesReceiptRuleSet,
    pinpointEmailTemplate,
    pinpointSmsTemplate,
    pinpointPushTemplate,
    iotthingsgraphFlowTemplate,
    pinpointSMSChannel,
    pinpointVoiceChannel,
    pinpointEventStream,
    pinpointemailConfigurationSetEventDestination,
    sesConfigurationSet,
    pinpointBaiduChannel,
    pinpointGCMChannel,
    pinpointemailDedicatedIpPool,
    pinpointAPNSChannel,
    pinpointemailIdentity,
    pinpointSegment,
    pinpointAPNSSandboxChannel,
    pinpointADMChannel,
    pinpointemailConfigurationSet,
    pinpointApplicationSettings,
    pinpointCampaign,
    pinpointAPNSVoipSandboxChannel,
    pinpointAPNSVoipChannel,
    pinpointEmailChannel,
    pinpointApp,
    appstreamUser,
    appstreamStackUserAssociation,
    mediastoreContainer,
    appstreamStack,
    appstreamFleet,
    appstreamImageBuilder,
    appstreamDirectoryConfig,
    appstreamStackFleetAssociation,
    medialiveChannel,
    medialiveInput,
    medialiveInputSecurityGroup,
    groundstationConfig,
    groundstationDataflowEndpointGroup,
    groundstationMissionProfile,
    appconfigDeployment,
    appconfigConfigurationProfile,
    appconfigEnvironment,
    appconfigDeploymentStrategy,
    appconfigApplication,
    cloud9EnvironmentEC2,
    codeguruprofilerProfilingGroup,
    lakeformationResource,
    sagemakerNotebookInstanceLifecycleConfig,
    lakeformationPermissions,
    lakeformationDataLakeSettings,
    sagemakerEndpointConfig,
    eventschemasDiscoverer,
    sagemakerEndpoint,
    eventschemasSchema,
    eventschemasRegistry,
    sagemakerWorkteam,
    appsyncApiKey,
    stepfunctionsActivity,
    stepfunctionsStateMachine,
    iotanalyticsChannel,
    iotanalyticsDatastore,
    iotanalyticsDataset,
    iotanalyticsPipeline,
    robomakerSimulationApplication,
    robomakerSimulationApplicationVersion,
    robomakerRobotApplication,
    robomakerFleet,
    robomakerRobotApplicationVersion,
    robomakerRobot,
    qldbLedger,
    glueDatabase,
    glueTable,
    glueConnection,
    gluePartition,
    appsyncGraphQLSchema,
    appsyncResolver,
    appsyncDataSource,
    appsyncFunctionConfiguration,
    kinesisanalyticsApplicationOutput,
    kinesisanalyticsApplicationReferenceDataSource,
    kinesisanalyticsApplication,
    iot1clickProject,
    iot1clickPlacement,
    iot1clickDevice,
    cognitoUserPoolGroup,
    cognitoIdentityPool,
    cognitoUserPoolUserToGroupAttachment,
    cognitoUserPoolUser,
    docdbDBInstance,
    docdbDBCluster,
    docdbDBSubnetGroup,
    docdbDBClusterParameterGroup,
    kinesisanalyticsv2ApplicationCloudWatchLoggingOption,
    ioteventsInput,
    kinesisanalyticsv2Application,
    kinesisanalyticsv2ApplicationOutput,
    ioteventsDetectorModel,
    kinesisanalyticsv2ApplicationReferenceDataSource,
    amplifyApp,
    amplifyBranch,
    amplifyDomain,
    cognitoUserPoolRiskConfigurationAttachment,
    cognitoUserPoolIdentityProvider,
    cognitoUserPoolResourceServer,
    cognitoUserPool,
    cognitoUserPoolClient,
    cognitoIdentityPoolRoleAttachment,
    sagemakerModel,
    cognitoUserPoolUICustomizationAttachment,
    cognitoUserPoolDomain,
    athenaNamedQuery,
    appsyncGraphQLApi,
    appsyncApiCache,
    batchJobQueue,
    servicecatalogResourceUpdateConstraint,
    codecommitRepository,
    greengrassConnectorDefinitionVersion,
    greengrassResourceDefinition,
    greengrassDeviceDefinition,
    greengrassLoggerDefinitionVersion,
    greengrassFunctionDefinitionVersion,
    greengrassGroup,
    greengrassConnectorDefinition,
    greengrassFunctionDefinition,
    greengrassSubscriptionDefinitionVersion,
    greengrassCoreDefinitionVersion,
    greengrassLoggerDefinition,
    greengrassCoreDefinition,
    greengrassDeviceDefinitionVersion,
    greengrassSubscriptionDefinition,
    greengrassResourceDefinitionVersion,
    greengrassGroupVersion,
    neptuneDBParameterGroup,
    neptuneDBClusterParameterGroup,
    neptuneDBSubnetGroup,
    neptuneDBInstance,
    neptuneDBCluster,
    route53resolverResolverRule,
    route53resolverResolverEndpoint,
    route53resolverResolverRuleAssociation,
    daxParameterGroup,
    daxCluster,
    daxSubnetGroup,
    opsworkscmServer,
    backupBackupVault,
    backupBackupSelection,
    appmeshRoute,
    sagemakerCodeRepository,
    glueMLTransform,
    appmeshVirtualNode,
    appmeshVirtualRouter,
    appmeshVirtualService,
    autoscalingplansScalingPlan,
    appmeshMesh,
    backupBackupPlan,
    amazonmqConfigurationAssociation,
    amazonmqConfiguration,
    amazonmqBroker,
    ec2CapacityReservation,
    glueDataCatalogEncryptionSettings,
    glueWorkflow,
    glueDevEndpoint,
    glueCrawler,
    glueClassifier,
    glueSecurityConfiguration,
    configConfigurationAggregator,
    configAggregationAuthorization,
    fsxFileSystem,
    wafregionalRateBasedRule,
    wafregionalSqlInjectionMatchSet,
    wafregionalGeoMatchSet,
    wafregionalRegexPatternSet,
    wafregionalWebACLAssociation,
    wafregionalWebACL,
    wafregionalIPSet,
    wafregionalSizeConstraintSet,
    wafregionalXssMatchSet,
    wafregionalByteMatchSet,
    wafregionalRule,
    ec2ClientVpnRoute,
    ec2ClientVpnEndpoint,
    ec2ClientVpnAuthorizationRule,
    ec2ClientVpnTargetNetworkAssociation,
    ramResourceShare,
    glueJob,
    glueTrigger,
    sagemakerNotebookInstance,
    inspectorResourceGroup,
    inspectorAssessmentTemplate,
    inspectorAssessmentTarget,
    servicediscoveryHttpNamespace,
    ec2LocalGatewayRoute,
    ec2LocalGatewayRouteTableVPCAssociation,
    servicediscoveryInstance,
    servicediscoveryService,
    servicediscoveryPrivateDnsNamespace,
    servicediscoveryPublicDnsNamespace,
    guarddutyFilter,
    guarddutyThreatIntelSet,
    budgetsBudget,
    ssmPatchBaseline,
    guarddutyMember,
    dlmLifecyclePolicy,
    guarddutyMaster,
    guarddutyIPSet,
    gameliftMatchmakingConfiguration,
    gameliftMatchmakingRuleSet,
    gameliftGameSessionQueue,
    gameliftScript,
    askSkill,
    servicecatalogPortfolioShare,
    networkmanagerLink,
    cloudfrontStreamingDistribution,
    batchJobDefinition,
    networkmanagerCustomerGatewayAssociation,
    cloudfrontCloudFrontOriginAccessIdentity,
    servicecatalogPortfolioProductAssociation,
    servicecatalogAcceptedPortfolioShare,
    guarddutyDetector,
    networkmanagerDevice,
    servicecatalogStackSetConstraint,
    codepipelineWebhook,
    networkmanagerLinkAssociation,
    networkmanagerGlobalNetwork,
    networkmanagerTransitGatewayRegistration,
    networkmanagerSite,
    iamServiceLinkedRole,
    ssmMaintenanceWindowTask,
    dmsReplicationSubnetGroup,
    dmsEventSubscription,
    dmsCertificate,
    dmsEndpoint,
    dmsReplicationTask,
    dmsReplicationInstance,
    codestarconnectionsConnection,
    servicecatalogTagOption,
    mediaconvertQueue,
    cloudfrontDistribution,
    servicecatalogCloudFormationProduct,
    mediaconvertJobTemplate,
    fmsNotificationChannel,
    transferServer,
    servicecatalogTagOptionAssociation,
    servicecatalogLaunchTemplateConstraint,
    configOrganizationConfigRule,
    mediaconvertPreset,
    servicecatalogPortfolioPrincipalAssociation,
    servicecatalogLaunchRoleConstraint,
    servicecatalogCloudFormationProvisionedProduct,
    configOrganizationConformancePack,
    servicecatalogPortfolio,
    fmsPolicy,
    transferUser,
    configConformancePack,
    servicecatalogLaunchNotificationConstraint,
    codestarGitHubRepository,
    chatbotSlackChannelConfiguration,
    eventsEventBus,
    ec2VPCEndpointServicePermissions,
    secretsmanagerRotationSchedule,
    secretsmanagerResourcePolicy,
    secretsmanagerSecret,
    secretsmanagerSecretTargetAttachment,
    lambdaLayerVersion,
    ssmMaintenanceWindow,
    ssmResourceDataSync,
    apigatewayVpcLink,
    wafv2WebACLAssociation,
    ec2TransitGateway,
    ec2TransitGatewayRouteTableAssociation,
    ec2TransitGatewayAttachment,
    ec2TransitGatewayRouteTable,
    ec2TransitGatewayRouteTablePropagation,
    ec2TransitGatewayRoute,
    ssmParameter,
    lambdaLayerVersionPermission,
    apigatewayv2Route,
    ec2TrafficMirrorFilter,
    apigatewayv2Integration,
    apigatewayv2Stage,
    configRemediationConfiguration,
    apigatewayv2Deployment,
    ec2TrafficMirrorSession,
    apigatewayv2Model,
    ec2TrafficMirrorFilterRule,
    apigatewayv2Authorizer,
    apigatewayv2Api,
    apigatewayv2RouteResponse,
    apigatewayv2IntegrationResponse,
    ec2TrafficMirrorTarget,
    apigatewayv2DomainName,
    eventsEventBusPolicy,
    apigatewayv2ApiMapping,
    kinesisStreamConsumer,
    securityhubHub,
    codestarnotificationsNotificationRule,
    mskCluster,
    cassandraTable,
    cassandraKeyspace,
    eksNodegroup,
    batchComputeEnvironment,
    codebuildSourceCredential,
    eksCluster,
    cloudwatchCompositeAlarm,
    codebuildReportGroup,
    s3AccessPoint,
    wafv2RegexPatternSet,
    wafv2RuleGroup,
    wafv2WebACL,
    wafv2IPSet,
    acmpcaCertificateAuthority,
    accessanalyzerAnalyzer,
    acmpcaCertificate,
    acmpcaCertificateAuthorityActivation,
    resourcegroupsGroup,
    athenaWorkGroup,
    cloudwatchInsightRule,
    ecsPrimaryTaskSet,
    ecsTaskSet,
    codebuildProject,
    ssmMaintenanceWindowTarget,
    elasticbeanstalkConfigurationTemplate,
    ec2RouteTable,
    eventsRule,
    wafIPSet,
    iamGroup,
    codepipelineCustomActionType,
    ec2PlacementGroup,
    ec2VPCPeeringConnection,
    elasticsearchDomain,
    apigatewayRequestValidator,
    emrInstanceFleetConfig,
    workspacesWorkspace,
    rdsDBSecurityGroupIngress,
    ec2GatewayRouteTableAssociation,
    logsLogGroup,
    kinesisStream,
    autoscalingLaunchConfiguration,
    sqsQueue,
    route53RecordSet,
    wafSizeConstraintSet,
    cloudwatchDashboard,
    ec2NetworkAclEntry,
    ec2InternetGateway,
    iamPolicy,
    ecsCluster,
    elasticloadbalancingv2ListenerCertificate,
    iamRole,
    ec2LaunchTemplate,
    opsworksVolume,
    ec2Volume,
    emrCluster,
    ec2SpotFleet,
    gameliftAlias,
    ec2VPNConnectionRoute,
    directoryserviceMicrosoftAD,
    wafRule,
    snsSubscription,
    efsMountTarget,
    ssmDocument,
    configDeliveryChannel,
    ec2NetworkInterfacePermission,
    snsTopic,
    gameliftBuild,
    apigatewayDeployment,
    kmsKey,
    cloudwatchAlarm,
    redshiftCluster,
    opsworksApp,
    lambdaEventSourceMapping,
    certificatemanagerCertificate,
    apigatewayAuthorizer,
    ec2EIP,
    apigatewayDomainName,
    gameliftFleet,
    ec2SecurityGroupIngress,
    apigatewayDocumentationPart,
    rdsDBCluster,
    ecsService,
    iamUserToGroupAddition,
    rdsDBSubnetGroup,
    iotThing,
    elasticloadbalancingLoadBalancer,
    opsworksLayer,
    apigatewayApiKey,
    ec2SubnetRouteTableAssociation,
    iotPolicy,
    elasticacheSecurityGroup,
    iamInstanceProfile,
    codedeployDeploymentGroup,
    apigatewayModel,
    ec2Route,
    logsMetricFilter,
    apigatewayResource,
    ec2FlowLog,
    elasticloadbalancingv2LoadBalancer,
    iamAccessKey,
    elasticbeanstalkApplication,
    elasticacheSubnetGroup,
    snsTopicPolicy,
    lambdaAlias,
    ec2SecurityGroupEgress,
    elasticloadbalancingv2Listener,
    ec2NetworkInterface,
    opsworksStack,
    datapipelinePipeline,
    codedeployDeploymentConfig,
    ec2SubnetNetworkAclAssociation,
    apigatewayAccount,
    redshiftClusterParameterGroup,
    cloudtrailTrail,
    ec2SubnetCidrBlock,
    emrInstanceGroupConfig,
    autoscalingLifecycleHook,
    elasticloadbalancingv2ListenerRule,
    codepipelinePipeline,
    redshiftClusterSecurityGroupIngress,
    rdsOptionGroup,
    ec2NatGateway,
    elasticacheSecurityGroupIngress,
    iotTopicRule,
    opsworksElasticLoadBalancerAttachment,
    elasticacheReplicationGroup,
    cloudformationWaitCondition,
    ec2SecurityGroup,
    cloudwatchAnomalyDetector,
    route53HostedZone,
    apigatewayRestApi,
    ec2Subnet,
    codedeployApplication,
    lambdaEventInvokeConfig,
    ec2VPC,
    ec2Instance,
    cloudformationStack,
    elasticacheParameterGroup,
    wafByteMatchSet,
    sqsQueuePolicy,
    wafSqlInjectionMatchSet,
    applicationautoscalingScalingPolicy,
    efsFileSystem,
    rdsDBParameterGroup,
    logsLogStream,
    autoscalingScalingPolicy,
    configConfigurationRecorder,
    emrStep,
    rdsEventSubscription,
    elasticbeanstalkEnvironment,
    lambdaFunction,
    ec2DHCPOptions,
    apigatewayUsagePlan,
    iamUser,
    ec2NetworkAcl,
    opsworksInstance,
    configConfigRule,
    ec2VPNGatewayRoutePropagation,
    wafWebACL,
    s3Bucket,
    cloudformationWaitConditionHandle,
    lambdaVersion,
    apigatewayBasePathMapping,
    cloudformationMacro,
    ec2EgressOnlyInternetGateway,
    route53RecordSetGroup,
    kinesisfirehoseDeliveryStream,
    iamManagedPolicy,
    rdsDBInstance,
    ec2NetworkInterfaceAttachment,
    iotPolicyPrincipalAttachment,
    ec2CustomerGateway,
    applicationautoscalingScalableTarget,
    apigatewayStage,
    sdbDomain,
    ecrRepository,
    apigatewayGatewayResponse,
    apigatewayClientCertificate,
    apigatewayMethod,
    directoryserviceSimpleAD,
    ec2VolumeAttachment,
    ec2Host,
    rdsDBSecurityGroup,
    ecsTaskDefinition,
    kmsAlias,
    redshiftClusterSubnetGroup,
    ec2EIPAssociation,
    ec2VPNGateway,
    iotThingPrincipalAttachment,
    elasticacheCacheCluster,
    elasticbeanstalkApplicationVersion,
    ec2VPCEndpoint,
    opsworksUserProfile,
    elasticloadbalancingv2TargetGroup,
    ec2VPCGatewayAttachment,
    ec2VPNConnection,
    ec2VPCCidrBlock,
    logsSubscriptionFilter,
    logsDestination,
    redshiftClusterSecurityGroup,
    dynamodbTable,
    ec2EC2Fleet,
    wafXssMatchSet,
    route53HealthCheck,
    lambdaPermission,
    iotCertificate,
    ssmAssociation,
    rdsDBClusterParameterGroup,
    ec2VPCEndpointService,
    s3BucketPolicy,
    autoscalingAutoScalingGroup,
    cloudformationCustomResource,
    apigatewayDocumentationVersion,
    ec2VPCDHCPOptionsAssociation,
    apigatewayUsagePlanKey,
    emrSecurityConfiguration,
    autoscalingScheduledAction
};