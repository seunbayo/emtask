import Controller from '@ember/controller';
import { action } from "@ember/object";


export default class TasksController extends Controller {
    @action
    deleteTask() {
        this.store.findRecord('task', id).then(function (task) {
            task.deleteRecord();

            task.save();

        });
    };
}