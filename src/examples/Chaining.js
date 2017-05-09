import { tf, Task } from 'tasksf';

class Chaining extends Task {
  run() {
    this._running = true;

    console.log();
    console.log('--- use.tasksf chaining');
    console.log();

    const task1 = tf.task(
      () => {
        console.log('task 1 run');
      },
      () => {
        console.log('task 1 complete');
      }
    );

    const sequence = tf.sequence(
      () => {
        console.log('chaining sequence is complete');
        this.complete();
      }
    ).push(task1).run();

    return 1;
  }
}

export default Chaining;
