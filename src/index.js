import { tf } from 'tasksf';

import EventEmitter from 'events';

import Example from './examples/Example';
import Simple from './examples/Simple';
import Self from './examples/Self';
import Exceptions from './examples/Exceptions';
import Chaining from './examples/Chaining';
import Remap from './examples/Remap';
import Attach from './examples/Attach';
import TasksSharing from './examples/TasksSharing';
import Stopping from './examples/Stopping';
import Loops from './examples/Loops';

const sequence = tf.sequence(
  () => {
    console.log();
    console.log('--- all examples are complete');
  }
);
sequence.push(new Example());
sequence.push(new Simple());
sequence.push(new Self());
sequence.push(new Exceptions());
sequence.push(new Chaining());
sequence.push(new Remap());
sequence.push(new Attach());
sequence.push(new TasksSharing());
sequence.push(new Stopping());
sequence.push(new Loops());
sequence.run();
