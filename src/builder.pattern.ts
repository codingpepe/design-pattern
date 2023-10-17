import {
  CloudHostingManager as CloudHostingManagerFactory,
  CloudHostingFactory,
  VirtualMachine,
  Storage,
  Network
} from "~/abstract-factory.pattern";
export interface Hosting {
  getVirtualMachine(): VirtualMachine;
  getStorage(): Storage;
  getNetwork(): Network;
}
export interface HostingBuilder {
  setVirtualMachine(virtualMachine: VirtualMachine): HostingBuilder;
  setStorage(storage: Storage): HostingBuilder;
  setNetwork(network: Network): HostingBuilder;
  build(): Hosting;
}

export type HostingSpec = {
  virtualMachine: VirtualMachine;
  storage: Storage;
  network: Network;
};

export interface Director {
  createAzureHosting(): Hosting;
  createAWSHosting(): Hosting;
  createGoogleHosting(): Hosting;
}

export class CloudHosting implements Hosting {
  constructor(private spec: HostingSpec) {}

  getVirtualMachine(): VirtualMachine {
    return this.spec.virtualMachine;
  }
  getStorage(): Storage {
    return this.spec.storage;
  }

  getNetwork(): Network {
    return this.spec.network;
  }
}

export class CloudHostingBuilder implements HostingBuilder {
  private spec: Partial<HostingSpec> = {};

  setVirtualMachine(virtualMachine: VirtualMachine): HostingBuilder {
    this.spec.virtualMachine = virtualMachine;
    return this;
  }

  setNetwork(network: Network): HostingBuilder {
    this.spec.network = network;
    return this;
  }

  setStorage(storage: Storage): HostingBuilder {
    this.spec.storage = storage;
    return this;
  }

  build(): Hosting {
    return new CloudHosting(this.spec as HostingSpec);
  }
}

export class CloudHostingManager implements Director {
  private manager?: CloudHostingFactory;
  constructor(private builder: HostingBuilder) {}
  createAWSHosting(): Hosting {
    this.manager = new CloudHostingManagerFactory('aws')
    const provider = this.manager.createCloudHosting()
    return new CloudHosting({
        virtualMachine: provider.createVirtualMachine(),
        storage: provider.createStorage(),
        network: provider.createNetwork(),
    })
  }

  createAzureHosting(): Hosting {
    this.manager = new CloudHostingManagerFactory('azure')
    const provider = this.manager.createCloudHosting()
    return new CloudHosting({
        virtualMachine: provider.createVirtualMachine(),
        storage: provider.createStorage(),
        network: provider.createNetwork(),
    })
  }

  createGoogleHosting(): Hosting {
    this.manager = new CloudHostingManagerFactory('google')
    const provider = this.manager.createCloudHosting()
    return new CloudHosting({
        virtualMachine: provider.createVirtualMachine(),
        storage: provider.createStorage(),
        network: provider.createNetwork(),
    })
  }
}
