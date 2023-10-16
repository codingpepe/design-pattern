export interface VirtualMachine {
    boot(): string;
    shutdown(): string;
}

export interface VirtualMachineFactory {
    createVirtualMachine(): VirtualMachine;
}

export type VirtualMachineType = 'azure' | 'aws' | 'google' | string;

export class AzureVirtualMachine implements VirtualMachine {
    boot(): string {
        return 'AzureVirtualMachine:boot';
    }
    shutdown(): string {
        return 'AzureVirtualMachine:shutdown';
    }
}

export class AWSVirtualMachine implements VirtualMachine {
    boot(): string {
        return 'AWSVirtualMachine:boot';
    }
    shutdown(): string {
        return 'AWSVirtualMachine:shutdown';
    }
}

export class GoogleVirtualMachine implements VirtualMachine {
    boot(): string {
        return 'GoogleVirtualMachine:boot';
    }
    shutdown(): string {
        return 'GoogleVirtualMachine:shutdown';
    }
}

export class VirtualMachineManager implements VirtualMachineFactory {
    constructor(private type: VirtualMachineType) { }
    createVirtualMachine(): VirtualMachine {
        switch (this.type) {
            case 'azure':
                return new AzureVirtualMachine();
            case 'aws':
                return new AWSVirtualMachine();
            case 'google':
                return new GoogleVirtualMachine();
            default:
                throw new VirtualMachineNotSupportedException()
        }
    }
}

export class VirtualMachineNotSupportedException extends Error {}