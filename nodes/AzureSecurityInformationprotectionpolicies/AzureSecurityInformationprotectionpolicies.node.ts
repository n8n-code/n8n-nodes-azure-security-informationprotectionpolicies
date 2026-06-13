import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSecurityInformationprotectionpolicies implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Security Informationprotectionpolicies',
                name: 'N8nDevAzureSecurityInformationprotectionpolicies',
                icon: { light: 'file:./azure-security-informationprotectionpolicies.png', dark: 'file:./azure-security-informationprotectionpolicies.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Security Center API specification for Microsoft.Security resource provider.',
                defaults: { name: 'Azure Security Informationprotectionpolicies' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSecurityInformationprotectionpoliciesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
