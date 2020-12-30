import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class NewTaskController extends Controller {
  @action
  addTask() {
    var title = this.get(`title`);
    var description = this.get(`description`);
    var date = this.get(`date`);

  }
}