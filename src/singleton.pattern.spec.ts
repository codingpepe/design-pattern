import { describe, it, expect } from 'bun:test'
import { ApplicationConfiguration } from '~/singleton.pattern';

describe('ApplicationConfiguration', () => {
    describe('getInstance', () => {
        it('should create a new instance of ApplicationConfiguration', () => {
            const instance = ApplicationConfiguration.getInstance();
            const anotherInstance = ApplicationConfiguration.getInstance();
            expect(instance).toBeDefined();
            expect(anotherInstance).toBeDefined();
            expect(instance).toBe(anotherInstance);
        })
    })
});