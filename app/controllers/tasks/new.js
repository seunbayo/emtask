import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class NewTaskController extends Controller {
  @action
  addTask() {
    var title = this.get(`title`);
    var description = this.get(`description`);
    var date = this.get(`date`);

    //create a New task
    var newTask = this.store.createRecord('task', {
      title: title,
      description: description,
      date: new Date(date),
    });

    //save to Database
    newTask.save();

    //clear form
    this.setProperties({
      title: "",
      description: "",
      date: "",
    });
  }
}
