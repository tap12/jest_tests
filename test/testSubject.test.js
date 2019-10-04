
import testSubject from '../src/testSubject';

jest.mock('../src/testSubject', () => () => ({
    name: 'Jody',
    methodOne: () => 10,
    methodTwo: () => 25,
}));

test('Expecting some mocked value before the test.', () => {
    const testSubject1 = new testSubject(); 
    expect(testSubject1.methodOne()).toBe(10);
  });