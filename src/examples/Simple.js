import { tf, Task } from 'tasksf';

class Simple extends Task {
  run() {
    this._running = true;

    console.log();
    console.log('--- use.tasksf simple');
    console.log();

    const task1 = tf.task(
      () => {
        console.log('task 1 run');
      },
      () => {
        console.log('task 1 complete');
      }
    );
    const task2 = tf.task(
      5 * 1000,
      () => { console.log('task 2 run'); },
      () => { console.log('task 2 complete'); }
    );
    const task3 = tf.task(
      () => { console.log('task 3 complete'); }
    );

    const sequence = tf.sequence(
      () => {
        console.log('sequence is complete');
        this.complete();
      }
    );

    sequence.push(task1);
    sequence.push(task2);
    sequence.unshift(task3);

    sequence.run();

    setTimeout(
      () => {
        task3.complete();
      },
      1 * 1000
    );

    return 1;
  }
}

export default Simple;
