import Controller from '@ember/controller';
import { action } from "@ember/object";


export default class TasksEditController extends Controller {
    @action
    editTask() {
        var self = this;


        var title = this.get(`model.title`);
        var description = this.get(`model.description`);
        var date = this.get(`model.date`);

        //update task
        this.store.findRecord('task', id).then(function (task) {
            task.set('title', title);
            task.set('description', description);
            task.set('date', new Date(date));

            //save to database
            task.save();

            self.transitionTo('tasks');
            
        });


    }
}