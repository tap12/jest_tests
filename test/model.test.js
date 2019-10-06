import { GitHubRepo } from '../src/model';

// jest.mock('../src/model', () => () => ({
//     name: 'Jody',
//     stars: 4,
//     license: 'ss',
//     url: 'http',
//     toString: () => '10'
// }));

it('should return an empty string for 0 stars', () => {
    // given
    const modelToTest = new GitHubRepo({ stars: 0 });

    // when
    const result = modelToTest.starsInfo;

    // then
    expect(result).toEqual('');
});