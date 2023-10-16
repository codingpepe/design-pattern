import { describe, it, expect, beforeEach } from "bun:test";
import {
  CloudHostingManager,
  AzureCloudHosting,
  AzureVirtualMachine,
  AzureNetwork,
  AzureStorage,
  AWSCloudHosting,
  AWSVirtualMachine,
  AWSNetwork,
  AWSStorage,
  GoogleCloudHosting,
  GoogleVirtualMachine,
  GoogleNetwork,
  GoogleStorage,
  CloudHostingNotSupportedException,
} from "./abstract-factory.pattern";

describe("CloudHostingManager", () => {
  describe("createCloudHosting", () => {
    describe("when type is azure", () => {
      it("should return an instance of AzureCloudHosting", () => {
        const cloudHostingManager = new CloudHostingManager("azure");
        const cloudHosting = cloudHostingManager.createCloudHosting();
        expect(cloudHosting).toBeInstanceOf(AzureCloudHosting);
        expect(cloudHosting.createVirtualMachine()).toBeInstanceOf(
          AzureVirtualMachine
        );
        expect(cloudHosting.createStorage()).toBeInstanceOf(AzureStorage);
        expect(cloudHosting.createNetwork()).toBeInstanceOf(AzureNetwork);
      });

      it("should return an instance of AWSCloudHosting", () => {
        const cloudHostingManager = new CloudHostingManager("aws");
        const cloudHosting = cloudHostingManager.createCloudHosting();
        expect(cloudHosting).toBeInstanceOf(AWSCloudHosting);
        expect(cloudHosting.createVirtualMachine()).toBeInstanceOf(
          AWSVirtualMachine
        );
        expect(cloudHosting.createStorage()).toBeInstanceOf(AWSStorage);
        expect(cloudHosting.createNetwork()).toBeInstanceOf(AWSNetwork);
      });

      it("should return an instance of GoogleCloudHosting", () => {
        const cloudHostingManager = new CloudHostingManager("google");
        const cloudHosting = cloudHostingManager.createCloudHosting();
        expect(cloudHosting).toBeInstanceOf(GoogleCloudHosting);
        expect(cloudHosting.createVirtualMachine()).toBeInstanceOf(
          GoogleVirtualMachine
        );
        expect(cloudHosting.createStorage()).toBeInstanceOf(GoogleStorage);
        expect(cloudHosting.createNetwork()).toBeInstanceOf(GoogleNetwork);
      });

      it("should return an instance of GoogleCloudHosting", () => {
        const cloudHostingManager = new CloudHostingManager("linode");
        expect(() => cloudHostingManager.createCloudHosting()).toThrow(new CloudHostingNotSupportedException)
      });
    });
  });
});
