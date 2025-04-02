import chalk from 'chalk';
import lodash from 'lodash';

const array = [1,2,3,4,5,6,6,5,4,3,2,1];
const uniqueNums = lodash.uniq(array);
console.log(uniqueNums);

console.log(chalk.blueBright("hello, with blue"));
