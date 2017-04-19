import { tf } from 'tasksf';

import Simple from './examples/Simple';
import Exceptions from './examples/Exceptions';

const sequence = tf.sequence(
  () => {
    console.log();
    console.log('--- all examples are complete');
  }
);
sequence.push(new Simple());
sequence.push(new Exceptions());
sequence.run();
//exceptions();
