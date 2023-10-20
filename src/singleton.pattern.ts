interface DatabaseConfig {}
interface AWSConfig {}
interface AzureConfig {}
interface GoogleCloudConfig {}

export class ApplicationConfiguration {
    private static instance: ApplicationConfiguration;
    private constructor() {}

    public static getInstance(): ApplicationConfiguration {
        if (!ApplicationConfiguration.instance) {
            ApplicationConfiguration.instance = new ApplicationConfiguration();
        }
        return ApplicationConfiguration.instance;
    }

    public getDatabaseConfig(): DatabaseConfig {
        return {};
    }

    public getAWSConfig(): AWSConfig {
        return {};
    }

    public getAzureConfig(): AzureConfig {
        return {};
    }

    public getGoogleCloudConfig(): GoogleCloudConfig {
        return {};
    }
}