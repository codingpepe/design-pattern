import { describe, it, expect, beforeEach } from 'bun:test'
import { AzureVirtualMachine, AWSVirtualMachine, GoogleVirtualMachine, VirtualMachineManager, VirtualMachineType, VirtualMachineNotSupportedException } from './factory-method.pattern'

describe('VirtualMachineManager', () => {
    describe('createVirtualMachine', () => {
        it('should return an AzureVirtualMachine when type is azure', () => {
            const manager = new VirtualMachineManager('azure')
            const virtualMachine = manager.createVirtualMachine()
            expect(virtualMachine).toBeInstanceOf(AzureVirtualMachine)
            expect(virtualMachine.boot()).toBe('AzureVirtualMachine:boot')
            expect(virtualMachine.shutdown()).toBe('AzureVirtualMachine:shutdown')
        })

        it('should return an AWSVirtualMachine when type is azure', () => {
            const manager = new VirtualMachineManager('aws')
            const virtualMachine = manager.createVirtualMachine()
            expect(virtualMachine).toBeInstanceOf(AWSVirtualMachine)
            expect(virtualMachine.boot()).toBe('AWSVirtualMachine:boot')
            expect(virtualMachine.shutdown()).toBe('AWSVirtualMachine:shutdown')
        })

        it('should return an GoogleVirtualMachine when type is azure', () => {
            const manager = new VirtualMachineManager('google')
            const virtualMachine = manager.createVirtualMachine()
            expect(virtualMachine).toBeInstanceOf(GoogleVirtualMachine)
            expect(virtualMachine.boot()).toBe('GoogleVirtualMachine:boot')
            expect(virtualMachine.shutdown()).toBe('GoogleVirtualMachine:shutdown')
        })

        it('should throw a VirtualMachineNotSupportedException', () => {
            const manager = new VirtualMachineManager('linode' as VirtualMachineType)
            expect(() => manager.createVirtualMachine()).toThrow(new VirtualMachineNotSupportedException())
        })
    })
})