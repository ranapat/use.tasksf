import { tf } from 'tasksf';

import Simple from './examples/Simple';
import Self from './examples/Self';
import Exceptions from './examples/Exceptions';
import Chaining from './examples/Chaining';
import Remap from './examples/Remap';
import Attach from './examples/Attach';

const sequence = tf.sequence(
  () => {
    console.log();
    console.log('--- all examples are complete');
  }
);
sequence.push(new Simple());
sequence.push(new Self());
sequence.push(new Exceptions());
sequence.push(new Chaining());
sequence.push(new Remap());
sequence.push(new Attach());
sequence.run();
