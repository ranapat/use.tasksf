import { tf, Task } from 'tasksf';

class Attach extends Task {
  run() {
    this._running = true;

    console.log();
    console.log('--- use.tasksf attach');
    console.log();

    const task1 = tf.task(
      (self) => {
        console.log('task 1 run ' + self.get('test') + ' ' + self.get(tf._CHAIN_));
      },
      (self) => {
        console.log('task 1 complete ' + self.get('test') + ' ' + self.get(tf._CHAIN_));
      }
    );

    const test = 'test';
    task1.run();
    task1.attach('test', test);
    task1.run();
    task1.detach('test');
    task1.run();

    const sequence1 = tf.sequence();
    sequence1.push(task1);
    task1.run();
    sequence1.remove(task1);
    task1.run();

    this.complete();
  }
}

export default Attach;
