import {
  CloudHosting,
  CloudHostingBuilder,
  CloudHostingManager,
  Director,
} from "~/builder.pattern";
import { describe, it, expect, beforeEach } from "bun:test";
import {
  AWSNetwork,
  AWSStorage,
  AWSVirtualMachine,
  AzureNetwork,
  AzureStorage,
  AzureVirtualMachine,
  GoogleNetwork,
  GoogleStorage,
  GoogleVirtualMachine,
} from "~/abstract-factory.pattern";

describe("CloudHostingManager", () => {
  let director: Director;

  beforeEach(() => {
    director = new CloudHostingManager(new CloudHostingBuilder());
  });

  describe("createAzureHosting", () => {
    it("should return a Azure Cloud Hosting", () => {
      const hosting = director.createAzureHosting();
      expect(hosting).toBeInstanceOf(CloudHosting);
      expect(hosting.getVirtualMachine()).toBeInstanceOf(AzureVirtualMachine);
      expect(hosting.getStorage()).toBeInstanceOf(AzureStorage);
      expect(hosting.getNetwork()).toBeInstanceOf(AzureNetwork);
    });
  });

  describe("createGoogleHosting", () => {
    it("should return a Google Cloud Hosting", () => {
      const hosting = director.createGoogleHosting();
      expect(hosting).toBeInstanceOf(CloudHosting);
      expect(hosting.getVirtualMachine()).toBeInstanceOf(GoogleVirtualMachine);
      expect(hosting.getStorage()).toBeInstanceOf(GoogleStorage);
      expect(hosting.getNetwork()).toBeInstanceOf(GoogleNetwork);
    });
  });

  describe("createAWSHosting", () => {
    it("should return a AWS Cloud Hosting", () => {
      const hosting = director.createAWSHosting();
      expect(hosting).toBeInstanceOf(CloudHosting);
      expect(hosting.getVirtualMachine()).toBeInstanceOf(AWSVirtualMachine);
      expect(hosting.getStorage()).toBeInstanceOf(AWSStorage);
      expect(hosting.getNetwork()).toBeInstanceOf(AWSNetwork);
    });
  });
});
