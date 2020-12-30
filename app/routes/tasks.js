import Route from '@ember/routing/route';

export default class TasksRoute extends Route {
    model: function() {
    return this.store.findAll('task');
  }

}
