if (typeof TextEncoder === "undefined") {
  const util = require("util");
  global.TextEncoder = util.TextEncoder;
  global.TextDecoder = util.TextDecoder;
}

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/test'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/jest.config.ts']
};