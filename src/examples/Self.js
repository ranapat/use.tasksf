import { tf, Task } from 'tasksf';

class Self extends Task {
  run() {
    this._running = true;

    console.log();
    console.log('--- use.tasksf self');
    console.log();

    const task1 = tf.task(
      (self) => {
        console.log('task 1 run ' + self + ' ' + (self !== this));
      },
      (self) => {
        console.log('task 1 complete ' + self + ' ' + (self !== this));
      }
    );

    const sequence = tf.sequence(
      () => {
        console.log('sequence is complete');
        this.complete();
      }
    );

    sequence.push(task1);

    sequence.run();

    return 1;
  }
}

export default Self;