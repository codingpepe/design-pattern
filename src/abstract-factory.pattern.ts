export interface CloudHosting {
    createVirtualMachine(): VirtualMachine;
    createStorage(): Storage;
    createNetwork(): Network;
}

export interface VirtualMachine {}
export interface Storage {}
export interface Network {}

export interface CloudHostingFactory {
    createCloudHosting(): CloudHosting;
}

export type CloudHostingType = 'azure' | 'aws' | 'google' | string;

export class AzureVirtualMachine implements VirtualMachine {}
export class AzureStorage implements Storage {}
export class AzureNetwork implements Network {}

export class AWSVirtualMachine implements VirtualMachine {}
export class AWSStorage implements Storage {}
export class AWSNetwork implements Network {}

export class GoogleVirtualMachine implements VirtualMachine {}
export class GoogleStorage implements Storage {}
export class GoogleNetwork implements Network {}

export class AzureCloudHosting implements CloudHosting {
    createNetwork(): Network {
        return new AzureNetwork();
    }

    createStorage(): Storage {
        return new AzureStorage()
    }

    createVirtualMachine(): VirtualMachine {
        return new AzureVirtualMachine();
    }
}

export class AWSCloudHosting implements CloudHosting {
    createNetwork(): Network {
        return new AWSNetwork();
    }

    createStorage(): Storage {
        return new AWSStorage()
    }

    createVirtualMachine(): VirtualMachine {
        return new AWSVirtualMachine();
    }
}

export class GoogleCloudHosting implements CloudHosting {
    createNetwork(): Network {
        return new GoogleNetwork();
    }

    createStorage(): Storage {
        return new GoogleStorage()
    }

    createVirtualMachine(): VirtualMachine {
        return new GoogleVirtualMachine();
    }
}

export class CloudHostingManager implements CloudHostingFactory {
    constructor(private type: CloudHostingType) { }
    createCloudHosting(): CloudHosting {
        switch (this.type) {
            case 'azure':
                return new AzureCloudHosting();
            case 'aws':
                return new AWSCloudHosting();
            case 'google':
                return new GoogleCloudHosting();
            default:
                throw new CloudHostingNotSupportedException()
        }
    }
}

export class CloudHostingNotSupportedException extends Error {}