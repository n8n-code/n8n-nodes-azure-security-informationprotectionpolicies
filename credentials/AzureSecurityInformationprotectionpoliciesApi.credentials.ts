import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSecurityInformationprotectionpoliciesApi implements ICredentialType {
        name = 'N8nDevAzureSecurityInformationprotectionpoliciesApi';

        displayName = 'Azure Security Informationprotectionpolicies API';

        icon: Icon = { light: 'file:../nodes/AzureSecurityInformationprotectionpolicies/azure-security-informationprotectionpolicies.png', dark: 'file:../nodes/AzureSecurityInformationprotectionpolicies/azure-security-informationprotectionpolicies.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Security Informationprotectionpolicies API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
